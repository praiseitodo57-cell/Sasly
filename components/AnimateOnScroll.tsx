"use client"

import { useEffect, useRef, useState } from "react"

function getHiddenClass(animation: string) {
  if (animation.includes("Left")) return "opacity-0 -translate-x-12"
  if (animation.includes("Right")) return "opacity-0 translate-x-12"
  if (animation.includes("Up")) return "opacity-0 translate-y-12"
  if (animation.includes("Down")) return "opacity-0 -translate-y-12"
  return "opacity-0"
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = 0,
}: {
  children: React.ReactNode
  animation: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        will-change-transform will-change-opacity
        transition-all
        duration-[2000ms]
        ease-out
        ${visible ? animation : getHiddenClass(animation)}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
