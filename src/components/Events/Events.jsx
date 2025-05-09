"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link, useNavigate } from "react-router-dom"
import { Calendar, Clock, MapPin, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import useEventsStore from "../../state/useEvents"
import NotFound from "../NotFound"
import LoadingPage from "../Loading/LoadingPage"
import useAuth from '../../state/useAuth';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const EventsSection = () => {
  const { events, fetchEvents, loading, error } = useEventsStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents])

  const currentDate = new Date()
  const [displayDate, setDisplayDate] = useState({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  })
  const [filteredEvents, setFilteredEvents] = useState([])
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setDisplayDate((prev) => {
      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 }
      } else {
        return { ...prev, month: prev.month - 1 }
      }
    })
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setDisplayDate((prev) => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 }
      } else {
        return { ...prev, month: prev.month + 1 }
      }
    })
  }

  // Filter events by month and year whenever displayDate changes
  useEffect(() => {
    const filtered = events
      .filter((event) => {
        const eventDate = new Date(event.date)
        return eventDate.getMonth() === displayDate.month && eventDate.getFullYear() === displayDate.year
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date within month

    setFilteredEvents(filtered)
  }, [displayDate, events])

  // Format date for display
  const formatEventDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  // Format time for display
  const formatEventTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) return <LoadingPage />

  console.log(events)
  if (error) return <NotFound />

  return (
    <section ref={ref} className="py-20 mt-20 px-4 bg-gradient-to-br bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic transform -rotate-1">
              Upcoming Events
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Join us for exciting workshops, community gatherings, and learning adventures throughout the year. Our
            events offer enriching experiences for children and families to learn, create, and connect.
          </p>
        </div>

        {/* Month navigation */}
        <div className={`mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
          <div className="flex justify-center items-center">
            <button
              onClick={goToPreviousMonth}
              className="bg-white hover:bg-customLightOrange text-customBlack p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Previous month"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="mx-6 px-8 py-3 bg-customBlue text-white font-bold text-xl rounded-full shadow-md min-w-[200px] text-center">
              {months[displayDate.month]} {displayDate.year}
            </div>

            <button
              onClick={goToNextMonth}
              className="bg-white hover:bg-customLightOrange text-customBlack p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Next month"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Events display */}
        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl ${
                  inView ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Event image */}
                  <div className="md:w-2/5 relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-customOrange text-white font-bold px-4 py-2 rounded-br-lg">
                      <Calendar className="inline-block mr-2 h-5 w-5" />
                      {formatEventDate(event.date).split(",")[1]}
                    </div>
                  </div>

                  {/* Event content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-customBlack mb-3">{event.name}</h3>

                      <div className="space-y-3 mb-4 text-sm">
                        <div className="flex items-start">
                          <Calendar className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{formatEventDate(event.date)}</span>
                        </div>

                        <div className="flex items-start">
                          <Clock className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{formatEventTime(event.date)}</span>
                        </div>

                        <div className="flex items-start">
                          <MapPin className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{event.place}</span>
                        </div>

                        <div className="flex items-start">
                          <User className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>Led by {event.teacher}</span>
                        </div>
                      </div>

                      <p className="text-customBlack mb-6">{event.description}</p>
                    </div>

                    <div className="mt-auto">
                      <Link
                        to={`/upcoming-events/${event.id}`}
                        className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Participă
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`bg-white rounded-xl p-12 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <Calendar className="w-16 h-16 text-customLightBlue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-customBlack mb-2">No Events This Month</h3>
              <p className="text-customBlack max-w-md mx-auto">
                There are no events scheduled for {months[displayDate.month]} {displayDate.year} at this time. Please
                use the navigation arrows to explore events in other months.
              </p>
            </div>
          )}
        </div>

        {/* View all events button */}
        <div
          className={`text-center mt-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <Link
            to="/events"
            className="inline-flex items-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            View All Events
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

