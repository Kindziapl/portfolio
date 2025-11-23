import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type GalleryModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next" | number) => void;
};

export const GalleryModal = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryModalProps) => {
  // Show 5 thumbnails, center current image
  const THUMB_COUNT = 5;
  let start = Math.max(0, currentIndex - Math.floor(THUMB_COUNT / 2));
  let end = start + THUMB_COUNT;
  if (end > images.length) {
    end = images.length;
    start = Math.max(0, end - THUMB_COUNT);
  }
  const visibleThumbs = images.slice(start, end);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate("prev");
      } else if (e.key === "ArrowRight") {
        onNavigate("next");
      }
    };

    // Block body scroll when modal is open
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 w-screen h-screen  bg-black/90 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full flex flex-col justify-center max-w-[80vw] min-h-screen max-h-screen pt-32 pb-16 "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}

        {/* Main Image */}
        <div className=" rounded-lg relative  items-center justify-center  overflow-hidden mb-4">
          <button
            onClick={onClose}
            className="absolute top-1 right-1 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <Image
            width={1920}
            height={1080}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-auto max-h-[70vh] object-contain rounded-xl overflow-hidden"
          />
        </div>

        {/* Navigation Arrows */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => onNavigate("prev")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-white font-medium">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={() => onNavigate("next")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
              disabled={currentIndex === images.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails - centered on current image, no scroll */}
          <div className="flex gap-2 pb-2 items-center overflow-hidden w-full self-center justify-self-end justify-center ">
            {visibleThumbs.map((img, idx) => {
              // Calculate real index in images
              const realIdx = start + idx;
              return (
                <button
                  key={realIdx}
                  onClick={() => onNavigate(realIdx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    realIdx === currentIndex
                      ? "border-yellow-400 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    width={1920}
                    height={1080}
                    alt={`Thumbnail ${realIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
