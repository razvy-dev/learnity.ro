"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MapPin, Calendar, ArrowRight, Shield, Mountain, Users, Heart } from "lucide-react"

const DareYourself = () => {
  // Refs for parallax effects
  const parallaxRef = useRef(null)

  // Section animations with useInView
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activitiesRef, activitiesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [logisticsRef, logisticsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [registerRef, registerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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

  const zigzagPath = "M0,40 L20,60 L40,40 L60,60 L80,40 L100,60 L120,40 L140,60 L160,40 L180,60 L200,40"

  return (
    <div className="bg-customWhite overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        <div className="absolute inset-0 z-0">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-customOrange/10 via-customWhite to-customLightBlue/20 z-10"></div>

          {/* Zigzag patterns */}
          <svg
            className="absolute top-0 left-0 w-full h-16 text-customOrange/20"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
          >
            <path d={zigzagPath} fill="none" stroke="currentColor" strokeWidth="5" />
          </svg>

          <svg
            className="absolute bottom-0 left-0 w-full h-16 text-customBlue/20"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
          >
            <path d={zigzagPath} fill="none" stroke="currentColor" strokeWidth="5" />
          </svg>

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
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-20">
          <motion.div variants={itemVariants} className="text-center">
            <div className="mb-8">
              <motion.div
                className="inline-block"
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  },
                }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-customOrange">Learnity</h2>
                <p className="text-lg text-customOrange/80">EDUCATION UNPLUGGED</p>
              </motion.div>
            </div>

            {/* Title with staggered animation */}
            <div className="mb-10">
              {["D", "A", "R", "E"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-7xl md:text-8xl font-black text-customBlack mx-1"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5, type: "spring", stiffness: 120 }}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="inline-block text-5xl md:text-6xl font-black text-customBlue mt-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                YOURSELF
              </motion.span>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border-b-4 border-customOrange"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-customBlack">
                Tabăra Learnity care te scoate din zona de confort
              </h3>
              <div className="space-y-4 text-lg">
                <p className="italic text-customBlack/80">Cum ar fi să înfrunți fricile care te țin pe loc?</p>
                <p className="italic text-customBlack/80">
                  Să îți cunoști limitele, dar și să înveți cum să le impui cu încredere?
                </p>
                <p className="italic text-customBlack/80">Să devii o versiune mai curajoasă, mai autentică, mai TU?</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#register"
                className="inline-block bg-customOrange text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Înscrie-te acum
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-customBlue transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-10 left-10">
          <div className="w-20 h-20">
            <div className="absolute w-4 h-20 bg-customOrange/30 rounded-full"></div>
            <div className="absolute w-20 h-4 bg-customOrange/30 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="w-20 h-20">
            <div className="absolute w-4 h-20 bg-customBlue/30 rounded-full"></div>
            <div className="absolute w-20 h-4 bg-customBlue/30 rounded-full"></div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 relative overflow-hidden"
      >
        {/* Diagonal background */}
        <div className="absolute inset-0 bg-gradient-to-br from-customLightBlue/30 to-white -skew-y-3 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full text-customOrange/20">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="10 5" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full text-customBlue/20">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="10 5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="relative">
                <div className="absolute -right-6 -top-6 w-12 h-12 border-t-4 border-r-4 border-customOrange/40 rounded-tr-lg"></div>
                <div className="absolute -left-6 -bottom-6 w-12 h-12 border-b-4 border-l-4 border-customBlue/40 rounded-bl-lg"></div>

                <h2 className="text-4xl font-black mb-6 tracking-tighter relative text-customBlack text-right">
                  <span className="relative">
                    <span className="absolute -right-3 top-0 h-full w-1 bg-customOrange"></span>
                    DESPRE <br />
                    <span className="text-customOrange">DARE YOURSELF</span>
                  </span>
                </h2>

                {/* Image placeholder */}
                <div className="relative mt-8 rounded-lg overflow-hidden shadow-lg transform rotate-2">
                  <div className="aspect-video bg-customLightOrange/30 flex items-center justify-center">
                    <p className="text-customOrange font-medium">Imagine tabără (va fi adăugată)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="bg-white rounded-xl p-8 shadow-lg relative border-l-4 border-customBlue">
                <p className="text-lg mb-6 text-customBlack leading-relaxed">
                  <span className="font-bold text-customOrange">Dare Yourself</span> este o tabără de dezvoltare
                  personală pentru liceeni care își doresc să iasă din zona de confort într-un cadru sigur și
                  sprijinitor.
                </p>

                <p className="text-lg mb-6 text-customBlack leading-relaxed">
                  Timp de o săptămână, participanții vor explora, prin activități intense și provocatoare, ce înseamnă
                  curajul, autenticitatea și asumarea propriei identități.
                </p>

                <p className="text-lg text-customBlack leading-relaxed">
                  Scopul este să își depășească fricile, să învețe să-și asculte vocea interioară și să pună limite
                  sănătoase în relațiile cu ceilalți.
                </p>

                {/* Video placeholder */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video bg-customLightBlue/20 flex items-center justify-center">
                    <p className="text-customBlue font-medium">Video tabără (va fi adăugat)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        id="activities"
        ref={activitiesRef}
        initial="hidden"
        animate={activitiesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-white z-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-40 h-40 border-2 border-dashed border-customBlue rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `scale(${Math.random() * 0.5 + 0.5})`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack inline-block relative">
              <span className="relative z-10">CE SE ÎNTÂMPLĂ ÎN</span>
              <br />
              <span className="text-customOrange relative z-10">DARE YOURSELF?</span>
              <svg
                className="absolute -bottom-4 left-0 w-full h-4 text-customBlue/30"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="5" />
              </svg>
            </h2>

            <p className="text-lg max-w-3xl mx-auto text-customBlack/80 mt-8">
              Întregul proces este ghidat de o echipă de psihologi care oferă susținere empatică și structurată, astfel
              încât fiecare participant să își poată duce procesul în propriul ritm, cu autenticitate și respect față de
              sine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Activity 1 */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-customOrange/20 rounded-xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border-t-4 border-customOrange z-10">
                <div className="w-16 h-16 bg-customOrange/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-customOrange" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">
                  Ateliere de autocunoaștere și explorare emoțională
                </h3>

                <p className="text-customBlack/80">
                  Descoperă-ți valorile, convingerile și emoțiile prin exerciții ghidate de specialiști în psihologie.
                  Învață să te înțelegi mai bine și să-ți accepți toate părțile.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-customOrange/10 rounded-tl-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Activity 2 */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-customBlue/20 rounded-xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border-t-4 border-customBlue z-10">
                <div className="w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-customBlue" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">
                  Provocări individuale și de grup care cer curaj și reflecție
                </h3>

                <p className="text-customBlack/80">
                  Participă la activități care te scot din zona de confort într-un mediu sigur. Depășește-ți limitele și
                  descoperă resurse interioare de care nu știai că dispui.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-customBlue/10 rounded-tl-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Activity 3 */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-customBlue/20 rounded-xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border-t-4 border-customBlue z-10">
                <div className="w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center mb-4">
                  <Mountain className="w-8 h-8 text-customBlue" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">
                  Activități în natură care aduc prezență, claritate și încredere
                </h3>

                <p className="text-customBlack/80">
                  Conectează-te cu natura prin drumeții, exerciții de mindfulness în aer liber și activități care îți
                  stimulează toate simțurile și te ajută să fii prezent în momentul actual.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-customBlue/10 rounded-tl-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Activity 4 */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-customOrange/20 rounded-xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border-t-4 border-customOrange z-10">
                <div className="w-16 h-16 bg-customOrange/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-customOrange" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">
                  Discuții de seară și spații sigure de împărtășire
                </h3>

                <p className="text-customBlack/80">
                  Participă la sesiuni de reflecție și împărtășire în care poți exprima liber gândurile și emoțiile
                  într-un spațiu sigur, fără judecată, cu susținerea grupului și a facilitatorilor.
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-customOrange/10 rounded-tl-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Logistics Section */}
      <motion.section
        id="logistics"
        ref={logisticsRef}
        initial="hidden"
        animate={logisticsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-customLightBlue/30 via-white to-customLightOrange/30 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-8">
          <svg className="w-full h-full text-customOrange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0,0 C25,10 75,10 100,0 L100,10 L0,10 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-8">
          <svg className="w-full h-full text-customBlue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0,10 C25,0 75,0 100,10 L100,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack inline-block relative">
              <span className="relative z-10">DETALII</span>
              <br />
              <span className="text-customOrange relative z-10">LOGISTICE</span>
              <motion.div
                className="absolute -inset-4 border-2 border-dashed border-customBlue/30 rounded-xl"
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  },
                }}
              ></motion.div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-customOrange/10 rounded-br-full"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-customOrange/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-customOrange" />
                  </div>
                  <h3 className="text-xl font-bold text-customBlack">Locația</h3>
                </div>

                <p className="text-lg font-medium text-customBlack mb-4">Predeluț, Bran</p>

                {/* Google Maps placeholder */}
                <div className="aspect-video bg-customLightOrange/20 rounded-lg flex items-center justify-center">
                  <p className="text-customOrange font-medium">Google Maps (va fi adăugat)</p>
                </div>

                <div className="mt-4 text-customBlack/80">
                  <p>
                    Tabăra se va desfășura într-o locație pitorească din Predeluț, Bran, înconjurată de natură și
                    peisaje montane.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-customBlue/10 rounded-bl-full"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-customBlue/10 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-customBlue" />
                  </div>
                  <h3 className="text-xl font-bold text-customBlack">Perioada</h3>
                </div>

                <p className="text-lg font-medium text-customBlack mb-4">14-20 iulie 2025</p>

                {/* Calendar image placeholder */}
                <div className="aspect-video bg-customLightBlue/20 rounded-lg flex items-center justify-center">
                  <p className="text-customBlue font-medium">Imagine calendar (va fi adăugată)</p>
                </div>

                <div className="mt-4 text-customBlack/80">
                  <p>Tabăra durează 7 zile pline de activități, provocări și experiențe transformatoare.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-lg border-b-4 border-customOrange">
              <h3 className="text-xl font-bold mb-4 text-customBlack">Ce trebuie să știi:</h3>
              <ul className="text-left space-y-2 text-customBlack/80">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                  <span>Tabăra este destinată liceenilor cu vârste între 14 și 18 ani</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                  <span>Cazarea și mesele sunt incluse în prețul taberei</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                  <span>Transportul până la locație nu este inclus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                  <span>Numărul de locuri este limitat la 20 de participanți</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Registration Section */}
      <motion.section
        id="register"
        ref={registerRef}
        initial="hidden"
        animate={registerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Diagonal stripes */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #05be9e, #05be9e 10px, transparent 10px, transparent 20px)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack">
              <span className="relative">
                <span className="text-customOrange">ÎNSCRIE-TE</span>
                <br />
                ACUM
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-customBlue"
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    x: ["0%", "0%", "0%", "100%"],
                    transition: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  }}
                ></motion.div>
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-xl max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-customOrange via-customBlue to-customOrange"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-customOrange/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-customBlue/20 rounded-br-3xl"></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-center text-customBlack mb-6">Formular de înscriere</h3>

              <p className="text-center text-customBlack/80 mb-8">
                Completează formularul de mai jos pentru a-ți rezerva locul în tabăra Dare Yourself. Locurile sunt
                limitate, așa că înscrie-te cât mai curând!
              </p>

              <p className="text-center font-bold text-lg text-customOrange mb-8">
                Formular de înscriere va fi adăugat aici
              </p>

              <div className="text-center">
                <button className="bg-customOrange text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Înscrie-te acum
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-customBlue transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default DareYourself
