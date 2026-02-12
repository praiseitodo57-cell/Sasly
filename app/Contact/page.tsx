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
import ContactInfo from "@/components/ContactInfo"

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
            Contact
            </h1>

            <div className="mt-4 flex items-center justify-center gap-3 text-lg text-gray-300">
            <Link href="/" className="hover:text-green-400 transition">
                Home
            </Link>
            <span className="text-green-400">•</span>
            <span>Contact</span>
            </div>
        </div>
        </section>

      <section className="py-24">
         <ContactInfo/>
      </section>

  
    <section>
        <FintechHero/>
    </section>
    <Footer/>
</div>
  )
}
