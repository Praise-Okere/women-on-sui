"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const merchItems = [
  {
    id: 1,
    name: "Classic Hoodie",
    status: "Available",
    image: "/hoodie.jpeg",
  },
  {
    id: 2,
    name: "Tote bag",
    status: "Available",
    image: "/totebag.jpeg",
  },
  {
    id: 3,
    name: "Wristbead",
    status: "Available",
    image: "/bead.jpeg",
  },
  {
    id: 4,
    name: "T-Shirt",
    status: "Coming Soon",
    image: "/tshirt.jpeg",
  },
  {
    id: 5,
    name: "Water Bottle",
    status: "Coming Soon",
    image: "/bottle.jpeg",
  },
]

export default function Merch() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("merch-scroll")
    if (container) {
      const scrollAmount = 320
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount
      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  return (
    <section id="merch" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Women on Sui Merch</h2>
          <p className="text-muted-foreground text-lg">Show your support with exclusive merchandise</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div
            id="merch-scroll"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {merchItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80 group">
                <div className="relative h-64 w-full mb-4 overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    item.status === "Available"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {item.status === "Available" ? "Shop Now" : "Coming Soon"}
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
