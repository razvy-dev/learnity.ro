"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { AlertTriangle, ArrowLeft } from "lucide-react"

const SomethingWentWrong = () => {
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
        {/* Simple background elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-customLightOrange/20"
          style={{ filter: "blur(60px)" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-customLightBlue/20"
          style={{ filter: "blur(60px)" }}
        ></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-xl w-full relative z-10"
      >
        {/* Error icon */}
        <motion.div
          variants={itemVariants}
          className="w-24 h-24 mx-auto mb-8 relative"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 1, delay: 0.5, repeat: 1 }}
        >
          <div className="absolute inset-0 bg-customOrange/20 rounded-full animate-pulse"></div>
          <div className="relative flex items-center justify-center w-full h-full">
            <AlertTriangle className="w-16 h-16 text-customOrange" />
          </div>
        </motion.div>

        {/* Simple message */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-customBlack mb-4">OOPS!</h1>

          <p className="text-xl text-customBlack/80 max-w-xl mx-auto mb-2">
            Ceva nu a funcționat în procesul de înregistrare.
          </p>

          <p className="text-lg text-customBlack/70 max-w-xl mx-auto">Te rugăm să încerci din nou.</p>
        </motion.div>

        {/* Single button to go back */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Link
            to="/what-the-future"
            className="bg-customBlue text-white font-bold py-3 px-8 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Înapoi la WTFuture
          </Link>
        </motion.div>

        {/* Simple decorative elements */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-customOrange/30 rounded-tl-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-customBlue/30 rounded-br-xl"></div>
      </motion.div>
    </div>
  )
}

export default SomethingWentWrong
