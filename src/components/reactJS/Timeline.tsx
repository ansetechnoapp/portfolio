"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const defaultTimelineEvents = [
  {
    year: 2018,
    title: "Flowers & Saints Founded",
    description: "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },
  {
    year: 2019,
    title: "First Major Exhibition",
    description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
  },
  {
    year: 2020,
    title: "Launch of Online Store",
    description: "Expanded our reach by bringing our creations to the digital world.",
    details:
      "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
  },
  {
    year: 2021,
    title: "Collaboration with Top Brands",
    description: "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
  },
  {
    year: 2022,
    title: "International Recognition",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
  {
    year: 2023,
    title: "Expansion to Physical Stores",
    description: "Opened our first flagship store in the heart of Sydney.",
    details:
      "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
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
}

interface TimelineProps {
  title?: string
  subtitle?: string
  events?: TimelineEventType[]
}

export default function Timeline({
  title = "Our Journey",
  subtitle = "The evolution of Flowers & Saints through the years",
  events,
}: TimelineProps) {
  const timelineEvents = events && events.length > 0 ? events : defaultTimelineEvents
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
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

  return (
    <motion.section
      ref={containerRef}
      className="py-20 bg-[var(--gradient-subtle)] overflow-hidden rounded-3xl shadow-lg border border-[var(--gray-200)]"
      aria-label="Timeline: Our Journey"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--accent-regular)] sm:text-4xl font-brand drop-shadow-md">{title}</h2>
          <p className="mt-4 text-lg text-[var(--gray-400)]">{subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line responsive avec effet glow si survolé */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 w-[2px] sm:w-1 h-full transition-all duration-300 ${glow}`}
            style={{ scaleY: scaleX, background: 'linear-gradient(180deg, var(--accent-light), var(--accent-regular), var(--accent-dark))' }}
            aria-hidden="true"
          />

          {/* Flower icon avec effet glow si survolé */}
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

          <ol className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
                onHover={() => setHoveredEvent(index)}
                onUnhover={() => setHoveredEvent(null)}
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
}: {
  event: (typeof defaultTimelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
  onHover: () => void
  onUnhover: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.li
      ref={ref}
      className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
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
    >
      <div className="w-full md:w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-10 h-10 bg-[var(--accent-regular)] rounded-full shadow-md border-4 border-[var(--gray-1002)]">
          <div className="w-4 h-4 bg-[var(--gray-999)] rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-full md:w-5/12 cursor-pointer group"
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
          <h3 className="text-lg font-semibold mb-1 text-[var(--gray-900)] font-brand">{event.title}</h3>
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