"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

// Decorative, monochrome backdrop for the hero: ambient ripple rings pulsing
// from a focal point, a masked dot grid, slow-drifting glows, a cursor
// spotlight, and a ripple wherever the visitor clicks. Everything animates
// transform/opacity/SVG radius only, pauses off-screen, and falls back to a
// static composition for prefers-reduced-motion.

const RING_COUNT = 5;
const RING_DURATION = 10; // seconds for one ring to travel out and fade
const MAX_CLICK_RIPPLES = 4;

type Ripple = { id: number; x: number; y: number };
type Size = { width: number; height: number };

function focalPoint({ width, height }: Size) {
  // Sit the ripple source to the right of the headline; higher on mobile,
  // where the text stack fills the lower half of the screen.
  const x = width * 0.76;
  const y = height * (width < 768 ? 0.26 : 0.4);
  const maxRadius = Math.hypot(Math.max(x, width - x), Math.max(y, height - y));
  return { x, y, maxRadius };
}

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const nextRippleId = useRef(0);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { margin: "200px" });
  const [size, setSize] = useState<Size | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Cursor spotlight follows the pointer with a soft spring
  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);
  const spotX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.6 });
  const spotY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.6 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotX}px ${spotY}px, rgba(255,255,255,0.07), transparent 65%)`;

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;

    const observer = new ResizeObserver(([entry]) => {
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(layer);

    const localPoint = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const { x, y } = localPoint(event);
      pointerX.set(x);
      pointerY.set(y);
    };

    const handleDown = (event: PointerEvent) => {
      const { x, y } = localPoint(event);
      const id = nextRippleId.current++;
      setRipples((current) => [...current.slice(-(MAX_CLICK_RIPPLES - 1)), { id, x, y }]);
    };

    const handleLeave = () => {
      pointerX.set(-1000);
      pointerY.set(-1000);
    };

    section.addEventListener("pointermove", handleMove, { passive: true });
    section.addEventListener("pointerdown", handleDown, { passive: true });
    section.addEventListener("pointerleave", handleLeave);

    return () => {
      observer.disconnect();
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerdown", handleDown);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, [pointerX, pointerY]);

  const focal = size ? focalPoint(size) : null;
  const animate = inView && !reduceMotion;
  const maskOrigin = focal && size
    ? `${(focal.x / size.width) * 100}% ${(focal.y / size.height) * 100}%`
    : "76% 40%";

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Drifting glows — give the black some depth */}
      <motion.div
        className="absolute -top-1/4 right-[-10%] w-[70vmax] h-[70vmax] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.09), transparent 60%)" }}
        initial={{ opacity: 0 }}
        animate={
          animate
            ? { opacity: [0.7, 1, 0.7], x: ["0%", "-8%", "0%"], y: ["0%", "6%", "0%"] }
            : { opacity: 0.8 }
        }
        transition={{ duration: 18, repeat: animate ? Infinity : 0, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-35%] left-[-15%] w-[60vmax] h-[60vmax] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 60%)" }}
        initial={{ opacity: 0 }}
        animate={
          animate
            ? { opacity: [0.6, 1, 0.6], x: ["0%", "10%", "0%"], y: ["0%", "-5%", "0%"] }
            : { opacity: 0.7 }
        }
        transition={{ duration: 24, repeat: animate ? Infinity : 0, ease: "easeInOut" }}
      />

      {/* Dot grid, fading out from the ripple source */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: `radial-gradient(ellipse 55% 60% at ${maskOrigin}, black, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse 55% 60% at ${maskOrigin}, black, transparent 75%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: "easeOut" }}
      />

      {/* Ripple rings */}
      {focal && (
        <svg className="absolute inset-0 w-full h-full" fill="none">
          {Array.from({ length: RING_COUNT }, (_, i) =>
            animate ? (
              <motion.circle
                key={`ring-${i}`}
                cx={focal.x}
                cy={focal.y}
                stroke="white"
                strokeWidth={1}
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: [0, focal.maxRadius], opacity: [0, 0.28, 0] }}
                transition={{
                  duration: RING_DURATION,
                  delay: 0.8 + (i * RING_DURATION) / RING_COUNT,
                  repeat: Infinity,
                  ease: "linear",
                  opacity: {
                    duration: RING_DURATION,
                    delay: 0.8 + (i * RING_DURATION) / RING_COUNT,
                    repeat: Infinity,
                    times: [0, 0.08, 1],
                    ease: "easeOut",
                  },
                }}
              />
            ) : (
              <motion.circle
                key={`ring-${i}`}
                cx={focal.x}
                cy={focal.y}
                r={(focal.maxRadius * (i + 1)) / (RING_COUNT + 1)}
                stroke="white"
                strokeWidth={1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.14 - i * 0.02 }}
                transition={{ duration: 1.6, delay: 0.3 + i * 0.12 }}
              />
            )
          )}

          {/* Focal point */}
          <motion.circle
            cx={focal.x}
            cy={focal.y}
            r={3}
            fill="white"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: [0.25, 0.7, 0.25] } : { opacity: 0.5 }}
            transition={{ duration: RING_DURATION / RING_COUNT, repeat: animate ? Infinity : 0, delay: 0.8 }}
          />

          {/* Click / tap ripples */}
          {!reduceMotion &&
            ripples.map((ripple) => (
              <motion.circle
                key={ripple.id}
                cx={ripple.x}
                cy={ripple.y}
                stroke="white"
                strokeWidth={1}
                initial={{ r: 0, opacity: 0.5 }}
                animate={{ r: 420, opacity: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() =>
                  setRipples((current) => current.filter((r) => r.id !== ripple.id))
                }
              />
            ))}
        </svg>
      )}

      {/* Cursor spotlight — always rendered so server and client markup match
          (the server can't know the motion preference); hidden via opacity */}
      <motion.div
        className="absolute inset-0"
        style={{ background: spotlight }}
        initial={{ opacity: 0 }}
        animate={{ opacity: reduceMotion ? 0 : 1 }}
        transition={{ duration: 1 }}
      />

      {/* Keep the headline and stats bar crisp over the effect */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/80 to-transparent" />
    </div>
  );
}
