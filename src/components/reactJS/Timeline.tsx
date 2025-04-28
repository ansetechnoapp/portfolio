"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

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

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
    aria-hidden="true"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

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

export default function Timeline({
  title = "Our Journey",
  subtitle = "The evolution of Flowers & Saints through the years",
  events,
  orientation = 'vertical',
}: TimelineProps) {
  const timelineEvents = events && events.length > 0 ? events : defaultTimelineEvents
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const categories = Array.from(new Set(timelineEvents.map(e => e.category).filter(Boolean)))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const filteredEvents = selectedCategory ? timelineEvents.filter(e => e.category === selectedCategory) : timelineEvents
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Animation d'apparition de la section
  const sectionInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Glow animé si survolé
  const glow = hoveredEvent !== null ? 'drop-shadow-[0_0_16px_var(--accent-regular)]' : ''

  // Orientation horizontale ?
  const isHorizontal = orientation === 'horizontal'

  return (
    <motion.section
      ref={containerRef}
      className={`py-20 bg-[var(--gradient-subtle)] overflow-hidden rounded-3xl shadow-lg border border-[var(--gray-200)] ${isHorizontal ? 'px-0' : ''}`}
      aria-label="Timeline: Our Journey"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={`max-w-7xl mx-auto ${isHorizontal ? 'px-0' : 'px-4 sm:px-6 lg:px-8'}`}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--accent-regular)] sm:text-4xl font-brand drop-shadow-md">{title}</h2>
          <p className="mt-4 text-lg text-[var(--gray-400)]">{subtitle}</p>
        </motion.div>

        {/* Filtres par catégorie */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              className={`filter-btn px-4 py-1 rounded-full border font-semibold transition-all ${!selectedCategory ? 'bg-[var(--accent-regular)] text-[var(--accent-text-over)] border-[var(--accent-regular)]' : 'bg-[var(--gray-1003)] text-[var(--accent-regular)] border-[var(--accent-regular)] hover:bg-[var(--accent-light)] hover:text-[var(--accent-text-over)]'}`}
              onClick={() => setSelectedCategory(null)}
            >
              Toutes
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn px-4 py-1 rounded-full border font-semibold transition-all ${selectedCategory === cat ? 'bg-[var(--accent-regular)] text-[var(--accent-text-over)] border-[var(--accent-regular)]' : 'bg-[var(--gray-1003)] text-[var(--accent-regular)] border-[var(--accent-regular)] hover:bg-[var(--accent-light)] hover:text-[var(--accent-text-over)]'}`}
                onClick={() => setSelectedCategory(cat || null)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className={`relative ${isHorizontal ? 'overflow-x-auto pb-8' : ''}`} style={isHorizontal ? { WebkitOverflowScrolling: 'touch' } : {}}>
          {/* Ligne centrale */}
          {isHorizontal ? (
            <motion.div
              className={`absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-light)] via-[var(--accent-regular)] to-[var(--accent-dark)] transition-all duration-300 ${glow}`}
              style={{ scaleX, zIndex: 1 }}
              aria-hidden="true"
            />
          ) : (
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 w-[2px] sm:w-1 h-full transition-all duration-300 ${glow}`}
              style={{ scaleY: scaleX, background: 'linear-gradient(180deg, var(--accent-light), var(--accent-regular), var(--accent-dark))' }}
              aria-hidden="true"
            />
          )}

          {/* Flower icon */}
          {isHorizontal ? (
            <motion.div
              className={`absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 z-10 flex justify-center ${glow}`}
              style={{ x: 0 }}
              aria-hidden="true"
            >
              <div className="flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-[var(--accent-overlay)] blur-2xl opacity-60 animate-pulse" />
                <FlowerIcon progress={1} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={`sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[var(--accent-regular)] transition-all duration-300 ${glow}`}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
              aria-hidden="true"
            >
              <div className="flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-[var(--accent-overlay)] blur-2xl opacity-60 animate-pulse" />
                <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.7, 1]) as any} />
              </div>
            </motion.div>
          )}

          <ol className={`relative z-10 ${isHorizontal ? 'flex flex-row gap-10 min-w-[700px] md:min-w-[900px] lg:min-w-[1200px] justify-between' : ''}`}>
            {filteredEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
                onHover={() => setHoveredEvent(index)}
                onUnhover={() => setHoveredEvent(null)}
                orientation={orientation}
                total={filteredEvents.length}
              />
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
  onHover,
  onUnhover,
  orientation = 'vertical',
  total = 1,
}: {
  event: TimelineEventType
  index: number
  isExpanded: boolean
  onToggle: () => void
  onHover: () => void
  onUnhover: () => void
  orientation?: 'vertical' | 'horizontal'
  total?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const isEven = index % 2 === 0
  const isHorizontal = orientation === 'horizontal'

  return (
    <motion.li
      ref={ref}
      className={
        isHorizontal
          ? `relative flex flex-col items-center w-64 min-w-[220px] max-w-xs ${isEven ? 'justify-end' : 'justify-start'} pb-8 pt-8`
          : `mb-12 flex flex-col md:flex-row justify-between items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`
      }
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`Event ${event.year}: ${event.title}`}
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
      onFocus={onHover}
      onBlur={onUnhover}
      style={isHorizontal ? { marginLeft: index === 0 ? 0 : undefined, marginRight: index === total - 1 ? 0 : undefined } : {}}
    >
      {/* Image si présente */}
      {event.image && (
        <div className={isHorizontal ? `w-full flex justify-center mb-4` : `w-full md:w-5/12 flex justify-center mb-4 md:mb-0`}>
          <img
            src={event.image}
            alt={event.title}
            className="rounded-xl shadow-md max-h-48 object-cover border border-[var(--gray-200)]"
            loading="lazy"
            style={{ maxWidth: '320px', width: '100%' }}
          />
        </div>
      )}
      <div className={isHorizontal ? 'z-20 w-full flex justify-center mb-2' : 'z-20 w-full md:w-5/12'}>
        <div className="flex items-center justify-center w-10 h-10 bg-[var(--accent-regular)] rounded-full shadow-md border-4 border-[var(--gray-1002)] mx-auto md:mx-0">
          <div className="w-4 h-4 bg-[var(--gray-999)] rounded-full" />
        </div>
      </div>
      <motion.div
        className={isHorizontal ? 'w-full cursor-pointer group' : 'w-full md:w-5/12 cursor-pointer group'}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && onToggle()}
        tabIndex={0}
        role="button"
        aria-pressed={isExpanded}
      >
        <div className="p-6 bg-[var(--gray-1003)] rounded-xl shadow-md border border-[var(--accent-regular)] transition-all group-hover:shadow-lg group-hover:border-[var(--accent-light)]">
          <span className="font-bold text-[var(--accent-regular)]">{event.year}</span>
          {/* Titre cliquable si lien */}
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold mb-1 text-[var(--gray-900)] font-brand underline hover:text-[var(--accent-regular)] block"
              tabIndex={-1}
            >
              {event.title}
            </a>
          ) : (
            <h3 className="text-lg font-semibold mb-1 text-[var(--gray-900)] font-brand">{event.title}</h3>
          )}
          <p className="text-[var(--gray-400)]">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-[var(--gray-300)]">{event.details}</p>
          </motion.div>
          <button
            className="mt-4 px-4 py-1 rounded-full bg-[var(--accent-regular)] text-[var(--accent-text-over)] text-sm font-semibold shadow hover:bg-[var(--accent-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-regular)] transition-all"
            aria-expanded={isExpanded}
            aria-controls={`timeline-details-${index}`}
            tabIndex={0}
            onClick={e => { e.stopPropagation(); onToggle(); }}
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      </motion.div>
    </motion.li>
  )
} 