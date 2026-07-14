"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AnimateOnScroll from "./AnimateOnScroll"
import { useInView } from "@/hooks/useInView"

const testimonials = [
  {
    name: "Derick Alvarez",
    role: "Businessman",
    image: "/img3.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Wendy Law",
    role: "CEO",
    image: "/portrait.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Alfred Ruiz",
    role: "CO-FOUNDER",
    image: "/portrait-of-1.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Rosemary Ingram",
    role: "Business-Woman",
    image: "/woman.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Daniel Moore",
    role: "CTO",
    image: "/portrait-of-1.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Sophia Lee",
    role: "Product Manager",
    image: "/portrait.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
  {
    name: "Michael Scott",
    role: "Founder",
    image: "/img3.png",
    quote:
      "Working with Your Agency has been a game-changer for our business. Their strategic insights and innovative solutions propelled our growth.",
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(4)
  const { ref, isVisible } = useInView()

  /* 🔁 Detect screen size — keep breakpoints in sync with the card width classes below */
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(4)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)

    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  /* Clamp index whenever visibleCards changes, so we don't slide past the end */
  useEffect(() => {
    setIndex((prev) =>
      Math.min(prev, Math.max(testimonials.length - visibleCards, 0))
    )
  }, [visibleCards])

  /* ⏱ Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > testimonials.length - visibleCards ? 0 : prev + 1
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [visibleCards])

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="rounded-3xl bg-gradient-to-br from-[#fef6df] via-white to-[#eadcff] px-4 py-10 sm:px-6 sm:py-16">

        {/* Header */}
        <AnimateOnScroll animation="animate-fadeInDown">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-md border-2 border-gray-300 bg-emerald-100 px-5 py-2 text-base font-medium text-gray-900 sm:px-8 sm:py-3 sm:text-xl md:px-10 md:text-2xl">
              Our Testimonials
            </span>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              What Our Customers Say About Us
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll animation="animate-fadeInUp">
          <div className="overflow-hidden py-8 sm:py-10">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out sm:gap-6"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="
                    relative
                    w-full
                    shrink-0
                    rounded-2xl
                    bg-white
                    p-5
                    shadow-sm
                    sm:w-1/2
                    sm:p-6
                    lg:w-1/4
                  "
                >
                  {/* Quote Icon */}
                  <span className="absolute right-4 top-2 text-4xl font-bold text-emerald-400 sm:right-6 sm:top-6 sm:text-5xl">
                    "
                  </span>

                  {/* Avatar */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-center text-xl font-semibold text-gray-900 sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mb-4 text-center text-base text-gray-500 sm:text-lg">
                    {item.role}
                  </p>

                  {/* Quote */}
                  <p className="text-center text-base text-gray-600 sm:text-lg">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}