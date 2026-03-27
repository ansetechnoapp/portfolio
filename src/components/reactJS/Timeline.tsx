"use client"

import { useState, useRef, useEffect, useMemo, useCallback } from "react"
import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FixedSizeList as List } from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer"
import React from "react"

// Types
interface TimelineEventType {
  year: number
  title: string
  description: string
  details: string
  category?: string
  image?: string
  link?: string
}

interface TimelineProps {
  title?: string
  subtitle?: string
  events?: TimelineEventType[]
  orientation?: 'vertical' | 'horizontal'
}

// Category Icons
const categoryIcons: Record<string, ReactNode> = {
  Web: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" />
      <path d="M13 7H11V13H17V11H13V7Z" fill="currentColor" />
    </svg>
  ),
  Mobile: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" fill="currentColor" />
    </svg>
  ),
  Entreprise: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19Z" fill="currentColor" />
    </svg>
  ),
  IA: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.2V8C21 6.9 20.1 6 19 6H11V4.8C12.2 4.4 13 3.3 13 2C13 0.3 11.7 -1 10 -1C8.3 -1 7 0.3 7 2C7 3.3 7.8 4.4 9 4.8V6H5C3.9 6 3 6.9 3 8V11.2C1.8 11.6 1 12.7 1 14C1 15.7 2.3 17 4 17C5.7 17 7 15.7 7 14C7 12.7 6.2 11.6 5 11.2V8H9V20H5C3.9 20 3 20.9 3 22H21C21 20.9 20.1 20 19 20H15V8H19V11.2C17.8 11.6 17 12.7 17 14C17 15.7 18.3 17 20 17C21.7 17 23 15.7 23 14C23 12.7 22.2 11.6 21 11.2Z" fill="currentColor" />
    </svg>
  ),
  Professionnelle: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="currentColor" />
      <path d="M12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10Z" fill="currentColor" />
    </svg>
  ),
  Formation: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor" />
    </svg>
  )
}

// Default data
const defaultTimelineEvents: TimelineEventType[] = [
  {
    year: 2018,
    title: "Flowers & Saints Founded",
    description: "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
    category: "Web",
    image: undefined,
    link: undefined,
  },
  {
    year: 2019,
    title: "First Major Exhibition",
    description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
    category: "Web",
    image: undefined,
    link: undefined,
  },
  {
    year: 2020,
    title: "Launch of Online Store",
    description: "Expanded our reach by bringing our creations to the digital world.",
    details:
      "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
    category: "Mobile",
    image: undefined,
    link: undefined,
  },
  {
    year: 2021,
    title: "Collaboration with Top Brands",
    description: "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
    category: "Entreprise",
    image: undefined,
    link: undefined,
  },
  {
    year: 2022,
    title: "International Recognition",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
    category: "IA",
    image: undefined,
    link: undefined,
  },
  {
    year: 2023,
    title: "Expansion to Physical Stores",
    description: "Opened our first flagship store in the heart of Sydney.",
    details:
      "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
    category: "Entreprise",
    image: undefined,
    link: undefined,
  },
]

// Media query hook
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export default function Timeline({
  title = "My Journey",
  subtitle = "Professional experience and education timeline",
  events,
  orientation = 'vertical',
}: TimelineProps) {
  // State and refs
  const timelineEvents = events && events.length > 0 ? events : defaultTimelineEvents
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalScrollRef = useRef<HTMLDivElement>(null)

  // Filter events by category
  const categories = useMemo(() => Array.from(new Set(timelineEvents.map(e => e.category).filter(Boolean))), [timelineEvents])
  const filteredEvents = useMemo(() => selectedCategory
    ? timelineEvents.filter(e => e.category === selectedCategory)
    : timelineEvents, [selectedCategory, timelineEvents])

  // Handle orientation
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [userOrientation, setUserOrientation] = useState<'vertical' | 'horizontal'>(orientation)
  const effectiveOrientation = isMobile ? 'horizontal' : userOrientation
  const isHorizontal = effectiveOrientation === 'horizontal'

  // Determine if we should use virtualization based on item count
  const shouldVirtualize = useMemo(() => filteredEvents.length > 10, [filteredEvents.length])

  // Track if the list has been rendered properly
  const [listRendered, setListRendered] = useState(false)

  // Reset expanded state when orientation changes
  useEffect(() => {
    setExpandedEvent(null)
  }, [isHorizontal])

  // Scroll to start when category changes
  useEffect(() => {
    if (isHorizontal && horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollLeft = 0
    }
    // Reset render status when category changes
    setListRendered(false)
  }, [selectedCategory, isHorizontal])

  // Set list rendered on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setListRendered(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Handlers
  const handleSetUserOrientation = useCallback((orientation: 'vertical' | 'horizontal') => {
    setUserOrientation(orientation)
  }, [])

  const handleSetSelectedCategory = useCallback((cat: string | null) => {
    setSelectedCategory(cat)
    setListRendered(false); // Reset rendered state when changing category
    // Use a small timeout to ensure the DOM has time to update
    setTimeout(() => setListRendered(true), 50);
  }, [])

  // Ajout d'un useEffect pour injecter le style global une seule fois
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('hide-scrollbar-style')) {
      const style = document.createElement('style');
      style.id = 'hide-scrollbar-style';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, [])

  return (
    <motion.section
      ref={containerRef}
      className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle ambient background — uses page accent colors for cohesion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div
          className="absolute -top-[10%] -right-[5%] h-[50%] w-[45%] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, var(--accent-light), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-[15%] -left-[10%] h-[55%] w-[50%] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, var(--accent-secondary-light, var(--accent-light)), transparent 70%)' }}
        />
      </div>

      {/* Header */}
      <div className="relative text-center mb-12 sm:mb-14">
        <motion.span
          className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] mb-4"
          style={{
            color: 'var(--accent-regular)',
          }}
          variants={titleVariants}
        >
          {title === "Our Journey" ? "Timeline" : title}
        </motion.span>

        <motion.h2
          className="mb-4 text-3xl font-bold leading-tight tracking-tight bg-clip-text text-transparent sm:text-4xl lg:text-5xl"
          style={{
            backgroundImage: 'var(--accent-gradient)',
            fontFamily: 'var(--font-display)'
          }}
          variants={titleVariants}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mx-auto max-w-2xl text-base leading-7 sm:text-lg"
          style={{ color: 'var(--gray-300)' }}
          variants={titleVariants}
        >
          {subtitle}
        </motion.p>

      </div>

      {/* Category filters + Orientation toggle on same line */}
      <motion.div
        className="mb-10 flex flex-wrap items-center justify-between gap-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${!selectedCategory
                ? 'text-white shadow-md'
                : 'bg-[hsla(var(--gray-999-basis),0.66)] backdrop-blur-sm hover:bg-[hsla(var(--gray-999-basis),0.76)] text-[color:var(--gray-200)] border border-[hsla(var(--gray-999-basis),0.28)] hover:border-accent-light/30'
                }`}
              style={{
                backgroundColor: !selectedCategory ? 'var(--accent-regular)' : '',
                boxShadow: !selectedCategory ? 'var(--accent-soft-glow)' : ''
              }}
              onClick={() => handleSetSelectedCategory(null)}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                  ? 'text-white shadow-md'
                  : 'bg-[hsla(var(--gray-999-basis),0.66)] backdrop-blur-sm hover:bg-[hsla(var(--gray-999-basis),0.76)] text-[color:var(--gray-200)] border border-[hsla(var(--gray-999-basis),0.28)] hover:border-accent-light/30'
                  }`}
                style={{
                  backgroundColor: selectedCategory === cat ? 'var(--accent-regular)' : '',
                  boxShadow: selectedCategory === cat ? 'var(--accent-soft-glow)' : ''
                }}
                onClick={() => handleSetSelectedCategory(cat || null)}
              >
                {cat && categoryIcons[cat] && (
                  <span className={selectedCategory === cat ? 'text-white' : 'text-accent-regular'}>
                    {categoryIcons[cat]}
                  </span>
                )}
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Orientation toggle */}
        {!isMobile && (
          <div
            className="inline-flex rounded-full border p-1 shadow-[0_12px_40px_rgba(76,29,149,0.08)] backdrop-blur-sm"
            style={{
              backgroundColor: 'hsla(var(--gray-999-basis), 0.42)',
              borderColor: 'hsla(var(--gray-999-basis), 0.28)',
            }}
          >
            <button
              className={`rounded-full px-3 py-2 transition-all duration-300 ${userOrientation === 'vertical'
                ? 'text-accent-regular shadow-sm'
                : 'hover:text-accent-regular'
                }`}
              style={{
                backgroundColor: userOrientation === 'vertical' ? 'hsla(var(--gray-999-basis), 0.78)' : 'transparent',
                boxShadow: userOrientation === 'vertical' ? 'var(--accent-soft-glow)' : 'none',
                color: userOrientation !== 'vertical' ? 'var(--text-gray-600)' : undefined
              }}
              onClick={() => handleSetUserOrientation('vertical')}
              title="Vertical"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z" fill="currentColor"/>
              </svg>
            </button>
            <button
              className={`rounded-full px-3 py-2 transition-all duration-300 ${userOrientation === 'horizontal'
                ? 'text-accent-regular shadow-sm'
                : 'hover:text-accent-regular'
                }`}
              style={{
                backgroundColor: userOrientation === 'horizontal' ? 'hsla(var(--gray-999-basis), 0.78)' : 'transparent',
                boxShadow: userOrientation === 'horizontal' ? 'var(--accent-soft-glow)' : 'none',
                color: userOrientation !== 'horizontal' ? 'var(--text-gray-600)' : undefined
              }}
              onClick={() => handleSetUserOrientation('horizontal')}
              title="Horizontal"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h2v18H3V3zm16 0h2v18h-2V3zm-8 0h2v18h-2V3z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        )}
      </motion.div>

      {/* Main timeline container */}
      <div
        ref={horizontalScrollRef}
        className={`relative ${isHorizontal ? 'overflow-x-auto hide-scrollbar' : 'overflow-y-auto timeline-scroll-container'}`}
        style={{
          minHeight: '480px',
          height: isHorizontal ? '500px' : 'calc(80vh - 200px)',
          scrollBehavior: 'smooth',
          width: '100%',
          position: 'relative',
        }}
      >
        {filteredEvents.length === 0 ? (
          <motion.div
            className="flex items-center justify-center h-full py-12 text-center"
            style={{ color: 'var(--accent-regular)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex flex-col items-center gap-4">
               <svg className="w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <p className="text-sm font-medium tracking-wide">No events to display for this category.</p>
            </div>
          </motion.div>
          ) : (
            <div className={`relative ${isHorizontal ? 'px-8 flex items-center h-full' : 'px-4 sm:px-6 lg:px-12 py-10'}`}>
              {/* Center line with gradient and glow */}
              <motion.div
                className={
                isHorizontal
                  ? 'absolute top-1/2 left-0 right-0 h-[1px] opacity-40'
                  : 'absolute left-1/2 top-0 bottom-0 w-[1px] opacity-40'
              }
              style={{
                background: isHorizontal
                  ? 'linear-gradient(90deg, transparent, var(--accent-regular), transparent)'
                  : 'linear-gradient(180deg, transparent, var(--accent-regular), transparent)',
                boxShadow: '0 0 15px var(--accent-regular)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
            />
            {/* Standard List */}
            <StandardTimelineList
              events={filteredEvents}
              expandedEvent={expandedEvent}
              setExpandedEvent={setExpandedEvent}
              isHorizontal={isHorizontal}
            />
          </div>
        )}
      </div>

      {/* Scroll indicators - bottom indicator for both modes */}
      {
        filteredEvents.length > 3 && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
            <motion.div
              className="px-4 py-2 rounded-full flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest"
              style={{
                color: 'var(--gray-300)',
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {isHorizontal ? (
                <>
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Explore Journey</span>
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                  <span>Scroll for more</span>
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.div>
          </div>
        )
      }
    </motion.section >
  )
}

// Add a non-virtualized list component for fallback and smaller lists
const StandardTimelineList = ({
  events,
  expandedEvent,
  setExpandedEvent,
  isHorizontal
}: {
  events: TimelineEventType[],
  expandedEvent: number | null,
  setExpandedEvent: (index: number | null) => void,
  isHorizontal: boolean
}) => {
  return (
      <ol
      className={`relative z-10 ${isHorizontal ? 'flex timeline-horizontal-list gap-[3.5rem] py-[2.5rem]' : 'flex flex-col gap-[3.5rem] py-[2.5rem]'}`}
      style={isHorizontal ? {
        minWidth: events.length * 350 + 'px',
      } : {}}
    >
      <AnimatePresence>
        {events.map((event, index) => (
          <MemoTimelineItem
            key={`${event.year}-${index}`}
            event={event}
            index={index}
            isExpanded={expandedEvent === index}
            onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            isHorizontal={isHorizontal}
          />
        ))}
      </AnimatePresence>
    </ol>
  );
};

// Timeline item component
function TimelineItem({
  event,
  index,
  isExpanded,
  onToggle,
  isHorizontal
}: {
  event: TimelineEventType
  index: number
  isExpanded: boolean
  onToggle: () => void
  isHorizontal: boolean
}) {
  const isEven = index % 2 === 0

  // Animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: isHorizontal ? 0 : (isEven ? 20 : -20)
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2 + (index * 0.05)
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.li
        className={`
          relative
          ${isHorizontal
          ? `flex-1 min-w-[320px] max-w-[380px] ${isEven ? 'pt-20 pb-4' : 'pb-20 pt-4'}`
          : `${isEven ? 'ml-auto mr-[calc(50%+2rem)]' : 'mr-auto ml-[calc(50%+2rem)]'}`
        }
      `}
      style={!isHorizontal ? { maxWidth: 'calc(50% - 4rem)' } : {}}
      variants={itemVariants}
    >
      {/* Node / Marker on the line */}
      <motion.div
        className={`
          absolute z-20 group-hover:z-30
          ${isHorizontal
            ? `left-1/2 -translate-x-1/2 ${isEven ? 'top-[-20px]' : 'bottom-[-20px]'}`
            : `top-[24px] ${isEven ? 'right-[-4.5rem] translate-x-1/2' : 'left-[-4.5rem] -translate-x-1/2'}`
          }
        `}
        variants={dotVariants}
        whileHover="hover"
      >
        <div className="relative flex items-center justify-center">
          {/* Glowing ring */}
          <div
            className="absolute h-14 w-14 rounded-full opacity-20 blur-md transition-all duration-500 group-hover:opacity-40"
            style={{ backgroundColor: 'var(--accent-regular)' }}
          />

          <div
            className="relative flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: 'hsla(var(--gray-999-basis), 0.9)',
              borderColor: 'hsla(var(--gray-999-basis), 0.3)',
              boxShadow: 'inset 0 0 12px rgba(255, 255, 255, 0.1)',
            }}
          >
            {event.category && categoryIcons[event.category] ? (
              <span style={{ color: 'var(--accent-regular)' }} className="drop-shadow-sm">{categoryIcons[event.category]}</span>
            ) : (
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--accent-regular)' }} />
            )}
          </div>

          {/* Year Indicator with premium styling */}
          <div
            className={`
              absolute whitespace-nowrap font-bold text-[10px] tracking-tighter uppercase px-3 py-1 rounded-full border backdrop-blur-md shadow-xl transition-all duration-300
              ${isHorizontal
                ? `${isEven ? 'bottom-full mb-3' : 'top-full mt-3'} left-1/2 -translate-x-1/2`
                : `${isEven ? 'left-full ml-3' : 'right-full mr-3'} top-1/2 -translate-y-1/2`
              }
            `}
            style={{
              color: 'var(--accent-text-over)',
              backgroundColor: 'var(--accent-regular)',
              borderColor: 'var(--accent-light)',
              letterSpacing: '0.05em',
            }}
          >
            {event.year}
          </div>
        </div>
      </motion.div>

      {/* Card with true glassmorphism */}
      <motion.div
        className="group relative overflow-hidden rounded-[24px] border backdrop-blur-xl transition-all duration-500"
        style={{
          backgroundColor: 'hsla(var(--gray-999-basis), 0.7)',
          borderColor: 'hsla(var(--gray-999-basis), 0.25)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        }}
        whileHover={{
          y: -8,
          borderColor: 'var(--accent-light)',
          boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.15)',
          backgroundColor: 'hsla(var(--gray-999-basis), 0.82)',
        }}
        onClick={onToggle}
        layout
      >
        {/* Animated gradient top bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-accent-light/50 via-accent-regular to-accent-dark/50" />

        <div className="p-7">
          {/* Category tag */}
          {event.category && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                style={{
                  backgroundColor: 'hsla(var(--gray-999-basis), 0.4)',
                  color: 'var(--accent-regular)',
                  border: '1px solid hsla(var(--gray-999-basis), 0.2)',
                }}>
                {categoryIcons[event.category] && (
                  <span className="scale-75 origin-center">{categoryIcons[event.category]}</span>
                )}
                {event.category}
              </span>
            </div>
          )}

          {/* Title with display font */}
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 block text-xl font-bold transition-all duration-300 hover:translate-x-1"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                color: 'var(--gray-0)',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-regular)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--gray-0)'}
              onClick={(e) => e.stopPropagation()}
            >
              {event.title}
            </a>
          ) : (
            <h3 className="mb-3 text-xl font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                color: 'var(--gray-0)',
              }}>
              {event.title}
            </h3>
          )}

          {/* Description with refined line height */}
          <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--accent-dark)' }}>
            {event.description}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-5 pt-5 border-t" style={{ borderColor: 'hsla(var(--gray-999-basis), 0.1)' }}>
                  <p className="text-sm leading-relaxed italic" style={{ color: 'var(--accent-dark)', opacity: 0.8 }}>
                    {event.details}
                  </p>

                  {event.image && (
                    <motion.div
                      className="mt-5 overflow-hidden rounded-xl border border-white/10"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle control with minimal style */}
          <div className="mt-6 flex items-center justify-between">
            <div className="h-px flex-1 mr-4" style={{ background: 'linear-gradient(90deg, hsla(var(--gray-200-basis), 0.1), transparent)' }} />
            <motion.button
              className={`
                group/btn relative flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wide uppercase transition-all duration-300
                ${isExpanded
                  ? 'bg-[hsla(var(--gray-999-basis),0.2)] text-[color:var(--gray-200)] hover:text-gray-900'
                  : 'text-white hover:opacity-90 shadow-lg'}
              `}
              style={!isExpanded ? { backgroundColor: 'var(--accent-regular)' } : {}}
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? 'Collapse' : 'Learn More'}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Connected line decoration */}
      <motion.div
        className={`
          absolute z-0
          ${isHorizontal
            ? `w-[1px] h-[30px] left-1/2 ${isEven ? 'top-[-10px]' : 'bottom-[-10px]'}`
            : `h-[1px] w-[30px] top-[48px] ${isEven ? 'right-[-30px]' : 'left-[-30px]'}`
          }
        `}
        style={{
          background: isHorizontal
            ? `linear-gradient(${isEven ? '0deg' : '180deg'}, var(--accent-regular), transparent)`
            : `linear-gradient(${isEven ? '90deg' : '270deg'}, var(--accent-regular), transparent)`,
          opacity: 0.3
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 + (index * 0.05) }}
      />
    </motion.li>
  )
}

// Mémoïsation du composant TimelineItem
const MemoTimelineItem = React.memo(TimelineItem)

// Add CSS for hiding scrollbar while allowing scrolling
// Add this at the end of your file (or in global CSS)
const globalStyles = `
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Styled scrollbar for vertical mode */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: var(--accent-light);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: var(--accent-regular);
}

/* Timeline scroll container styling */
.timeline-scroll-container {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
  padding-right: 10px;
  transition: all 0.3s ease;
}

.timeline-scroll-container:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.timeline-horizontal-list {
  /* déjà géré par flex et gap */
}
`;
