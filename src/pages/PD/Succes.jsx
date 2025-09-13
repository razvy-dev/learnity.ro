"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X, Home, Calendar } from "lucide-react"

const SuccessModal = ({ isOpen, onClose, onGoHome, participantName }) => {
  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  const checkVariant = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.3,
      },
    },
  }

  const confettiVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const floatingVariant = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} className="text-gray-600" />
            </motion.button>

            {/* Floating decorative elements */}
            <div className="absolute top-6 left-6 w-4 h-4 bg-customLightBlue rounded-full opacity-30"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-customLightOrange rounded-full opacity-40"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-customOrange rounded-full opacity-35"></div>
            <div className="absolute bottom-6 right-8 w-5 h-5 bg-customLightBlue rounded-full opacity-25"></div>

            {/* Confetti elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0 ? "bg-customBlue" : i % 3 === 1 ? "bg-customOrange" : "bg-customLightBlue"
                }`}
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 15}%`,
                }}
                variants={confettiVariant}
                initial="hidden"
                animate="visible"
                custom={i}
              />
            ))}

            {/* Success icon */}
            <div className="text-center mb-6">
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={checkVariant}
                initial="hidden"
                animate="visible"
              >
                <CheckCircle size={48} className="text-green-600" />
              </motion.div>

              <motion.h2
                className="text-3xl font-bangers text-customBlack mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Înscrierea a fost trimisă!
              </motion.h2>

              <motion.p
                className="text-customBlack/70 font-arima text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Mulțumim{participantName ? `, ${participantName}` : ""}!
              </motion.p>
            </div>

            {/* Success message */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-customBlack/80 font-arima leading-relaxed mb-4">
                Înscrierea ta a fost procesată cu succes! Vei primi în curând un email de confirmare cu toate detaliile.
              </p>
              <motion.div
                className="bg-customLightBlue/20 rounded-xl p-4 border border-customLightBlue"
                variants={floatingVariant}
                animate="animate"
              >
                <p className="text-customBlue font-arima text-sm">
                  <strong>Ce urmează?</strong>
                  <br />
                  Echipa Learnity te va contacta în următoarele 24 de ore pentru a confirma participarea și a-ți oferi
                  toate informațiile necesare.
                </p>
              </motion.div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                onClick={onGoHome}
                className="flex-1 bg-customBlue text-white px-6 py-3 rounded-xl font-bangers text-lg hover:bg-customBlue/90 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home size={20} className="mr-2" />
                Înapoi Acasă
              </motion.button>

              <motion.button
                onClick={onClose}
                className="flex-1 bg-customOrange text-white px-6 py-3 rounded-xl font-bangers text-lg hover:bg-customOrange/90 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={20} className="mr-2" />
                Vezi Evenimente
              </motion.button>
            </motion.div>

            {/* Additional info */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-customBlack/50 font-arima text-xs">
                Dacă ai întrebări, ne poți contacta oricând la hello@learnity.ro
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessModal
