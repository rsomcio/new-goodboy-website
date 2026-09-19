import { useState } from 'react'

export function SimpleCarousel() {
  const images = [
    '/assets/images/IMG_0628.jpeg',
    '/assets/images/IMG_1338.jpeg',
    '/assets/images/IMG_1478.jpeg',
    '/assets/images/IMG_9026.jpeg',
    '/assets/images/IMG_9770.jpeg',
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
        className="mx-auto w-[70%] sepia-[0.4]"
      />

      <button
        onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            className="stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            className="stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
