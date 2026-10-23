"use client";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/data/projects";

// Thumbnail grid that opens a full, uncropped view of a screenshot.
export function ProjectGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [open, setOpen] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((img) => (
          <figure key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(img)}
              className="group block w-full overflow-hidden rounded-xl shadow-[var(--shadow-aceternity)]"
              aria-label={`Enlarge: ${img.caption || title}`}
            >
              <motion.div layoutId={`gallery-${img.src}`}>
                <Image
                  src={img.src}
                  alt={img.caption || `${title} screenshot`}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </motion.div>
            </button>
            {img.caption && (
              <figcaption className="text-secondary pt-2 text-xs">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex cursor-zoom-out flex-col items-center justify-center gap-3 bg-neutral-950/80 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full bg-neutral-800 p-2 text-neutral-200"
            >
              <IconX className="size-4" />
            </button>
            <motion.div
              layoutId={`gallery-${open.src}`}
              className="max-h-[85vh] max-w-5xl overflow-hidden rounded-xl"
            >
              <Image
                src={open.src}
                alt={open.caption || `${title} screenshot`}
                width={1600}
                height={1000}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
            {open.caption && <p className="text-sm text-neutral-300">{open.caption}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
