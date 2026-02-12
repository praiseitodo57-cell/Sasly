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

  /* 🔁 Detect screen size */
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
    <section className="mx-auto max-w-8xl px-15 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-[#fef6df] via-white to-[#eadcff] px-6 py-16">

        {/* Header */}
        <AnimateOnScroll animation="animate-fadeInDown">
        <div className="flex flex-col items-center text-center">
              <span className="rounded-md bg-emerald-100 px-10 py-3 text-2xl font-medium text-gray-900 border-2 border-gray-300">
                Our Testimonials
              </span>

              <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-6xl">
                What Our Customers Say About Us
              </h2>
        </div>

       </AnimateOnScroll>
        {/* Carousel */}

        <AnimateOnScroll animation="animate-fadeInUp">
        <div className="overflow-hidden py-10">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="
                  w-full
                  sm:w-1/2
                  lg:w-1/4
                  shrink-0
                  rounded-2xl
                  bg-white
                  p-6
                  shadow-sm
                  relative
                "
              >
                {/* Quote Icon */}
                <span className="absolute right-6 top-6 text-5xl font-bold text-emerald-400">
                  “
                </span>

                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-2xl font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="mb-4 text-center text-lg text-gray-500">
                  {item.role}
                </p>

                {/* Quote */}
                <p className="text-center text-lg text-gray-600">
                  “{item.quote}”
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
