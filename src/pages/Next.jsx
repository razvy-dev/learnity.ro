import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import dare from '../components/Home/assets/dare.jpg';
import changemakers from '../components/Home/assets/changemakers.jpg';
import wtf from '../components/WTF/assets/5.jpeg';

const NextExperiences = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

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

  const events = [
    {
      id: "wtfuture",
      name: "WTFuture",
      date: "7-8 iunie 2025",
      location: "București",
      description: "Un eveniment de două zile pentru liceeni care vor să exploreze viitorul educației și tehnologiei.",
      path: "/what-the-future",
      color: "customBlue",
      lightColor: "customLightBlue",
      image: wtf
    },
    {
      id: "changemakers",
      name: "Changemakers Camp",
      date: "17-23 august 2025",
      location: "Predeluț, Bran",
      description:
        "O tabără de o săptămână pentru liceeni care vor să descopere cine sunt și să-și găsească vocea în lume.",
      path: "/changemakers-camp",
      color: "customOrange",
      lightColor: "customLightOrange",
      image: changemakers
    },
    {
      id: "dare",
      name: "Dare Yourself",
      date: "14-20 iulie 2025",
      location: "Predeluț, Bran",
      description:
        "O tabără intensivă care te scoate din zona de confort și te ajută să devii o versiune mai curajoasă a ta.",
      path: "/dare-yourself",
      color: "customBlue",
      lightColor: "customLightBlue",
      image: dare
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-customWhite to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circles */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-customLightBlue/20"
          style={{ filter: "blur(40px)" }}
        ></div>
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-customLightOrange/20"
          style={{ filter: "blur(40px)" }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? "bg-customBlue/30" : i % 3 === 1 ? "bg-customOrange/30" : "bg-customBlack/10"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>

        {/* Dashed lines */}
        <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-customBlue/20"></div>
        <div className="absolute top-3/4 left-0 w-full border-t border-dashed border-customOrange/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="mb-6">
              <motion.div
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-customBlue">Learnity</h2>
                <p className="text-lg text-customBlue/80">EDUCATION UNPLUGGED</p>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-customBlack mb-6">
              ALEGE <span className="text-customOrange">AVENTURA TA</span>
            </h1>

            <p className="text-xl max-w-2xl mx-auto text-customBlack/80">
              Descoperă programele noastre educaționale create special pentru liceeni care vor să exploreze, să învețe
              și să crească într-un mod autentic și distractiv.
            </p>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-gradient-to-r from-customBlue to-customOrange mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mt-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {/* Background shape that rotates on hover */}
                <motion.div
                  className={`absolute inset-0 bg-${event.lightColor} rounded-xl`}
                  animate={{
                    rotate: hoveredCard === event.id ? [0, 2, 0, -2, 0] : 0,
                  }}
                  transition={{ duration: 1, repeat: hoveredCard === event.id ? Number.POSITIVE_INFINITY : 0 }}
                ></motion.div>

                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden z-10">
                  {/* Event image */}
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-${event.lightColor}/50 flex items-center justify-center`}>
                      <img src={event.image} alt={event.name} />
                    </div>

                    {/* Decorative corner ribbon */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div
                        className={`absolute top-0 right-0 w-28 h-28 bg-${event.color} rotate-45 translate-y-[-50%] translate-x-[50%] flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-xs rotate-45 translate-y-10">
                          {index === 0 ? "EVENIMENT" : "TABĂRĂ"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 text-${event.color}`}>{event.name}</h3>

                    <p className="text-customBlack/80 mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-customBlack/70">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-customBlack/70">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <Link
                      to={event.path}
                      className={`inline-block w-full bg-${event.color} text-white font-bold py-3 px-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Află mai multe
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div variants={itemVariants} className="text-center mt-16 text-customBlack/60">
            <p>Alege experiența care ți se potrivește și începe călătoria ta cu Learnity!</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NextExperiences
