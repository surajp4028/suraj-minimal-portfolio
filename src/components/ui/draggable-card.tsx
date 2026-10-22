"use client";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Aceternity UI "Draggable Card": tilts toward the cursor, shows a glare, and
// can be flung around inside its container.
export function DraggableCardBody({
  className,
  children,
  constraintsRef,
}: {
  className?: string;
  children?: React.ReactNode;
  constraintsRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { stiffness: 100, damping: 20, mass: 0.5 };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), spring);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), spring);
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), spring);
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 18 }}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={() => {
        document.body.style.cursor = "default";
        animate(rotateX, 0, { type: "spring", ...spring });
        animate(rotateY, 0, { type: "spring", ...spring });
      }}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
      whileHover={{ scale: 1.02, zIndex: 30 }}
      whileDrag={{ zIndex: 40, cursor: "grabbing" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={cn(
        "relative min-h-54 w-60 cursor-grab overflow-hidden rounded-md bg-neutral-100 p-2 shadow-2xl transform-3d dark:bg-neutral-800",
        className,
      )}
    >
      {children}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
}

export function DraggableCardContainer({
  className,
  children,
  ref,
}: {
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={cn("[perspective:3000px]", className)}>
      {children}
    </div>
  );
}
