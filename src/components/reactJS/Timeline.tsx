"use client"

import { useState, useRef, useEffect } from "react"
import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  title = "Our Journey",
  subtitle = "The evolution of our company through the years",
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
  const categories = Array.from(new Set(timelineEvents.map(e => e.category).filter(Boolean)))
  const filteredEvents = selectedCategory
    ? timelineEvents.filter(e => e.category === selectedCategory)
    : timelineEvents

  // Handle orientation
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [userOrientation, setUserOrientation] = useState<'vertical' | 'horizontal'>(orientation)
  const effectiveOrientation = isMobile ? 'horizontal' : userOrientation
  const isHorizontal = effectiveOrientation === 'horizontal'

  // Reset expanded state when orientation changes
  useEffect(() => {
    setExpandedEvent(null)
  }, [isHorizontal])

  // Scroll to start when category changes
  useEffect(() => {
    if (isHorizontal && horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollLeft = 0
    }
  }, [selectedCategory, isHorizontal])

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

  return (
    <motion.section
      ref={containerRef}
      className="relative py-16 px-4 overflow-hidden rounded-2xl bg-slate-50/5 backdrop-blur-lg border border-white/10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        boxShadow: '0 10px 30px -5px rgba(2, 8, 23, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[50%] rounded-full bg-gradient-to-b from-indigo-500/20 to-purple-500/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[50%] rounded-full bg-gradient-to-t from-blue-500/20 to-cyan-400/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-12">
        <motion.span
          className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent-regular uppercase rounded-full bg-white/80 backdrop-blur-sm mb-3 border border-accent-light/20"
          style={{
            color: 'var(--accent-regular)',
            boxShadow: '0 2px 10px rgba(157, 78, 255, 0.1)'
          }}
          variants={titleVariants}
        >
          {title === "Our Journey" ? "Timeline" : title}
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent mb-4"
          style={{
            backgroundImage: 'var(--accent-gradient)',
            fontFamily: 'var(--font-display)'
          }}
          variants={titleVariants}
        >
          {title}
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg"
          style={{ color: 'var(--secondary-text)' }}
          variants={titleVariants}
        >
          {subtitle}
        </motion.p>

        {/* Orientation toggle (not on mobile) */}
        {!isMobile && (
          <motion.div
            className="mt-8"
            variants={titleVariants}
          >
            <div className="inline-flex p-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/40">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${userOrientation === 'vertical'
                  ? 'bg-white text-accent-regular shadow-sm'
                  : 'text-gray-600 hover:text-accent-regular'
                  }`}
                style={{
                  boxShadow: userOrientation === 'vertical' ? 'var(--accent-soft-glow)' : 'none'
                }}
                onClick={() => setUserOrientation('vertical')}
              >
                Vertical
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${userOrientation === 'horizontal'
                  ? 'bg-white text-accent-regular shadow-sm'
                  : 'text-gray-600 hover:text-accent-regular'
                  }`}
                style={{
                  boxShadow: userOrientation === 'horizontal' ? 'var(--accent-soft-glow)' : 'none'
                }}
                onClick={() => setUserOrientation('horizontal')}
              >
                Horizontal
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Category filters */}
      {categories.length > 1 && (
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!selectedCategory
              ? 'text-white shadow-md'
              : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-white/40 hover:border-accent-light/30'
              }`}
            style={{
              backgroundColor: !selectedCategory ? 'var(--accent-regular)' : '',
              boxShadow: !selectedCategory ? 'var(--accent-soft-glow)' : ''
            }}
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat
                ? 'text-white shadow-md'
                : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-white/40 hover:border-accent-light/30'
                }`}
              style={{
                backgroundColor: selectedCategory === cat ? 'var(--accent-regular)' : '',
                boxShadow: selectedCategory === cat ? 'var(--accent-soft-glow)' : ''
              }}
              onClick={() => setSelectedCategory(cat || null)}
            >
              {cat && categoryIcons[cat] && (
                <span className={selectedCategory === cat ? 'text-white' : 'text-accent-regular'}>
                  {categoryIcons[cat]}
                </span>
              )}
              {cat}
            </button>
          ))}
        </motion.div>
      )}

      {/* Main timeline container */}
      <div
        ref={horizontalScrollRef}
        className={`relative ${isHorizontal ? 'overflow-x-auto hide-scrollbar' : ''}`}
        style={isHorizontal ? {
          paddingBottom: '2rem',
          minHeight: '450px',
          scrollBehavior: 'smooth'
        } : {}}
      >
        {filteredEvents.length === 0 ? (
          <motion.div
            className="text-center py-10 font-medium"
            style={{ color: 'var(--accent-regular)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No events to display for this category.
          </motion.div>
        ) : (
          <div className={`relative ${isHorizontal ? 'px-8' : 'px-4 sm:px-6 lg:px-12'}`}>
            {/* Center line */}
            <motion.div
              className={`
                ${isHorizontal
                  ? 'absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r'
                  : 'absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b'
                }
                from-accent-light via-accent-regular to-accent-dark
              `}
              initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
              animate={{ scaleX: 1, scaleY: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Events list */}
            <ol
              className={`relative z-10 ${isHorizontal ? 'flex' : 'block'}`}
              style={isHorizontal ? {
                minWidth: filteredEvents.length * 350 + 'px',
                gap: '3.5rem',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem'
              } : {}}
            >
              <AnimatePresence mode="wait">
                {filteredEvents.map((event, index) => (
                  <TimelineItem
                    key={`${event.year}-${index}`}
                    event={event}
                    index={index}
                    isExpanded={expandedEvent === index}
                    onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
                    isHorizontal={isHorizontal}
                    total={filteredEvents.length}
                  />
                ))}
              </AnimatePresence>
            </ol>
          </div>
        )}
      </div>

      {/* Scroll indicators for horizontal view */}
      {isHorizontal && filteredEvents.length > 3 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center gap-2 text-xs border border-white/40" style={{ color: 'var(--secondary-text)' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-regular)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Scroll for more</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-regular)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      )}
    </motion.section>
  )
}

// Timeline item component
function TimelineItem({
  event,
  index,
  isExpanded,
  onToggle,
  isHorizontal,
  total
}: {
  event: TimelineEventType
  index: number
  isExpanded: boolean
  onToggle: () => void
  isHorizontal: boolean
  total: number
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
          : `mb-16 pb-2 ${isEven ? 'ml-auto mr-[calc(50%+2rem)]' : 'mr-auto ml-[calc(50%+2rem)]'}`
        }
      `}
      style={!isHorizontal ? { maxWidth: 'calc(50% - 3rem)' } : {}}
      variants={itemVariants}
    >
      {/* Dot on the line */}
      <motion.div
        className={`
          absolute z-10
          ${isHorizontal
            ? `left-1/2 -translate-x-1/2 ${isEven ? 'top-0' : 'bottom-0'}`
            : `top-0 ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`
          }
        `}
        variants={dotVariants}
        whileHover="hover"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border-2" style={{ borderColor: 'var(--accent-regular)', boxShadow: 'var(--accent-soft-glow)' }}>
            {event.category && categoryIcons[event.category] ? (
              <span style={{ color: 'var(--accent-regular)' }}>{categoryIcons[event.category]}</span>
            ) : (
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--accent-regular)' }} />
            )}
          </div>
          {/* Year label */}
          <div
            className={`
              absolute whitespace-nowrap font-medium text-sm bg-white px-2 py-0.5 rounded-full shadow-sm border
              ${isHorizontal
                ? `${isEven ? 'bottom-full mb-1' : 'top-full mt-1'} left-1/2 -translate-x-1/2`
                : `${isEven ? 'left-full ml-1' : 'right-full mr-1'} top-1/2 -translate-y-1/2`
              }
            `}
            style={{ color: 'var(--accent-regular)', borderColor: 'var(--accent-light)', opacity: 0.9 }}
          >
            {event.year}
          </div>
        </div>
      </motion.div>

      {/* Event content */}
      <motion.div
        className="relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
        }}
        whileHover={{
          y: -5,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
          transition: {
            duration: 0.3
          }
        }}
        onClick={onToggle}
        layout
      >
        <div className="p-6">
          {/* Category tag */}
          {event.category && (
            <div className="mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-text-over)', opacity: 0.9 }}>
                {categoryIcons[event.category] && (
                  <span>{categoryIcons[event.category]}</span>
                )}
                {event.category}
              </span>
            </div>
          )}

          {/* Title */}
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold mb-2 text-slate-800 transition-colors block"
              style={{ fontFamily: 'var(--font-display)' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-regular)'}
              onMouseOut={(e) => e.currentTarget.style.color = ''}
              onClick={(e) => e.stopPropagation()}
            >
              {event.title}
            </a>
          ) : (
            <h3 className="text-xl font-bold mb-2 text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
          )}

          {/* Description */}
          <p style={{ color: 'var(--secondary-text)' }}>{event.description}</p>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(var(--gray-999-basis), 0.1)' }}>
                  <p style={{ color: 'var(--secondary-text)', opacity: 0.8 }}>{event.details}</p>

                  {event.image && (
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="mt-4 rounded-lg w-full h-auto object-cover shadow-sm"
                      loading="lazy"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <div className="mt-4 flex justify-end">
            <motion.button
              className={`
                inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                ${isExpanded
                  ? 'bg-slate-200 text-slate-700'
                  : 'text-white'}
              `}
              style={!isExpanded ? { backgroundColor: 'var(--accent-regular)' } : {}}
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              whileHover={{ scale: 1.05, boxShadow: !isExpanded ? '0 2px 8px rgba(118, 17, 166, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Less
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  More
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Connected line decoration */}
      <motion.div
        className={`
          absolute z-0
          ${isHorizontal
            ? `w-px h-[20px] left-1/2 ${isEven ? 'top-[10px]' : 'bottom-[10px]'}`
            : `h-px w-[20px] top-[10px] ${isEven ? 'right-[-20px]' : 'left-[-20px]'}`
          }
        `}
        style={{ background: 'var(--accent-regular)' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 + (index * 0.05) }}
      />
    </motion.li>
  )
}

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
`;

// Add the global styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = globalStyles;
  document.head.appendChild(style);
}
