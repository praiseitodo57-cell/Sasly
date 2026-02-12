"use client"
import Image from "next/image"

export default function FinanceFeatures() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* CARD 1 */}
          <div className="space-y-6">
            {/* Chart Image */}
            <div className="flex h-64 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="text-sm text-gray-400">
               <Image
                src="/feature-5.jpg"
                width={400}
                height={220}
                alt="Floating card"
                className="rounded-xl shadow-2xl"
                />
              </span>
            </div>

            <span className="inline-block rounded-lg border bg-white px-6 py-2 text-lg font-medium text-gray-700 mt-5">
              Security Protocols
            </span>

            <h3 className="text-2xl font-bold text-gray-900">
              Saving
            </h3>

            <p className="text-lg leading-relaxed text-gray-500">
              Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="space-y-6">
            {/* Chart Image */}
            <div className="flex h-64 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="text-sm text-gray-400">
                <Image
                src="/feature-6.jpg"
                width={400}
                height={220}
                alt="Floating card"
                className="rounded-xl shadow-2xl"
                />
              </span>
            </div>

            <span className="inline-block rounded-lg border bg-white px-6 py-2 text-lg font-medium text-gray-700 mt-5">
              Investing
            </span>

            <h3 className="text-2xl font-bold text-gray-900">
              Grow your wealth
            </h3>

            <p className="text-lg leading-relaxed text-gray-500">
             Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="space-y-6">
            {/* Chart Image */}
            <div className="flex h-64 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="text-sm text-gray-400">
                <Image
                src="/feature-7.jpg"
                width={400}
                height={220}
                alt="Floating card"
                className="rounded-xl shadow-2xl"
                />
              </span>
            </div>

            <span className="inline-block rounded-lg border bg-white px-6 py-2 text-lg font-medium text-gray-700 mt-5">
              Budgeting
            </span>

            <h3 className="text-2xl font-bold text-gray-900">
              Track your expenses
            </h3>

            <p className="text-lg leading-relaxed text-gray-500">
              Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
