"use client";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { collage } from "@/data/site";

export function Collage() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="px-4 py-6">
      <SectionHeading>Things I&apos;ve shipped &amp; shaped</SectionHeading>
      <p className="text-secondary pt-2 text-xs">Psst — the cards are draggable.</p>
      <DraggableCardContainer
        ref={ref}
        className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip"
      >
        {collage.map((item) => (
          <DraggableCardBody key={item.title} constraintsRef={ref} className={item.className}>
            <Image
              src={item.image}
              alt={item.title}
              width={480}
              height={320}
              draggable={false}
              className="pointer-events-none relative z-10 h-40 w-full rounded-sm object-cover object-top"
            />
            <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
