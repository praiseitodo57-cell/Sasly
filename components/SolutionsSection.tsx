"use client"

import {
  Landmark,
  CreditCard,
  DollarSign,
  Send,
} from "lucide-react"

import AnimateOnScroll from "./AnimateOnScroll"

const solutions = [
  {
    icon: Landmark,
    title: "Bank Account",
    desc: "Tailored services designed to meet your financial goals.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    desc: "Simple, secure payments at your convenience.",
  },
  {
    icon: DollarSign,
    title: "Investments",
    desc: "Grow your wealth with tailored investment options.",
  },
  {
    icon: Send,
    title: "Funds Transfer",
    desc: "Quick and secure transfers, anytime, anywhere.",
  },
]

export default function SolutionsSection() {
  return (
    <section className="px-6 py-20 md:px-16 bg-white">
      {/* Header */}
      <AnimateOnScroll animation="animate-fadeInDown">
        <div className="text-center max-w-3xl mx-auto">
         <span className="inline-block rounded-lg border border-gray-200 bg-emerald-50 px-12 py-2 text-xl font-medium text-gray-900">
           Solutions
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Your Money, Our Trusted Guarantee
         </h2>
       </div>
      </AnimateOnScroll>
      {/* Cards */}
      <AnimateOnScroll animation="animate-fadeInUp">
       <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {solutions.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border border-green-300 "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
      </AnimateOnScroll>
    </section>
  )
}
