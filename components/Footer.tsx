'use client'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/logo-main.png" 
                    width={130}        
                    height={130}       
                    alt="logo"
                      className=""
                  />
              </div>
              </div>
            <p className="mb-6 text-lg text-gray-600">
              We take the time to understand your unique needs a goals,
              offering tailored advice that drives real results.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={16} />} />
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Linkedin size={16} />} />
              <SocialIcon icon={<Youtube size={16} />} />
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 text-2xl">Services</h4>
            <ul className="space-y-3 text-lg text-gray-600">
              <li>Business Solutions</li>
              <li>Investment Planning</li>
              <li>Marketing Solutions</li>
              <li>Banking & Insurance</li>
              <li>Planning & Research</li>
            </ul>
          </div>

          {/* LOCATION + CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 text-2xl">Locations</h4>
            <p className="mb-6 text-lg text-gray-600">
              55 Main Street, 2nd block <br />
              Melbourne, Australia
            </p>

            <h4 className="mb-3 font-semibold text-gray-900 text-2xl">Get In Touch</h4>
            <p className="text-lg text-gray-600">support@gmail.com</p>
            <p className="text-lg text-gray-600">+880 (123) 456 588</p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 text-2xl">
              Subscribe Newsletter
            </h4>

            <p className="mb-4 text-lg text-gray-600">
              Subscribe our newsletter to get more updates
            </p>

            <form className="flex overflow-hidden rounded-xl border">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-15 py-4 text-sm outline-none"
              />
              <button className="flex items-center gap-1 bg-emerald-400 px-5 text-sm font-medium text-black hover:bg-emerald-500">
                Subscribe <span>»</span>
              </button>
            </form>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="relative my-12 border-t">
          <ScrollTopButton />
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
          <p>© 2025 Sasly - All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ====================== */
/* SMALL REUSABLE PARTS */
/* ====================== */

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-gray-700 transition hover:bg-emerald-400 hover:text-black">
      {icon}
    </div>
  )
}

function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-400 text-black shadow-md hover:bg-emerald-500"
    >
      <ArrowUp size={18} />
    </button>
  )
}
