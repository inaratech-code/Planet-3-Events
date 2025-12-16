'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Box Cricket Tournament',
    date: '10-11 Jan 2026',
    location: 'Dhangadhi',
    time: '9:00 AM - 6:00 PM',
    participants: '16 Teams',
    description: 'Join us for an exciting box cricket tournament featuring 16 teams competing for the championship. Two days of intense matches, entertainment, and prizes.',
    details: 'Registration open now! Limited slots available. Contact us for more information about participation and sponsorship opportunities.',
  },
]

// Simple Calendar Component
function CalendarComponent({ events }: { events: typeof upcomingEvents }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  
  // Parse event dates from the events array
  const eventDates = events.map((event) => {
    // Parse date string like "10-11 Jan 2025"
    const dateMatch = event.date.match(/(\d+)-(\d+)\s+(\w+)\s+(\d+)/)
    if (dateMatch) {
      const startDay = parseInt(dateMatch[1])
      const endDay = parseInt(dateMatch[2])
      const monthName = dateMatch[3]
      const year = parseInt(dateMatch[4])
      
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      }
      const month = monthMap[monthName]
      
      // Return array of dates for the event range
      const dates: Date[] = []
      for (let day = startDay; day <= endDay; day++) {
        dates.push(new Date(year, month, day))
      }
      return { event, dates }
    }
    return null
  }).filter(Boolean) as Array<{ event: typeof upcomingEvents[0], dates: Date[] }>
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }
  
  const isEventDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day)
    return eventDates.some(({ dates }) => 
      dates.some(eventDate => 
        eventDate.getTime() === checkDate.getTime()
      )
    )
  }
  
  const getEventForDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day)
    const eventData = eventDates.find(({ dates }) => 
      dates.some(eventDate => eventDate.getTime() === checkDate.getTime())
    )
    return eventData?.event
  }
  
  const hasEventsInMonth = () => {
    return eventDates.some(({ dates }) => 
      dates.some(eventDate => 
        eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    )
  }
  
  const getEventsInMonth = () => {
    return eventDates.filter(({ dates }) => 
      dates.some(eventDate => 
        eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    )
  }
  
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }
  
  const days = []
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-10 h-10" />)
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isEvent = isEventDate(day)
    const eventForDate = getEventForDate(day)
    days.push(
      <motion.div
        key={day}
        initial={false}
        animate={{
          scale: isEvent ? 1.15 : 1,
        }}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all relative ${
          isEvent
            ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white font-bold shadow-xl ring-2 ring-blue-400 ring-offset-2'
            : 'text-black hover:bg-black/10'
        }`}
        title={eventForDate ? eventForDate.title : undefined}
        whileHover={isEvent ? { scale: 1.2 } : { scale: 1.05 }}
      >
        {day}
        {isEvent && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-neon-blue rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    )
  }
  
  return (
    <div className="bg-white/50 border border-black/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-black/10 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <h3 className="text-xl font-bold text-black">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-black/10 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map((day) => (
          <div key={day} className="w-10 h-10 flex items-center justify-center text-sm font-bold text-black/60">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {days}
      </div>
      
      {hasEventsInMonth() && (
        <div className="mt-4 pt-4 border-t border-black/10 space-y-2">
          {getEventsInMonth().map(({ event, dates }) => (
            <div key={event.id} className="flex items-center gap-2 text-sm text-black">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
              <span className="font-medium">{event.title} - {event.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section id="portfolio" ref={ref} className="py-16 md:py-24 lg:py-32 relative bg-[#f5f3ef]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CalendarComponent events={upcomingEvents} />
          </motion.div>

          {/* Event Cards Section */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative h-96 perspective-1000"
                onMouseEnter={() => setFlippedCard(event.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(flippedCard === event.id ? null : event.id)}
              >
                <div
                  className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
                    flippedCard === event.id ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 border border-blue-800 rounded-2xl p-6 md:p-8 shadow-lg"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {event.title}
                      </h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3 text-white">
                          <Calendar className="w-5 h-5 text-white" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <MapPin className="w-5 h-5 text-white" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Clock className="w-5 h-5 text-white" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Users className="w-5 h-5 text-white" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm mt-auto text-justify">
                        Click or hover for more details
                      </p>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex flex-col h-full text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {event.title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed text-justify">
                        {event.description}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed text-justify mt-auto">
                        {event.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
