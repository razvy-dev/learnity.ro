"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  User,
  Phone,
  School,
  GraduationCap,
  MessageSquare,
  CheckCircle,
  XCircle,
  Loader2,
  Search,
  Clock,
  BookOpen,
  Heart,
  Star,
  AlertCircle,
  Home,
} from "lucide-react"
import usePdStore from "../../state/usePD"
import SuccessModal from "./Succes"

function convertGsUrlToHttps(gsUrl) {
    if (!gsUrl) return '';
    if (gsUrl.startsWith('gs://')) {
      const bucket = gsUrl.split('/')[2];
      const path = gsUrl.split('/').slice(3).join('/');
      return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(path)}?alt=media`;
    }
    return gsUrl;
  }

const ParticipantForm = () => {
  const { nextEvent, relatedEvents, isLoading, submitParticipantForm, fetchNextEvent } = usePdStore()

  const navigate = useNavigate()

  useEffect(() => {
    // Load next PD + related events when page mounts
    fetchNextEvent()
  }, [fetchNextEvent])

  const floatingVariant = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariant = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }


  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    school: "",
    grade: "",
    howDidYouFindOut: "",
    eventChoices: {},
    additionalComments: "",
  })

  const handleGoHome = () => {
    navigate("/")
  }

  // Validation errors
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Animation variants
  const bounceVariant = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
    blur: { scale: 1 },
  }

  const shakeVariant = {
    shake: {
      x: [-10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  }

  const popVariant = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.95 },
  }

  // Phone number validation
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(\+4|4|0)?[0-9]{9}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  // Form validation
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu"
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Numărul de telefon este obligatoriu"
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Numărul de telefon nu este valid"
    }
    if (!formData.school.trim()) newErrors.school = "Școala este obligatorie"
    if (!formData.grade) newErrors.grade = "Clasa este obligatorie"

    return newErrors
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success modal instead of alert
      setShowSuccessModal(true)

      submitParticipantForm({
        ...formData,
        pdEvent: nextEvent,
        selectedEvents: relatedEvents.filter((event) => formData.eventChoices[event.id] === "yes"),
      })

      // Reset form
      setFormData({
        name: "",
        phoneNumber: "",
        school: "",
        grade: "",
        howDidYouFindOut: "",
        eventChoices: {},
        additionalComments: "",
      })
      setErrors({})
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("A apărut o eroare. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update form data
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value })

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors }
      delete newErrors[field]
      setErrors(newErrors)
    }
  }

  // Handle event choice
  const handleEventChoice = (eventId, choice) => {
    setFormData({
      ...formData,
      eventChoices: {
        ...formData.eventChoices,
        [eventId]: choice,
      },
    })
  }

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ro-RO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  console.log("Next PD Event:", nextEvent)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-customWhite flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-lg border-2 border-customLightBlue text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-6 left-6 w-12 h-12 bg-customLightBlue rounded-full opacity-30"
              variants={floatingVariant}
              animate="animate"
            />
            <motion.div
              className="absolute top-12 right-8 w-8 h-8 bg-customLightOrange rounded-full opacity-40"
              variants={floatingVariant}
              animate="animate"
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-8 left-12 w-6 h-6 bg-customOrange rounded-full opacity-35"
              variants={floatingVariant}
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute bottom-6 right-6 w-10 h-10 bg-customLightBlue rounded-full opacity-25"
              variants={floatingVariant}
              animate="animate"
              transition={{ delay: 1.5 }}
            />

            {/* Main loading content */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Animated icons */}
              <div className="flex justify-center items-center mb-8 space-x-4">
                <motion.div
                  className="w-16 h-16 bg-customBlue rounded-full flex items-center justify-center"
                  variants={pulseVariant}
                  animate="animate"
                >
                  <BookOpen size={32} className="text-white" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-customOrange rounded-full flex items-center justify-center"
                  variants={pulseVariant}
                  animate="animate"
                  transition={{ delay: 0.3 }}
                >
                  <Heart size={20} className="text-white" />
                </motion.div>
                <motion.div
                  className="w-14 h-14 bg-customBlue rounded-full flex items-center justify-center"
                  variants={pulseVariant}
                  animate="animate"
                  transition={{ delay: 0.6 }}
                >
                  <Star size={24} className="text-white" />
                </motion.div>
              </div>

              {/* Loading spinner */}
              <motion.div
                className="w-20 h-20 border-4 border-customLightBlue border-t-customBlue rounded-full mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Loading text */}
              <motion.h1
                className="text-3xl font-bangers text-customBlack mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Se încarcă programele Learnity...
              </motion.h1>

              <motion.p
                className="text-customBlack/70 font-arima text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Căutăm cele mai noi și interesante programe pentru tine!
              </motion.p>

              {/* Loading progress dots */}
              <div className="flex justify-center space-x-2 mb-8">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-customBlue rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Fun loading messages */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.p
                  className="text-customOrange font-arima text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ✨ Pregătim experiențe de neuitat...
                </motion.p>
                <motion.p
                  className="text-customBlue font-arima text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  🚀 Conectăm cu oportunități noi...
                </motion.p>
                <motion.p
                  className="text-customOrange font-arima text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                >
                  💫 Construim viitorul tău...
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Show no event available message
  if (!nextEvent) {
    return (
      <div className="min-h-screen bg-customWhite p-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-customLightBlue text-center relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 bg-customLightBlue rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AlertCircle size={48} className="text-customBlue" />
            </motion.div>

            <motion.h1
              className="text-3xl font-bangers text-customBlack mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nu există un program Porți Deschise disponibil
            </motion.h1>

            <motion.p
              className="text-customBlack/70 font-arima text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              În acest moment nu avem niciun program Porți Deschise activ. Te rugăm să revii mai târziu sau să explorezi
              alte oportunități disponibile pe site-ul nostru.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={handleGoHome}
                className="bg-customBlue text-white px-8 py-4 rounded-2xl font-bangers text-xl hover:bg-customBlue/90 transition-all duration-300 flex items-center mx-auto shadow-lg"
                variants={popVariant}
                whileHover="hover"
                whileTap="tap"
              >
                <Home className="mr-3" size={20} />
                Înapoi la Pagina Principală
              </motion.button>

              <motion.p
                className="text-customBlack/50 font-arima text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Sau poți să ne urmărești pe rețelele sociale pentru a fi la curent cu următoarele evenimente!
              </motion.p>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-customLightOrange rounded-full opacity-20"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-customLightBlue rounded-full opacity-30"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-customOrange rounded-full opacity-25"></div>
            <div className="absolute bottom-4 right-6 w-10 h-10 bg-customLightBlue rounded-full opacity-15"></div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="min-h-screen bg-customWhite p-4 md:pt-40">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bangers text-customBlack text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Înscrie-te la {nextEvent?.name || "Eveniment"}
        </motion.h1>

        {/* PD Event Information Section */}
        {nextEvent && (
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-customOrange mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PD Event Image */}
              <div className="lg:order-1">
                <img
                  src={convertGsUrlToHttps(nextEvent.photoPath) || "/placeholder.svg?height=300&width=400&text=Event+Photo"}
                  alt={nextEvent.name}
                  className="w-full h-64 lg:h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* PD Event Details */}
              <div className="lg:order-2">
                <h2 className="text-3xl font-bangers text-customBlack mb-4">{nextEvent.name}</h2>
                <p className="text-customBlack/80 font-arima text-lg mb-6 leading-relaxed">{nextEvent.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center text-customOrange font-arima">
                    <Calendar size={20} className="mr-3" />
                    <div>
                      <span className="font-medium">Data începerii: </span>
                      {formatDate(nextEvent.startDate)}
                    </div>
                  </div>

                  <div className="flex items-center text-customOrange font-arima">
                    <Clock size={20} className="mr-3" />
                    <div>
                      <span className="font-medium">Data încheierii: </span>
                      {formatDate(nextEvent.endDate)}
                    </div>
                  </div>

                  <div className="flex items-center text-customOrange font-arima">
                    <MapPin size={20} className="mr-3" />
                    <div>
                      <span className="font-medium">Locația: </span>
                      {nextEvent.place}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-customLightOrange/30 rounded-xl border border-customLightOrange">
                  <p className="text-customBlack font-arima text-sm">
                    <strong>Durată:</strong>{" "}
                    {Math.ceil((new Date(nextEvent.endDate) - new Date(nextEvent.startDate)) / (1000 * 60 * 60 * 24))}{" "}
                    zile
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-customLightBlue"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bangers text-customBlack mb-6 flex items-center">
              <User className="mr-3 text-customBlue" />
              Informații Personale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div variants={errors.name ? shakeVariant : {}} animate={errors.name ? "shake" : ""}>
                <label className="block text-customBlack font-arima font-medium mb-2">Nume complet *</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 font-arima ${
                    errors.name ? "border-red-400 bg-red-50" : "border-customLightBlue focus:border-customBlue"
                  } focus:outline-none focus:ring-2 focus:ring-customBlue/20`}
                  placeholder="Numele și prenumele tău..."
                  variants={bounceVariant}
                  whileFocus="focus"
                  initial="blur"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 font-arima">{errors.name}</p>}
              </motion.div>

              {/* Phone Number */}
              <motion.div
                  variants={errors.phoneNumber ? shakeVariant : {}}
                  animate={errors.phoneNumber ? "shake" : ""}
                >
                <label className="block text-customBlack font-arima font-medium mb-2 flex items-center">
                  <Phone className="mr-2 text-customBlue" size={16} />
                  Număr de telefon *
                </label>
                <motion.input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 font-arima ${
                    errors.phoneNumber ? "border-red-400 bg-red-50" : "border-customLightBlue focus:border-customBlue"
                  } focus:outline-none focus:ring-2 focus:ring-customBlue/20`}
                  placeholder="0712 345 678"
                  variants={bounceVariant}
                  whileFocus="focus"
                  initial="blur"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1 font-arima">{errors.phoneNumber}</p>}
              </motion.div>

              {/* School */}
              <motion.div variants={errors.school ? shakeVariant : {}} animate={errors.school ? "shake" : ""}>
                <label className="block text-customBlack font-arima font-medium mb-2 flex items-center">
                  <School className="mr-2 text-customBlue" size={16} />
                  Școala *
                </label>
                <motion.input
                  type="text"
                  value={formData.school}
                  onChange={(e) => updateFormData("school", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 font-arima ${
                    errors.school ? "border-red-400 bg-red-50" : "border-customLightBlue focus:border-customBlue"
                  } focus:outline-none focus:ring-2 focus:ring-customBlue/20`}
                  placeholder="Numele liceului tău..."
                  variants={bounceVariant}
                  whileFocus="focus"
                  initial="blur"
                />
                {errors.school && <p className="text-red-500 text-sm mt-1 font-arima">{errors.school}</p>}
              </motion.div>

              {/* Grade */}
              <motion.div variants={errors.grade ? shakeVariant : {}} animate={errors.grade ? "shake" : ""}>
                <label className="block text-customBlack font-arima font-medium mb-2 flex items-center">
                  <GraduationCap className="mr-2 text-customBlue" size={16} />
                  Clasa *
                </label>
                <motion.select
                  value={formData.grade}
                  onChange={(e) => updateFormData("grade", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 font-arima ${
                    errors.grade ? "border-red-400 bg-red-50" : "border-customLightBlue focus:border-customBlue"
                  } focus:outline-none focus:ring-2 focus:ring-customBlue/20`}
                  variants={bounceVariant}
                  whileFocus="focus"
                  initial="blur"
                >
                  <option value="">Selectează clasa...</option>
                  <option value="9">Clasa a IX-a</option>
                  <option value="10">Clasa a X-a</option>
                  <option value="11">Clasa a XI-a</option>
                  <option value="12">Clasa a XII-a</option>
                </motion.select>
                {errors.grade && <p className="text-red-500 text-sm mt-1 font-arima">{errors.grade}</p>}
              </motion.div>

              {/* How Did You Find Out */}
              <motion.div className="md:col-span-2">
                <label className="block text-customBlack font-arima font-medium mb-2 flex items-center">
                  <Search className="mr-2 text-customBlue" size={16} />
                  Cum ai aflat despre acest eveniment?
                </label>
                <motion.select
                  value={formData.howDidYouFindOut}
                  onChange={(e) => updateFormData("howDidYouFindOut", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-customLightBlue focus:border-customBlue focus:outline-none focus:ring-2 focus:ring-customBlue/20 transition-all duration-300 font-arima"
                  variants={bounceVariant}
                  whileFocus="focus"
                  initial="blur"
                >
                  <option value="">Selectează o opțiune...</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="website">Site-ul Learnity</option>
                  <option value="friends">De la prieteni</option>
                  <option value="school">De la școală</option>
                  <option value="parents">De la părinți</option>
                  <option value="teachers">De la profesori</option>
                  <option value="previous-events">Am participat la alte evenimente Learnity</option>
                  <option value="google">Căutare Google</option>
                  <option value="flyers">Flyere/Afișe</option>
                  <option value="other">Altceva</option>
                </motion.select>
              </motion.div>
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-customLightOrange"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bangers text-customBlack mb-6 flex items-center">
              <Calendar className="mr-3 text-customOrange" />
              Evenimente din Cadrul Programului
            </h2>

            <p className="text-customBlack/70 font-arima mb-6">
              Selectează evenimentele la care dorești să participi în cadrul programului {nextEvent?.name}:
            </p>

            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <motion.div
                  className="w-8 h-8 border-4 border-customOrange border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
            ) : (
              <div className="space-y-6">
                {relatedEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-customLightOrange/20 rounded-2xl p-6 border border-customLightOrange"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Event Image */}
                      <div className="lg:col-span-1">
                        <img
                          src={event.photoPath || "/placeholder.svg?height=200&width=300&text=Event+Photo"}
                          alt={event.name}
                          className="w-full h-48 lg:h-full object-cover rounded-xl shadow-md"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bangers text-customBlack mb-3">{event.name}</h3>
                        <p className="text-customBlack/70 font-arima mb-4 leading-relaxed">{event.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-customOrange font-arima">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center text-customOrange font-arima">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{event.place}</span>
                          </div>
                          <div className="flex items-center text-customOrange font-arima md:col-span-2">
                            <User size={16} className="mr-2" />
                            <span className="text-sm">
                              <strong>Facilitator:</strong> {event.teacher}
                            </span>
                          </div>
                        </div>

                        {/* Event Choice */}
                        <div className="bg-white rounded-xl p-4 border border-customLightOrange">
                          <p className="text-customBlack font-arima font-medium mb-3">
                            Vrei să participi la acest eveniment?
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <motion.label
                              className={`flex items-center cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 ${
                                formData.eventChoices[event.id] === "yes"
                                  ? "bg-green-100 border-2 border-green-400"
                                  : "bg-gray-50 border-2 border-gray-200 hover:border-green-300"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <input
                                type="radio"
                                name={`event-${event.id}`}
                                value="yes"
                                checked={formData.eventChoices[event.id] === "yes"}
                                onChange={() => handleEventChoice(event.id, "yes")}
                                className="sr-only"
                              />
                              <CheckCircle
                                size={20}
                                className={`mr-2 ${
                                  formData.eventChoices[event.id] === "yes" ? "text-green-600" : "text-gray-400"
                                }`}
                              />
                              <span className="font-arima font-medium text-customBlack text-sm">
                                Da, vreau să particip
                              </span>
                            </motion.label>

                            <motion.label
                              className={`flex items-center cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 ${
                                formData.eventChoices[event.id] === "no"
                                  ? "bg-red-100 border-2 border-red-400"
                                  : "bg-gray-50 border-2 border-gray-200 hover:border-red-300"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <input
                                type="radio"
                                name={`event-${event.id}`}
                                value="no"
                                checked={formData.eventChoices[event.id] === "no"}
                                onChange={() => handleEventChoice(event.id, "no")}
                                className="sr-only"
                              />
                              <XCircle
                                size={20}
                                className={`mr-2 ${
                                  formData.eventChoices[event.id] === "no" ? "text-red-600" : "text-gray-400"
                                }`}
                              />
                              <span className="font-arima font-medium text-customBlack text-sm">Nu, mulțumesc</span>
                            </motion.label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Additional Comments Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-customLightBlue"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bangers text-customBlack mb-6 flex items-center">
              <MessageSquare className="mr-3 text-customBlue" />
              Comentarii Suplimentare
            </h2>

            <div>
              <label className="block text-customBlack font-arima font-medium mb-2">Mai ai ceva să ne spui?</label>
              <motion.textarea
                value={formData.additionalComments}
                onChange={(e) => updateFormData("additionalComments", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-customLightBlue focus:border-customBlue focus:outline-none focus:ring-2 focus:ring-customBlue/20 transition-all duration-300 font-arima resize-none"
                placeholder="Poți să ne spui aici orice consideri important: întrebări, preocupări, așteptări sau orice altceva..."
                variants={bounceVariant}
                whileFocus="focus"
                initial="blur"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-customBlue text-white px-8 py-4 rounded-2xl font-bangers text-xl hover:bg-customBlue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center mx-auto shadow-lg"
              variants={popVariant}
              whileHover={!isSubmitting ? "hover" : {}}
              whileTap={!isSubmitting ? "tap" : {}}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-3" size={20} />
                  Se trimite...
                </>
              ) : (
                "Trimite Înscrierea"
              )}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>

    <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        onGoHome={handleGoHome}
        participantName={formData.name}
      />

    </>
  )
}

export default ParticipantForm
