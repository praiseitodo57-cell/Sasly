"use client"

import Link from "next/link"
import Navbar from "../components/NavBar"
import AnimateOnScroll from "@/components/AnimateOnScroll"
import { CalendarDays, ChevronRight, SearchCheck } from "lucide-react"
import Image from "next/image"
import SolutionsSection from "@/components/SolutionsSection"
import AccordionBasic from "@/components/AccordionBasic"
import FintechHero from "@/components/FintechHero"
import Footer from "@/components/Footer"
import FeaturesWithCharts from "@/components/FeaturesWithCharts"

export default function SectionHero() {
  return (
    <div>
      <section>
          <Navbar/>
      </section>
        <section className="relative flex h-[40vh] min-h-[480px] items-center justify-center overflow-hidden rounded">
        
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d161f] via-[#1a1a1a] to-[#0f2e2a]" />

        {/* GRAIN / NOISE OVERLAY */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
            Solution
            </h1>

            <div className="mt-4 flex items-center justify-center gap-3 text-lg text-gray-300">
            <Link href="/" className="hover:text-green-400 transition">
                Home
            </Link>
            <span className="text-green-400">•</span>
            <span>Solution</span>
            </div>
        </div>
        </section>
      <AnimateOnScroll animation="animate-fadeInUp">
         <section className="py-24">
           <FeaturesWithCharts/>
         </section>
      </AnimateOnScroll>
   <section className="py-18">
  <div className="mx-auto max-w-8xl px-6">

    {/* GRADIENT WRAPPER */}
    <div className="rounded-3xl bg-gradient-to-br from-[#fff7e6] via-white to-[#f2e9ff] px-6 py-24 sm:px-12">

      {/* HEADER */}
    <AnimateOnScroll animation="animate-fadeInDown">
      <div className="mx-auto max-w-3xl text-center mb-20">
        <span className="inline-block mb-6 rounded-xl bg-green-100 px-10 py-3 text-xl font-semibold text-gray-900 border-2 border-gray-400">
          Solution
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
         Empower Your Success with Our Solutions
        </h2>
      </div>
    </AnimateOnScroll>
      {/* CARDS */}
    <AnimateOnScroll animation="animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

        {/* CARD 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition hover:border border-green-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
          <Image
          src="/icon-1.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
            
        </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Embedded Finance
          </h1>

          <p className="text-gray-600 leading-relaxed text-xl">
            Embedded Finance integrates financial services payments or lending into non-financial platforms for seamless.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition hover:border border-green-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
            <Image
          src="/icon-2.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            
           Digital Payment Solutions
          </h3>

          <p className="text-gray-600 leading-relaxed text-xl">
           Digital Payment Solutions enable seamless transactions via online platforms, wallets, and mobile devices.
          </p>
        </div>

        {/* CARD 3 */}
        

      </div>
    </AnimateOnScroll>
    
    {/* CARDS */}
    <AnimateOnScroll animation="animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">

      
        {/* CARD 3 */}
        <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition hover:border border-green-400">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
            <Image
          src="/icon-3.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
           AI-Based Risk Management Software Solutions
          </h3>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations
          </p>
        </div>

        {/* CARD 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition hover:border border-green-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
           <Image
          src="/icon-4.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
            
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Customizable User Dashboards
          </h1>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations.
          </p>
        </div>

      </div>
    </AnimateOnScroll>
      {/* CARDS 2 */}
    <AnimateOnScroll animation="animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 [animation:fadeIndown_8s_cubic-bezier(0.16,1,0.3,1)_forwards]">

        

        {/* CARD 2 */}
        <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition hover:border border-green-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
            <Image
          src="/icon-5.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            
           Cross-Platform Integration system solutions
          </h3>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations
          </p>
        </div>

        {/* CARD 3 */}
        <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-lg transition hover:border border-green-400">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 hover:bg-green-600">
            <Image
          src="/icon-6.png"
          width={43}
          height={43}
          alt="Floating card"
          className="rounded-xl "
        />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
           Advanced Data Encryption management solutions
          </h3>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations
          </p>
        </div>
      
      </div>
    </AnimateOnScroll>
    </div>
  </div>
 </section>
  
  <section className="px-6 md:px-16 py-14">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <AnimateOnScroll animation="animate-fadeInLeft">
        <div>
          <span className="inline-block rounded-md bg-emerald-100 px-9 py-3 text-xl font-medium text-gray-900 border-2 border-gray-400">
            FAQs
          </span>

          <h2 className="mt-6 text-6xl font-bold leading-tight text-gray-900">
            Frequently Asked <br /> Questions
          </h2>

          <p className="mt-4 max-w-md text-gray-600 text-xl">
            Have any questions? Don’t hesitate to contact us!
          </p>

          <button className="mt-8 inline-flex rounded-md border border-gray-900 px-10 py-5 text-sm font-medium transition hover:bg-green-500 hover:text-white hover:border-green-500">
            Get A Quote  <ChevronRight className="w-6 sm:w-7" />
          </button>
        </div>
       </AnimateOnScroll>
        {/* RIGHT SIDE (Accordion Space) */}
         <AnimateOnScroll animation="animate-fadeInRight">
             <div>
               <AccordionBasic />
            </div>
          </AnimateOnScroll>
      </div>
    </section>

    <section>
        <FintechHero/>
    </section>
    <Footer/>
</div>
  )
}
