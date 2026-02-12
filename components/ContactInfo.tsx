"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"
import GetInTouch from "./GetInTouch"
export default function ContactInfo() {
  return (
    <section className="px-6 py-15 md:px-16">
      <div className="mx-auto max-w-7xl">
     <AnimateOnScroll animation="animate-fadeInUp">
        <div className="grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-2xl bg-emerald-50 p-8">
            <div className="mb-6 text-emerald-500">
              <MapPin size={36} strokeWidth={1.5} />
            </div>

            <h3 className="mb-4 text-xl font-medium text-gray-500">
              Office Address
            </h3>

            <p className="text-base leading-relaxed text-gray-900">
              80 Main street, 5th block, <br />
              Melbourne, Australia
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-emerald-50 p-8">
            <div className="mb-6 text-emerald-500">
              <Mail size={36} strokeWidth={1.5} />
            </div>

            <h3 className="mb-4 text-xl font-medium text-gray-500">
              Email Address
            </h3>

            <p className="text-base text-gray-900">
              example@gmail.com <br />
              www.sasly.net
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl bg-emerald-50 p-8">
            <div className="mb-6 text-emerald-500">
              <Phone size={36} strokeWidth={1.5} />
            </div>

            <h3 className="mb-4 text-xl font-medium text-gray-500">
              Office Address
            </h3>

            <p className="text-base text-gray-900">
              000 (123) 456 55 88 <br />
              123 (456) 88 99 223
            </p>
          </div>

        </div>
        </AnimateOnScroll>
      </div>
      <div>
        <GetInTouch/>
      </div>
    </section>
  )
}
