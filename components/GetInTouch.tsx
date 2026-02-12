"use client"
import AnimateOnScroll from "./AnimateOnScroll"
import Image from "next/image"

export default function GetInTouch() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-8xl gap-12 md:grid-cols-2 items-start">

        {/* LEFT CONTENT */}
        <AnimateOnScroll animation="animate-fadeInLeft">
        <div>
          <span className="mb-6 inline-block rounded-lg bg-emerald-100 px-10 py-2 text-xl font-medium text-gray-900">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Need Any Helps <br /> & Grow sales
          </h2>

          <p className="mt-6 max-w-md text-gray-600">
            Business consulting agency can a game-changer, fresh perspectives,
            specialized experts
          </p>

          <div className="relative mt-10 h-48 w-full max-w-md overflow-hidden rounded-xl">
            <Image
              src="/mw.png" // replace with your image
              alt="Team discussion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-fadeInRight">
        {/* RIGHT FORM */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Send Message Us
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="mt-8 space-y-6">
            {/* NAME & EMAIL */}
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-3 text-sm outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 py-3 text-sm outline-none focus:border-emerald-500"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-none border-b border-gray-300 py-3 text-sm outline-none focus:border-emerald-500"
            />

            {/* CHECKBOX */}
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              Save my name, email, and website in this browser for the next time I comment.
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-8 py-4 text-sm font-medium text-black transition hover:bg-emerald-500"
            >
              Send Message Us
              <span className="text-lg">»</span>
            </button>
          </form>
        </div>
      </AnimateOnScroll>
      </div>
    </section>
  )
}
