"use client"

import Image from "next/image"
import { CalendarDays, ChevronRight } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

export default function InsightsSection() {
  return (
    <section className="px-6 py-16 md:px-16">
      {/* HEADER */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        <AnimateOnScroll animation="animate-fadeInUp">
          <div>
            <span className="mb-4 inline-block rounded-xl border-2 border-gray-300 bg-green-50 px-8 py-3 text-lg font-medium text-gray-900">
              Latest Insights
            </span>

            <h2 className="text-4xl font-bold text-gray-900 md:text-6xl">
              Explore Our Latest News
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fadeInRight" delay={1000}>
          <button className="flex items-center gap-2 rounded-lg bg-green-400 px-10 py-5 text-lg font-medium text-black transition hover:bg-green-500">
            View All News <ChevronRight size={18} />
          </button>
        </AnimateOnScroll>
      </div>

      {/* CARDS */}
      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <InsightCard image="/blog3.jpg" delay={0} />
        <InsightCard image="/blog2.jpg" delay={50} />
        <InsightCard image="/blog1.jpg" delay={30} />
      </div>
    </section>
  )
}

function InsightCard({
  image,
  delay,
}: {
  image: string
  delay: number
}) {
  return (
    <AnimateOnScroll animation="animate-fadeInUp" delay={delay}>
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt="Insight image"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays size={16} />
            <span>December 15, 2025</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold text-gray-900">
            Revolutionizing Financial Agencies Through Fintech
          </h3>

          <div className="mt-6 flex items-center gap-2 text-lg text-gray-500 transition hover:text-green-400">
            <span>Read More</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
