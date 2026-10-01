'use client'

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

type Variant = 'up' | 'fade' | 'left' | 'right' | 'zoom'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  variant?: Variant
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, as: Tag = 'div', variant = 'up', delay = 0, className = '', style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-visible={visible}
      className={className}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
