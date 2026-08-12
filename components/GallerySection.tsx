"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const galleryImages = [
  {
    src: "/PHOTO-2026-08-10-03-47-50%202.jpg",
    alt: "Boxer slipping a punch during pad work",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-49%204.jpg",
    alt: "Boxing pad work training session",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-50%203.jpg",
    alt: "Athlete punching a focus mitt",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-49%205.jpg",
    alt: "Coach working with a boxer",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-47.jpg",
    alt: "Athlete training on an agility ladder",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-49.jpg",
    alt: "Group agility ladder training",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-49%203.jpg",
    alt: "Boxing coach holding focus mitts",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-50%204.jpg",
    alt: "Boxer training with coach",
  },
];

const visibleCount = 4;
const slideCount = 4;
const galleryVideo = "/VIDEO-2026-08-10-03-47-47.mp4";

export function GallerySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const visibleImages = Array.from({ length: visibleCount }, (_, index) => {
    return galleryImages[(activeSlide + index) % galleryImages.length];
  });

  const showPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slideCount - 1 : current - 1));
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slideCount);
  };

  return (
    <section id="gallery" className="bg-[#f3f4f6] px-6 py-6 text-[#111] sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-[24px] font-black leading-none tracking-[0] text-[#ff3339]">
              Gallery
            </h2>
            <div className="mt-2 h-[2px] w-[54px] bg-[#ff3339]" />
            <p className="mt-4 text-[14px] leading-none text-[#424a5d]">
              Take a peek into some of our activities...
            </p>
          </div>

          <div className="mt-9 flex items-center gap-5" aria-label="Gallery controls">
            <button
              type="button"
              aria-label="Previous gallery images"
              onClick={showPrevious}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9ca3af] text-white transition hover:bg-[#6b7280] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              <FaArrowLeft aria-hidden="true" className="h-3 w-3" />
            </button>
            <button
              type="button"
              aria-label="Next gallery images"
              onClick={showNext}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff3339] text-white transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              <FaArrowRight aria-hidden="true" className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
          {visibleImages.map((image, index) => (
            <div
              key={`${image.src}-${activeSlide}-${index}`}
              className="relative aspect-[184/152] overflow-hidden rounded-[8px] bg-zinc-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 230px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2" aria-label="Gallery pagination">
          {Array.from({ length: slideCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show gallery slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339] ${
                activeSlide === index ? "bg-[#ff3339]" : "bg-[#9ca3af] hover:bg-[#6b7280]"
              }`}
            />
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-4">
          <div>
            <p className="text-[13px] font-black uppercase leading-none tracking-[0] text-[#ff3339]">
              Training Video
            </p>
            <div className="mt-2 h-[2px] w-[46px] bg-[#ff3339]" />
            <p className="mt-3 max-w-[340px] text-[13px] leading-[1.45] text-[#424a5d]">
              Watch a short look at our athletes in motion.
            </p>
          </div>

          <div className="mx-auto aspect-[9/16] w-full max-w-full overflow-hidden rounded-[8px] border h-[400px] border-black/10 bg-[#111] shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:max-w-[360px]">
            <video
              className="h-[400px] w-full bg-[#111] object-cover "
              src={galleryVideo}
              controls
              preload="metadata"
              playsInline
              aria-label="Boxing training gallery video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
