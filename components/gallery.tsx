"use client"

import Image from "next/image"
import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    title: "Women on Sui event 2025",
    image: "/WIS-123.jpg",
    size: "large", // 2x2 grid
  },
  {
    id: 2,
    title: "",
    image: "/WIS-102.jpg",
    size: "medium",
  },
  {
    id: 3,
    title: "",
    image: "/WIS-180.jpg",
    size: "medium",
  },
  {
    id: 4,
    title: "",
    image: "/WIS-252.jpg",
    size: "large",
  },
  {
    id: 5,
    title: "",
    image: "/WIS-265.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "",
    image: "/WIS-298.jpg",
    size: "medium",
  },
  {
    id: 7,
    title: "",
    image: "/WIS-312.jpg",
    size: "large",
  },
  {
    id: 8,
    title: "",
    image: "/WIS-274.jpg",
    size: "medium",
  },
  {
    id: 9,
    title: "",
    image: "/WIS-161.jpg",
    size: "medium",
  },
  {
    id: 10,
    title: "",
    image: "/WIS-68.jpg",
    size: "large",
  },
  {
    id: 11,
    title: "",
    image: "/WIS-122.jpg",
    size: "medium",
  },
  {
    id: 12,
    title: "",
    image: "/WIS-131.jpg",
    size: "medium",
  },
]

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg">Moments from our community events</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 ${
                item.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(item)}
            >
              <div className={`relative overflow-hidden bg-muted ${item.size === "large" ? "h-96" : "h-64"}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white font-semibold text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            >
              View More <span className="ml-2">&lt;&gt;</span>
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
