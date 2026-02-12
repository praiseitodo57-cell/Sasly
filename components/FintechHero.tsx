import Image from "next/image"
import { CheckCircle } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"
export default function FintechHero() {
  return (
    <section className="px-6 py-16 md:px-16 [animation:fadeIndown_6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5b1020] via-black to-[#4b2a6a] px-8 py-16 md:px-14">
        
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <AnimateOnScroll animation="animate-fadeInLeft">
          <div>
            <h1 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Financial Potential with Free Trial of Our Fintech Software
            </h1>

            <p className="mt-6 max-w-lg text-gray-300 text-lg">
              Getting started is easy! Simply contact us through our website,
              and we’ll schedule a consultation to discuss your needs
            </p>

            {/* CTA */}
            <button className="mt-8 text-xl rounded-lg bg-green-400 px-9 py-5 font-medium text-black transition hover:bg-gray-900">
              Get Premium Benefits
            </button>

            {/* FEATURES */}
            <div className="mt-8 flex flex-wrap gap-8">
              <Feature text="Real-Time Transaction" />
              <Feature text="No Charge Included" />
            </div>
          </div>
         </AnimateOnScroll>

          {/* RIGHT IMAGE */}
          <AnimateOnScroll animation="animate-fadeInRight" delay={1000}>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src="/cta1 (1).jpg" // replace with your image
                alt="Fintech dashboard"
                width={900}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
  
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <CheckCircle className="text-emerald-400" size={20} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}
