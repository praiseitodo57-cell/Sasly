import Image from "next/image";
import Navbar from "./components/NavBar";
import AccordionBasic from "@/components/AccordionBasic";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection"
import FintechHero from "@/components/FintechHero"
import AnimateOnScroll from "@/components/AnimateOnScroll"
import Footer from "@/components/Footer"

import { ChevronsRight, Star, Users, Clock, Calendar, Eye, Heart, SearchCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#5b1020] via-black to-[#4b2a6a] py-24 md:py-40 overflow-hidden">

        {/* grain overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10" />

        {/* MAIN CONTENT */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 md:flex-row md:justify-between">

          {/* TEXT BLOCK */}
          <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl opacity-0 [animation:fadeInLeft_3s_cubic-bezier(0.22,1,0.36,1)_forwards]">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Revolutionize Your Financial Strategy with Cutting-Edge Fintech
            </h1>

            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Effective community management involves listening to audience
              feedback, addressing concerns, and encouraging discussions.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-400 px-8 py-4 font-bold text-black transition hover:bg-white">
              Our Service <ChevronsRight className="w-5" />
            </button>

            {/* TRUST + REVIEWS */}
            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">

              {/* avatars */}
              <div>
                <p className="text-2xl font-bold text-white">
                  5m+ Trusted Clients
                </p>

                <div className="mt-4 flex -space-x-3">
                  {[
                    "woman.png",
                    "portrait-of-1.png",
                    "portrait.png",
                    "proud.png",
                    "img3.png",
                  ].map((img, i) => (
                    <Image
                      key={i}
                      src={`/${img}`}
                      width={48}
                      height={48}
                      alt="client"
                      className="rounded-full border border-white"
                    />
                  ))}
                </div>
              </div>

              {/* rating card */}
              <div className="flex items-center gap-6 rounded-xl border border-gray-600 bg-black px-6 py-5">
                <div>
                  <p className="font-bold text-white">Clients Reviews</p>
                  <div className="mt-2 flex text-yellow-500">
                    <Star /><Star /><Star /><Star />
                  </div>
                </div>
                <p className="text-4xl font-bold text-white">4.8</p>
              </div>

            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl opacity-0 [animation:fadeInRight_3s_cubic-bezier(0.22,1,0.36,1)_forwards]">



            {/* main image */}
            <Image
              src="/cta1.jpg"
              width={1200}
              height={800}
              alt="Fintech dashboard preview"
              className="w-full rounded-xl shadow-2xl"
              priority
            />

            {/* floating image */}
            <div className="absolute -bottom-30 -left- hidden md:block [animation:fadeInLeft_3s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <Image
                src="/hero_img2.png"
                width={220}
                height={220}
                alt="Floating card"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

        </div>

        {/* MARQUEE SECTION */}
        <div className="mt-28 overflow-hidden">
          <p className="text-center font-semibold text-white">
            Trusted by thousands of companies across 50+ countries
          </p>

          <div className="mt-10 flex w-max gap-16 animate-[marquee_22s_linear_infinite]">
            {[
              "client1.png",
              "client2.png",
              "client3.png",
              "client5.png",
              "client6.png",
              "client1.png",
              "client2.png",
              "client3.png",
              "client5.png",
              "client6.png",
            ].map((logo, i) => (
              <Image
                key={i}
                src={`/${logo}`}
                width={140}
                height={80}
                alt="client logo"
                className="opacity-80"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-40">
    <div className="max-w-8xl mx-auto px-6">

    {/* HEADER */}
  <AnimateOnScroll animation="animate-fadeInDown">
    <div className="text-center mb-20 ">
      <span className="inline-block mb-6 rounded-lg bg-green-100 px-6 py-2 border border-gray-300 text-black text-lg">
        Key Features
      </span>

      <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
        Secure Blockchain Solutions <br></br> Redefining Trust in Finance
      </h1>
    </div>
  </AnimateOnScroll>
    {/* CARDS GRID */}
  <AnimateOnScroll animation="animate-fadeInUp">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

      {/* CARD 1 */}
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col">
        <span className="inline-block bg-white px-8 py-2 rounded-lg text-xl mb-4 w-fit border-2 border-gray-200">
          Security Protocols
        </span>

        <h3 className="text-2xl font-bold mb-4 text-black">
          Get Advanced and Modern Security Protocols
        </h3>

        <p className="text-gray-600 mb-6">
          Robust encryption, multi-factor authentication, and real-time fraud
          detection ensure data and transaction security.
        </p>

        {/* IMAGE PLACEHOLDER */}
        <div className="mt-auto h-70 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
          <Image
              src="/feature-1.jpg"
              width={400}
              height={220}
              alt="Floating card"
              className="rounded-xl shadow-2xl"
              />
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col">
        <span className="inline-block bg-white px-8 py-2 rounded-lg text-xl mb-4 w-fit border-2 border-gray-200">
          AI-powered Analysis
        </span>

        <h3 className="text-2xl font-bold mb-4 text-black">
          AI-Powered Analytics & Intelligent Tools
        </h3>

        <p className="text-gray-600 mb-6">
          Smart analytics powered by artificial intelligence to help businesses
          make data-driven decisions faster and smarter.
        </p>

        {/* IMAGE PLACEHOLDER */}
        <div className="mt-auto h-70 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
         <Image
              src="/feature-2.jpg"
              width={400}
              height={220}
              alt="Floating card"
              className="rounded-xl shadow-2xl"
              />
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-green-50 rounded-3xl p-8 flex flex-col">
        <span className="inline-block bg-white px-8 py-2 rounded-xl text-xl mb-4 w-fit border-2 border-gray-200">
          Payment Integrations
        </span>

        <h3 className="text-2xl font-bold mb-4 text-black">
          Seamless & Secure Payment Integrations
        </h3>

        <p className="text-gray-600 mb-6">
          Multiple payment gateways with fast, reliable, and secure transaction
          processing across platforms.
        </p>

        {/* IMAGE PLACEHOLDER */}
        <div className="mt-auto h-70 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
          <Image
              src="/feature-3.jpg"
              width={400}
              height={220}
              alt="Floating card"
              className="rounded-xl shadow-2xl"
              />
        </div>
      </div>

     </div>
  </AnimateOnScroll>
    </div>
  </section>


  <section className="py-24">
  <div className="relative mx-auto max-w-6xl px-6 flex flex-col gap-20 md:flex-row md:items-center md:justify-between">

    {/* LEFT CONTENT */}
    <AnimateOnScroll animation="animate-fadeInLeft">
    <div className="relative max-w-xl  text-center md:text-left">

      <span className="inline-block mb-6 rounded-lg bg-green-100 px-8 py-3 border border-gray-300 text-black text-base sm:text-lg font-bold">
        How to Benefits
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
        Competitive Edge Benefits of Adopting Fintech Solutions
      </h1>

      <p className="text-lg sm:text-xl text-gray-500 pt-8">
        Fintech solutions are transforming the financial landscape by providing
        innovative tools and technologies that streamline and enhance operations.
      </p>

      <button className="mt-10 inline-flex items-center gap-2 rounded-lg bg-green-400 px-8 py-4 font-bold text-black text-lg sm:text-xl transition hover:bg-black hover:text-white">
        Get Premium Benefits
        <ChevronsRight className="w-6 sm:w-7" />
      </button>

      {/* FEATURES */}
      <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center md:justify-start">
        <span className="flex items-center gap-3 text-gray-700">
          <SearchCheck className="bg-green-400 text-white rounded-full p-1" />
          No Hidden Charges
        </span>

        <span className="flex items-center gap-3 text-gray-700">
          <SearchCheck className="bg-green-400 text-white rounded-full p-1" />
          User-friendly Development
        </span>
      </div>
    </div>
  </AnimateOnScroll>
    {/* RIGHT IMAGES */}
  <AnimateOnScroll animation="animate-fadeInRight">
    <div className="relative max-w-xl mx-auto">

      {/* MAIN IMAGE */}
    <AnimateOnScroll animation="animate-fadeInLeft">
      <div>
        <Image
          src="/benifit1 (1).jpg"
          width={450}
          height={450}
          alt="Fintech dashboard preview"
          className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
          priority
        />
      </div>
    </AnimateOnScroll>
      {/* FLOATING IMAGE (DESKTOP ONLY) */}
  <AnimateOnScroll animation="animate-fadeInRight">
      <div className="absolute -bottom-28 -right-24 hidden lg:block">
        <Image
          src="/benifit2 (1).jpg"
          width={300}
          height={300}
          alt="Floating card"
          className="rounded-xl shadow-2xl"
        />
      </div>
  </AnimateOnScroll>
    </div>
  </AnimateOnScroll>
  </div>
</section>


<section className="py-28">
  <div className="mx-auto max-w-8xl px-6">

    {/* GRADIENT WRAPPER */}
    <div className="rounded-3xl bg-gradient-to-br from-[#fff7e6] via-white to-[#f2e9ff] px-6 py-24 sm:px-12">

      {/* HEADER */}
    <AnimateOnScroll animation="animate-fadeInDown">
      <div className="mx-auto max-w-3xl text-center mb-20">
        <span className="inline-block mb-6 rounded-xl bg-green-100 px-15 py-5 text-xl font-semibold text-gray-900 border-2 border-gray-400">
          Why Choose Sasly
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Key Advantages of Fintech Software for Modern Businesses
        </h2>
      </div>
    </AnimateOnScroll>
      {/* CARDS */}
    <AnimateOnScroll animation="animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
            Real-Time Transaction Processing
          </h1>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations.
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
            
           Regulatory Compliance Automation
          </h3>

          <p className="text-gray-600 leading-relaxed text-xl">
            Instant and accurate processing of transactions, ensuring swift and reliable financial operations
          </p>
        </div>

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

      </div>
    </AnimateOnScroll>

      {/* CARDS 2 */}
    <AnimateOnScroll animation="animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7 [animation:fadeIndown_8s_cubic-bezier(0.16,1,0.3,1)_forwards]">

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
  <div className="mx-auto max-w-8xl px-">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT — IMAGE PLACEHOLDER */}
    <AnimateOnScroll animation="animate-fadeInLeft">
      <div className="relative flex justify-center [animation:fadeInLeft_5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <div className="w-full max-w-xl aspect-[4/3] rounded-3xl bg-gray-100 border shadow-sm flex items-center justify-center text-gray-400">
          <Image
              src="/cta1.jpg"
              width={1200}
              height={800}
              alt="Fintech dashboard preview"
              className="w-full rounded-xl "
              priority
            />
        </div>
      </div>
    </AnimateOnScroll>
      {/* RIGHT — CONTENT */}
    <AnimateOnScroll animation="animate-fadeInRight">
      <div className="max-w-lg [animation:fadeInRight_6s_cubic-bezier(0.16,1,0.3,1)_forwards]">

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-10">
          Next-Gen Software  Ultimate Solutions
        </h2>

        <p className="text-lg text-gray-600 mb-15 leading-relaxed">
          Our cutting-edge platform is designed to streamline your business
          processes, enhance productivity, and drive growth. Whether you’re
          looking to automate tasks or improve team collaboration, we’ve got you
          covered.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-17">

          {/* FEATURE 1 */}
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <span className="text-green-600 text-lg">✓</span>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                User-friendly interface
              </h4>
              <p className="text-gray-600 text-sm">
                Services are customized to meet your needs and goals.
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <span className="text-green-600 text-lg">✓</span>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Customizable templates
              </h4>
              <p className="text-gray-600 text-sm">
                Flexible layouts and components tailored to your workflow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </AnimateOnScroll>
    </div>
  </div>
</section>

<section className="px-6 md:px-16 py-14">
  <div className="mx-auto max-w-12xl px-6">

    {/* TOP GRADIENT HEADER */}
    <div className="relative rounded-3xl bg-gradient-to-r from-[#5b1020] via-black to-[#4b2a6a] px-6 py-20 text-center text-white">
  <AnimateOnScroll animation="animate-fadeInDown">
    <div>
      <span className="inline-block mb-6 rounded-lg bg-white px-13 py-3 text-2xl font-medium text-black">
        Why Choose Sasly
      </span>

      <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
        Revolutionizing Search AI-Powered <br />
        Software Solutions
      </h2>
    </div>
  </AnimateOnScroll>
      {/* PRICING CARDS */}
  <AnimateOnScroll animation="animate-fadeInUp">
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 [animation:fadeIndown_6s_cubic-bezier(0.16,1,0.3,1)_forwards]">

        {/* BASIC */}
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg">
  
  {/* Plan badge */}
  <span className="inline-block mb-4 rounded-full border px-4 py-1 text-sm font-medium text-gray-600">
    Standard Plan
  </span>

  {/* Price */}
  <div className="mb-4">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
      $59.00
      <span className="ml-1 text-base font-normal text-gray-500">/per month</span>
    </h2>
  </div>

  {/* Description */}
  <p className="mb-5 text-sm sm:text-base text-gray-500 leading-relaxed">
    Well-structured pricing package offering customers clear and flexible options
  </p>

  {/* Features */}
  <ul className="space-y-3 text-sm sm:text-base">
    {[
      "Real-Time Transaction",
      "User-Friendly Dashboard",
      "Standard Security Measures",
      "Automated Reporting",
      "Email Support Access",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-3 border-b pb-2 last:border-b-0">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs">
          ✓
        </span>
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
  <button className="mt-8 w-full rounded-lg bg-green-500 py-3 text-white font-medium hover:bg-gray-800 transition">
  Get Started
  </button>
  </div>


        {/* BASIC */}
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg">
  
  {/* Plan badge */}
  <span className="inline-block mb-4 rounded-full border px-4 py-1 text-sm font-medium text-gray-600">
    Standard Plan
  </span>

  {/* Price */}
  <div className="mb-4">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
      $18.00
      <span className="ml-1 text-base font-normal text-gray-500">/per month</span>
    </h2>
  </div>

  {/* Description */}
  <p className="mb-5 text-sm sm:text-base text-gray-500 leading-relaxed">
    Well-structured pricing package offering customers clear and flexible options
  </p>

  {/* Features */}
  <ul className="space-y-3 text-sm sm:text-base">
    {[
      "Real-Time Transaction",
      "User-Friendly Dashboard",
      "Standard Security Measures",
      "Automated Reporting",
      "Email Support Access",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-3 border-b pb-2 last:border-b-0">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs">
          ✓
        </span>
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
  <button className="mt-8 w-full rounded-lg bg-green-500 py-3 text-white font-medium hover:bg-gray-800 transition">
  Get Started
  </button>
  </div>

        {/* PREMIUM */}
        {/* BASIC */}
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg">
  
  {/* Plan badge */}
  <span className="inline-block mb-4 rounded-full border px-4 py-1 text-sm font-medium text-gray-600">
    Standard Plan
  </span>

  {/* Price */}
  <div className="mb-4">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
      $59.00
      <span className="ml-1 text-base font-normal text-gray-500">/per month</span>
    </h2>
  </div>

  {/* Description */}
  <p className="mb-5 text-sm sm:text-base text-gray-500 leading-relaxed">
    Well-structured pricing package offering customers clear and flexible options
  </p>

  {/* Features */}
  <ul className="space-y-3 text-sm sm:text-base">
    {[
      "Real-Time Transaction",
      "User-Friendly Dashboard",
      "Standard Security Measures",
      "Automated Reporting",
      "Email Support Access",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-3 border-b pb-2 last:border-b-0">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs">
          ✓
        </span>
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
  <button className="mt-8 w-full rounded-lg bg-green-500 py-3 text-white font-medium hover:bg-gray-800 transition">
  Get Started
  </button>
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
            Get A Quote  <ChevronsRight className="w-6 sm:w-7" />
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
    <TestimonialsSection />
   </section>
   <section className="h-screen">
      <InsightsSection />
   </section>
   <section className="py-12">
    <FintechHero />
   </section>
   <section>
    <Footer />
   </section>
  </div>
  );
}
