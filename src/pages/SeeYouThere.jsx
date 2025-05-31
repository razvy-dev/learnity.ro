"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircle, Calendar, Mail, ArrowLeft, Download } from "lucide-react"
import confetti from "canvas-confetti"

const SeeYouThere = () => {
  const location = useLocation()
  const [eventDetails, setEventDetails] = useState({
    name: "eveniment",
    date: "în curând",
    color: "customBlue",
    lightColor: "customLightBlue",
    path: "/",
  })

  // Parse query parameters to get event details
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const event = searchParams.get("event") || ""

    // Set event details based on the event parameter
    if (event === "wtfuture") {
      setEventDetails({
        name: "WTFuture",
        date: "7-8 iunie 2025",
        color: "customBlue",
        lightColor: "customLightBlue",
        path: "/what-the-future",
      })
    } else if (event === "changemakers") {
      setEventDetails({
        name: "Changemakers Camp",
        date: "17-23 august 2025",
        color: "customOrange",
        lightColor: "customLightOrange",
        path: "/changemakers-camp",
      })
    } else if (event === "dare") {
      setEventDetails({
        name: "Dare Yourself",
        date: "14-20 iulie 2025",
        color: "customBlue",
        lightColor: "customLightBlue",
        path: "/dare-yourself",
      })
    }

    // Trigger confetti animation
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#05be9e", "#F8A12E", "#2f2f27"],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#05be9e", "#F8A12E", "#2f2f27"],
      })
    }, 250)

    return () => clearInterval(interval)
  }, [location])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-customWhite to-white flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circles */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-${eventDetails.lightColor}/30`}
          style={{ filter: "blur(60px)" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-customLightOrange/20"
          style={{ filter: "blur(60px)" }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10">
          <svg width="60" height="60" viewBox="0 0 60 60" className={`text-${eventDetails.color}/30`}>
            <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-customOrange/30">
            <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Scattered stars */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${i % 2 === 0 ? `text-${eventDetails.color}` : "text-customOrange"}`}
              >
                <polygon
                  fill="currentColor"
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl w-full relative z-10"
      >
        {/* Success icon */}
        <motion.div
          variants={itemVariants}
          className="w-24 h-24 mx-auto mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <div className={`absolute inset-0 bg-${eventDetails.color}/20 rounded-full animate-pulse`}></div>
          <div className="relative flex items-center justify-center w-full h-full">
            <CheckCircle className={`w-16 h-16 text-${eventDetails.color}`} />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-customBlack mb-4">
            MULȚUMIM PENTRU <br />
            <span className={`text-${eventDetails.color}`}>ÎNSCRIERE!</span>
          </h1>

          <p className="text-xl text-customBlack/80 max-w-xl mx-auto">
            Înscrierea ta la <span className="font-bold">{eventDetails.name}</span> a fost înregistrată cu succes. Abia
            așteptăm să te cunoaștem!
          </p>
        </motion.div>

        {/* Details card */}
        <motion.div
          variants={itemVariants}
          className="bg-customWhite rounded-xl p-6 mb-10 border-l-4 border-customOrange"
        >
          <h2 className="text-xl font-bold mb-4 text-customBlack">Ce urmează?</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div
                className={`w-10 h-10 rounded-full bg-${eventDetails.color}/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0`}
              >
                <Mail className={`w-5 h-5 text-${eventDetails.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-customBlack">Email de confirmare</h3>
                <p className="text-customBlack/70">
                  Vei primi în curând un email cu toate detaliile și informațiile necesare.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`w-10 h-10 rounded-full bg-${eventDetails.color}/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0`}
              >
                <Calendar className={`w-5 h-5 text-${eventDetails.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-customBlack">Marchează în calendar</h3>
                <p className="text-customBlack/70">
                  Nu uita să marchezi datele în calendar: <span className="font-medium">{eventDetails.date}</span>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`w-10 h-10 rounded-full bg-${eventDetails.color}/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0`}
              >
                <Download className={`w-5 h-5 text-${eventDetails.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-customBlack">Descarcă informațiile</h3>
                <p className="text-customBlack/70">
                  Poți descărca un PDF cu toate informațiile necesare pentru pregătire.
                </p>
                <button className={`mt-2 text-${eventDetails.color} font-medium flex items-center hover:underline`}>
                  Descarcă PDF <Download className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={eventDetails.path}
            className={`bg-${eventDetails.color} text-white font-bold py-3 px-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Înapoi la {eventDetails.name}
          </Link>

          <Link
            to="/"
            className="bg-white border border-customBlack/20 text-customBlack font-bold py-3 px-6 rounded-lg text-center shadow-sm hover:shadow transition-all duration-300"
          >
            Pagina principală
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-customOrange/30 rounded-tl-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-customBlue/30 rounded-br-xl"></div>
      </motion.div>
    </div>
  )
}

export default SeeYouThere
