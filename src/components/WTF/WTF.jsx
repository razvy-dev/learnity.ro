import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Instagram, Globe, Star, Sparkles, Zap, Lightbulb, Rocket, Brain, Brush, Music, Book } from "lucide-react"
import p1 from './assets/1.jpeg';
import p2 from './assets/2.jpeg';
import p3 from './assets/3.jpeg';
import p5 from './assets/5.jpeg';
import p6 from './assets/6.jpeg';
import p7 from './assets/7.jpeg';
import WTForm from "./WTForm"

// invitați

import alexNecsulescu from './assets/alex-necsulescu.jpg';
import alexandraNita from './assets/alexandra-nita.jpg';
import alexandraStamate from './assets/alexandra-stamate.jpg';
import ilinaSchileru from './assets/ilina-schileru.jpg';
import ioanaCernat from './assets/ioana-cernat.jpg';
import MarlenaPavel from './assets/marlena-pavel.jpg';
import mihaiCepoi from './assets/mihai-cepoi.jpg';
import rominaIonescu from './assets/romina-ionescu.jpg';
import slivia from './assets/silvia-schmidt.jpg';
import stefaniaMihalache from './assets/stefania-mihalache.jpg';
import traianBrumă from './assets/traian-bruma.jpg';
import mihaiRadu from './assets/mihai-radu.jpg';
import vladBalosin from './assets/vlad-balosin.jpeg';
import mamaAnei from './assets/mama_anei.jpeg';
import cosmin from './assets/cosmin.jpeg';


const WhatTheFuture = () => {
  // Animation controls
  const controls = useAnimation()

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

  const [whyRef, whyInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [subjectsRef, subjectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [scheduleRef, scheduleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [speakersRef, speakersInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [aboutUsRef, aboutUsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        const elements = parallaxRef.current.querySelectorAll(".parallax-item")

        elements.forEach((el, index) => {
          const speed = index % 2 === 0 ? 0.1 : -0.1
          const yPos = scrollY * speed
          const htmlEl = el
          htmlEl.style.transform = `translateY(${yPos}px)`
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  const subjects = [
    { name: "Business", color: "bg-customBlue", icon: <Rocket size={24} /> },
    { name: "Medicină", color: "bg-customOrange", icon: <Brain size={24} /> },
    { name: "Relații internaționale", color: "bg-customBlue", icon: <Globe size={24} /> },
    { name: "Arhitectură", color: "bg-customOrange", icon: <Lightbulb size={24} /> },
    { name: "Criminalistică", color: "bg-customBlue", icon: <Zap size={24} /> },
    { name: "Jurnalism", color: "bg-customOrange", icon: <Star size={24} /> },
    { name: "STEM", color: "bg-customBlue", icon: <Sparkles size={24} /> },
    { name: "IT", color: "bg-customOrange", icon: <Rocket size={24} /> },
    { name: "Orientare în carieră", color: "bg-customBlue", icon: <Brain size={24} /> },
    { name: "Psihologie", color: "bg-customOrange", icon: <Globe size={24} /> },
    { name: "Marketing", color: "bg-customBlue", icon: <Lightbulb size={24} /> },
    { name: "Design interior", color: "bg-customOrange", icon: <Zap size={24} /> },
    { name: "Artă", color: "bg-customBlue", icon: <Brush size={24} /> },
    { name: "Psihiatrie", color: "bg-customOrange", icon: <Sparkles size={24} /> },
    { name: "Film și teatru", color: "bg-customBlue", icon: <Music size={24} /> },
    { name: "Facultăți din afară", color: "bg-customOrange", icon: <Book size={24} /> },
  ]

  const speakers = [
    { name: "Vlad Baloșin", role: "Arhitect", color: "bg-customBlue", image: vladBalosin },
    { name: "Alexandra Stamate", role: "Designer de interior", color: "bg-customOrange", image: alexandraStamate },
    { name: "Mihai Radu", role: "Jurnalist și scriitor", color: "bg-customBlue", image: mihaiRadu },
    { name: "Marlena Pavel", role: "Ofițer de poliție", color: "bg-customOrange", image: MarlenaPavel },
    { name: "Cosmin Muscălescu", role: "Creative Director", color: "bg-customBlue", image: cosmin },
    { name: "Corina Predescu", role: "Medic", color: "bg-customOrange", image: mamaAnei },
    { name: "Alex Necșulescu", role: "Psiholog", color: "bg-customBlue", image: alexNecsulescu },
    { name: "Silva Helena Schmidt", role: "Actriță", color: "bg-customOrange", image: slivia },
    { name: "Stefania Mihalache", role: "Scriitoare", color: "bg-customBlue", image: stefaniaMihalache },
    { name: "Ilina Schileru", role: "Artist plastic și curator", color: "bg-customOrange", image: ilinaSchileru },
    { name: "Ioana Cernat", role: "Consultant vocațional", color: "bg-customBlue", image: ioanaCernat },
    { name: "Alexandra Niță", role: "Co-fondatoare ROSPIN", color: "bg-customOrange", image: alexandraNita },
    { name: "Mihai Cepoi", role: "Antreprenor", color: "bg-customBlue", image: mihaiCepoi },
    { name: "Romina Ionescu", role: "Psihiatru", color: "bg-customOrange", image: rominaIonescu },
    { name: "Traian Brumă", role: "Fondator Universitatea Alternativă", color: "bg-customBlue", image: traianBrumă },
  ]

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
          <div className="absolute inset-0 bg-gradient-to-b from-customLightBlue/30 to-customWhite z-10"></div>

          {/* New decorative elements */}
          <div className="absolute top-0 left-0 w-full h-16 border-b-4 border-dashed border-customBlue/20"></div>
          <div className="absolute top-20 right-0 h-full w-16 border-l-4 border-dashed border-customOrange/20"></div>

          {/* Paint splatter effect */}
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-customLightBlue/20"
            style={{ borderRadius: "60% 40% 50% 30% / 40% 50% 60% 50%" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-customLightOrange/20"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          ></div>

          {/* Confetti-like elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-6 ${i % 2 === 0 ? "bg-customBlue/20" : "bg-customOrange/20"}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 180}deg)`,
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
                  y: [0, -10, 0],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-customBlue">Learnity</h2>
                <p className="text-lg text-customBlue/80">EDUCATION UNPLUGGED</p>
              </motion.div>
            </div>

            {/* Decorative frame around title */}
            <div className="relative inline-block mx-auto mb-6">
              <div className="absolute -inset-6 border-2 border-dotted border-customOrange/50 rounded-xl"></div>
              <div className="absolute -inset-3 border-2 border-customBlue/30 rounded-lg"></div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tighter relative text-customBlack">
                <span className="relative inline-block">
                  <span className="relative z-10">WTFUTURE</span>
                  <motion.span
                    className="absolute inset-0 z-0 text-customBlue opacity-70"
                    animate={{
                      x: [0, 4, 0, -4, 0],
                      y: [0, -4, 0, 4, 0],
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 0.5,
                        ease: "linear",
                      },
                    }}
                  >
                    WTFUTURE
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-customLightBlue/30 rounded-full blur-md"></div>
              <p className="text-xl md:text-2xl font-medium mb-4 relative text-customBlack">NOD MAKERSPACE</p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-1 bg-customBlue rounded-full mx-2"></div>
                <p className="text-2xl md:text-3xl font-bold text-customBlack">7-8 IUNIE</p>
                <div className="w-12 h-1 bg-customOrange rounded-full mx-2"></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#about"
                className="inline-block bg-customBlue text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Descoperă mai mult</span>
                <span className="absolute inset-0 bg-customOrange transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner ribbons */}
        <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-8 bg-customBlue/40 origin-bottom-left rotate-45 translate-y-4"></div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-8 bg-customOrange/40 origin-bottom-right -rotate-45 translate-y-4"></div>
        </div>

        {/* Decorative sticker-like elements */}
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-customBlue font-bold text-xl">W</div>
        </div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-customOrange font-bold text-xl">T</div>
        </div>
        <div className="absolute bottom-60 left-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-customBlue font-bold text-xl">F</div>
        </div>
      </motion.section>

      {/* What is WTFuture Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 relative overflow-hidden bg-white"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 w-full h-8 bg-customLightBlue/20"></div>
        <div className="absolute top-8 left-0 w-full h-4 bg-customLightOrange/20"></div>

        {/* Decorative tape elements */}
        <div className="absolute top-20 left-10 w-32 h-8 bg-customBlue/20 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-32 h-8 bg-customOrange/20 -rotate-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -left-6 -top-6 w-12 h-12 border-t-4 border-l-4 border-customBlue/40 rounded-tl-lg"></div>
                <div className="absolute -right-6 -bottom-6 w-12 h-12 border-b-4 border-r-4 border-customOrange/40 rounded-br-lg"></div>

                <h2 className="text-5xl font-black mb-6 tracking-tighter relative text-customBlack">
                  <span className="relative">
                    <span className="absolute -left-3 top-0 h-full w-1 bg-customBlue"></span>
                    CE ESTE <br />
                    <span className="text-customBlue">WTFUTURE</span>
                  </span>
                  <motion.span
                    className="inline-block ml-4"
                    animate={{
                      rotate: [0, 15, 0, -15, 0],
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 5,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    ?
                  </motion.span>
                </h2>

                {/* Decorative illustration */}
                <div className="relative mt-8 p-6 border-2 border-customLightOrange/50 rounded-lg">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg ${
                          i % 3 === 0
                            ? "bg-customBlue/30"
                            : i % 3 === 1
                              ? "bg-customOrange/30"
                              : "bg-customLightBlue/30"
                        } flex items-center justify-center`}
                      >
                        {i === 4 && <span className="text-4xl font-bold text-customBlack">?</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="bg-customWhite rounded-xl p-8 shadow-lg relative">
                {/* Paper clip decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-10 border-t-4 border-l-4 border-r-4 border-customBlue/70 rounded-t-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-10 border-t-4 border-l-4 border-r-4 border-customOrange/70 rounded-t-lg"></div>

                <h3 className="text-2xl font-bold mb-4 flex items-center text-customBlack">
                  <span className="w-8 h-8 bg-customBlue rounded-full flex items-center justify-center text-white mr-2">
                    W
                  </span>
                  <span>What The Future</span>
                </h3>
                <p className="text-lg mb-4 pl-4 border-l-2 border-customOrange text-customBlack">
                  este un eveniment adresat adolescenților în cadrul căruia povestim alături de invitați din diferite
                  domenii de activitate.
                </p>
                <p className="text-lg mb-4 pl-4 border-l-2 border-customBlue text-customBlack">
                  Organizăm diverse discuții, panel-uri și workshop-uri despre carieră, vocație și facultate, prin care
                  dorim să oferim liceenilor o privire de ansamblu a opțiunilor pe care le au și a direcției în care vor
                  să meargă.
                </p>

                {/* Decorative tag */}
                <div className="inline-block mt-4 px-3 py-1 bg-customLightBlue/40 rounded-full text-sm font-medium text-customBlack">
                  #explorare #carieră #viitor
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-customLightOrange/20"></div>
        <div className="absolute bottom-8 left-0 w-full h-4 bg-customLightBlue/20"></div>
      </motion.section>

      {/* Why WTFuture Section */}
      <motion.section
        id="why"
        ref={whyRef}
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-customWhite to-white relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-10 left-0 w-full border-t border-dashed border-customBlue/30"></div>
        <div className="absolute top-14 left-0 w-full border-t border-dashed border-customOrange/30"></div>
        <div className="absolute bottom-10 left-0 w-full border-t border-dashed border-customBlue/30"></div>
        <div className="absolute bottom-14 left-0 w-full border-t border-dashed border-customOrange/30"></div>

        {/* Decorative sticky notes */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-customLightBlue/40 rotate-6 shadow-sm"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-customLightOrange/40 -rotate-6 shadow-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white rounded-xl p-8 shadow-lg relative">
                {/* Decorative quote marks */}
                <div className="absolute -top-6 -left-6 text-6xl text-customBlue/30 font-serif">"</div>
                <div className="absolute -bottom-6 -right-6 text-6xl text-customBlue/30 font-serif rotate-180">"</div>

                <p className="text-lg mb-4 relative text-customBlack">
                  <span className="absolute -left-4 top-0 h-full w-1 bg-customOrange"></span>
                  Ca adolescent, mai devreme sau mai târziu, vine momentul acela în care întrebările despre viitor apar,
                  iar răspunsurile se lasă așteptate.
                </p>
                <p className="text-lg mb-4 relative text-customBlack">
                  <span className="absolute -left-4 top-0 h-full w-1 bg-customBlue"></span>
                  Uneori, întrebările acestea vin cu entuziasm, alteori cu anxietate. Noi suntem aici să le reamintim că
                  au timp, că sunt bine fix unde sunt, că procesul fiecăruia este unic și că nu sunt într-o cursă.
                </p>
                <p className="text-lg relative text-customBlack">
                  <span className="absolute -left-4 top-0 h-full w-1 bg-customLightOrange"></span>
                  Cu toate acestea în minte, am creat acest eveniment menit să le vină în ajutor și să îi ghideze în
                  această perioadă de explorare, pentru a găsi răspunsurile potrivite lor.
                </p>

                {/* Decorative elements */}
                <div className="mt-6 flex justify-end">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-customBlue"></div>
                    <div className="w-3 h-3 rounded-full bg-customOrange"></div>
                    <div className="w-3 h-3 rounded-full bg-customLightBlue"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="relative inline-block">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -left-10 w-20 h-20">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-customBlue"></div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-20 h-20">
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-customOrange"></div>
                    </div>

                    <h2 className="text-5xl font-black tracking-tighter text-customBlue">
                      DE CE <br />
                      <div className="flex items-center">
                        <span className="text-customBlue">WHAT</span>
                        <div className="w-6 h-6 bg-customLightBlue/40 rounded-full ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-customOrange">THE</span>
                        <div className="w-6 h-6 bg-customLightOrange/40 rounded-full ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-customBlue">FUTURE</span>
                        <div className="w-6 h-6 bg-customLightBlue/40 rounded-full ml-2"></div>
                      </div>
                      <span className="text-4xl text-customBlack">?</span>
                    </h2>
                    <motion.div
                      className="absolute -top-8 -left-8 w-full h-full border-4 border-customBlue/30 rounded-xl z-0"
                      animate={{
                        rotate: [-2, 2, -2],
                        transition: {
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 6,
                          ease: "easeInOut",
                        },
                      }}
                    ></motion.div>
                  </div>
                </div>

                {/* Decorative washi tape */}
                <div className="absolute -bottom-4 -right-4 w-32 h-8 bg-customLightOrange/40 rotate-12"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Subjects Section */}
      <motion.section
        id="subjects"
        ref={subjectsRef}
        initial="hidden"
        animate={subjectsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-1 bg-customBlue/20"></div>
          <div className="absolute top-14 left-10 w-20 h-1 bg-customOrange/20"></div>
          <div className="absolute bottom-10 right-10 w-40 h-1 bg-customBlue/20"></div>
          <div className="absolute bottom-14 right-10 w-20 h-1 bg-customOrange/20"></div>

          <div className="absolute top-1/4 right-10 h-40 w-1 bg-customBlue/20"></div>
          <div className="absolute top-1/4 right-14 h-20 w-1 bg-customOrange/20"></div>
          <div className="absolute bottom-1/4 left-10 h-40 w-1 bg-customBlue/20"></div>
          <div className="absolute bottom-1/4 left-14 h-20 w-1 bg-customOrange/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border-2 border-dashed border-customOrange/30 rounded-xl"></div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter text-customBlack">
                SUBIECTE <br />
                <span className="text-customBlue">PE CARE LE ABORDĂM</span>
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-customBlue mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() * 6 - 3,
                  transition: { duration: 0.2 },
                }}
                className={`${subject.color} p-4 rounded-lg shadow-md transform rotate-${Math.floor(Math.random() * 6) - 3} h-32 flex flex-col items-center justify-center relative overflow-hidden`}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-bl-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/10 rounded-tr-lg"></div>

                <div className="mb-2 text-white">{subject.icon}</div>
                <p className="font-bold text-lg md:text-xl text-white text-center">{subject.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-customBlue/20 rounded-full"></div>
              <div className="w-16 h-16 bg-customOrange/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-customLightBlue/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <motion.section
        id="schedule"
        ref={scheduleRef}
        initial="hidden"
        animate={scheduleInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-white to-customWhite relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 h-full">
          {/* Horizontal stripes */}
          <div className="absolute top-20 left-0 w-full h-2 bg-customLightBlue/20"></div>
          <div className="absolute top-24 left-0 w-full h-1 bg-customLightOrange/20"></div>
          <div className="absolute bottom-20 left-0 w-full h-2 bg-customLightBlue/20"></div>
          <div className="absolute bottom-24 left-0 w-full h-1 bg-customLightOrange/20"></div>

          {/* Decorative coffee stain */}
          <div
            className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-customLightOrange/20"
            style={{ filter: "blur(8px)" }}
          ></div>

          {/* Decorative paper clips */}
          <div className="absolute bottom-1/3 left-20 w-8 h-16 border-2 border-customBlue/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              {/* Decorative clock-like elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border-4 border-customBlue/30 flex items-center justify-center">
                <div className="w-1 h-6 bg-customBlue/50 rounded-full transform origin-bottom rotate-45"></div>
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full border-4 border-customOrange/30 flex items-center justify-center">
                <div className="w-1 h-6 bg-customOrange/50 rounded-full transform origin-bottom -rotate-45"></div>
              </div>

              <h2 className="text-5xl font-black mb-6 tracking-tighter text-customBlack">
                CUM ARATĂ O ZI DE <br />
                <span className="text-customBlue">WTFUTURE</span>
                <span className="text-3xl ml-4">(IUNIE 2025)</span>
              </h2>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-t-4 border-l-4 border-customBlue/40 rounded-tl-lg"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-b-4 border-r-4 border-customOrange/40 rounded-br-lg bottom-0 right-0"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-customWhite/70 p-6 rounded-lg relative max-w-[80dvw] ">
                  {/* Day indicator */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-customBlue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-customBlue pl-8">Program ziua 1</h3>
                  <ul className="space-y-4 text-customBlack">
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">11:00-11:30: </span>
                      <span>Deschidere</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">11:30-12:30: </span>
                      <span>Workshop: Care e treaba cu cariera?</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">12:40-13:30: </span>
                      <span>
                        Sesiunea 1
                        <ul className="list-disc ml-6 mt-2">
                          <li>Criminalistică vs. Criminologie</li>
                          <li>Arhitectură vs. Design interior</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">13:30-13:40: </span>
                      <span>Pauză</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">13:40-15:00: </span>
                      <span>
                        Sesiunea 2
                        <ul className="list-disc ml-6 mt-2">
                          <li>STEM</li>
                          <li>Educație</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">15:00-16:00: </span>
                      <span>Pauză de masă</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">16:00-17:00: </span>
                      <span>
                        Sesiunea 3
                        <ul className="list-disc ml-6 mt-2">
                          <li>IT</li>
                          <li>Relații internaționale</li>
                          <li>Medicină</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">17:00-17:10: </span>
                      <span>Pauză</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customOrange">17:10-19:00: </span>
                      <span>Viața de artist</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-customWhite/70 p-6 rounded-lg relative">
                  {/* Day indicator */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-customOrange rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-customOrange pl-8">Program ziua 2</h3>
                  <ul className="space-y-4 text-customBlack">
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">11:30-12:00: </span>
                      <span>Deschidere</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">12:00-13:30: </span>
                      <span>
                        Sesiunea 1
                        <ul className="list-disc ml-6 mt-2">
                          <li>Antreprenoriat</li>
                          <li>Activism civic</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">13:30-13:40: </span>
                      <span>Pauză</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">13:40-14:55: </span>
                      <span>
                        Sesiunea 2
                        <ul className="list-disc ml-6 mt-2">
                          <li>Psihologie vs. Psihiatrie</li>
                          <li>Jurnalism</li>
                          <li>Marketing</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">14:55-16:00: </span>
                      <span>Pauză de masă</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">16:00-17:15: </span>
                      <span>
                        Prezentare: Cum ar fi să studiezi în afară?
                        <ul className="list-disc ml-6 mt-2">
                          <li>UE/UK/America</li>
                        </ul>
                      </span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">17:15-17:25: </span>
                      <span>Pauză</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">17:25-19:00: </span>
                      <span>Panel: O viață nonconformistă</span>
                    </li>
                    <li className="md:flex flex-col">
                      <span className="font-bold w-32 text-customBlue">19:00-19:10: </span>
                      <span>Încheiere</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Decorative timeline */}
              <div className="mt-8 relative h-4 bg-customWhite/70 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-customOrange rounded-full"></div>
                <div className="absolute left-0 top-0 h-full w-1/4 bg-customBlue rounded-full"></div>
                <div className="absolute left-0 top-0 h-full w-3/4 bg-customLightBlue/50 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                  <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                  <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                  <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Speakers Section */}
      <motion.section
        id="speakers"
        ref={speakersRef}
        initial="hidden"
        animate={speakersInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-customWhite relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Decorative notebook lines */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-customBlue/10" style={{ top: `${10 + i * 10}%` }}></div>
          ))}

          {/* Decorative coffee stain */}
          <div
            className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-customLightOrange/10"
            style={{ filter: "blur(10px)" }}
          ></div>

          {/* Decorative paper clip */}
          <div className="absolute top-20 left-20 w-6 h-12 border-2 border-customBlue/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center">
                <div className="w-full h-full border-4 border-customBlue/30 rounded-full"></div>
                <div className="absolute w-6 h-6 bg-customLightBlue/40 rounded-full"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center">
                <div className="w-full h-full border-4 border-customOrange/30 rounded-full"></div>
                <div className="absolute w-6 h-6 bg-customLightOrange/40 rounded-full"></div>
              </div>

              <h2 className="text-5xl font-black mb-6 tracking-tighter text-customBlack">
                INVITAȚI DIN <br />
                <span className="text-customBlue">EDIȚIILE TRECUTE</span>
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-16 h-1 bg-customBlue rounded-full"></div>
              <div className="w-4 h-4 bg-customOrange rounded-full"></div>
              <div className="w-16 h-1 bg-customLightBlue rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-md ${speaker.color} flex items-center justify-center relative`}
                >
                  {/* Decorative ring */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                  <img src={speaker.image} alt="speaker" className="h-[100%] w-[100%] object-cover" />
                </div>
                <h3 className="font-bold text-center text-customBlack">{speaker.name}</h3>
                <p className="text-sm text-customBlack/70 text-center">{speaker.role}</p>

                {/* Decorative tag */}
                <div className={`mt-2 px-3 py-1 ${speaker.color}/20 rounded-full text-xs text-customBlack`}>
                  #{speaker.role.toLowerCase().replace(/\s+/g, "")}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-customBlue via-customOrange to-customLightBlue rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-customOrange"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-customWhite relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Decorative tape strips */}
          <div className="absolute top-10 left-1/4 w-32 h-6 bg-customLightBlue/30 rotate-12"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-6 bg-customLightOrange/30 -rotate-12"></div>

          {/* Decorative pins */}
          <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-customBlue/40 shadow-sm"></div>
          <div className="absolute bottom-1/3 left-10 w-6 h-6 rounded-full bg-customOrange/40 shadow-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-dashed border-customOrange/30 rounded-lg"></div>

              <h2 className="text-5xl font-black mb-6 tracking-tighter text-customBlack">
                POZE DIN <br />
                <span className="text-customBlue">ANII TRECUȚI</span>
              </h2>
            </div>

            {/* Camera icon */}
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-8 bg-customBlue rounded-lg relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-customBlue rounded-t-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 md:grid-cols-3 gap-4">
              {[p1, p2, p3, p5, p6, p7].map((pic, index) => (
                <div
                  key={index}
                  className={`aspect-video ${
                    index % 3 === 0
                      ? "bg-gradient-to-br from-customBlue/20 to-customLightBlue/20"
                      : index % 3 === 1
                        ? "bg-gradient-to-br from-customOrange/20 to-customLightOrange/20"
                        : "bg-gradient-to-br from-customLightBlue/20 to-customLightOrange/20"
                  } rounded-lg overflow-hidden shadow-md flex items-center justify-center relative`}
                >
                  {/* Decorative frame */}
                  <div className="absolute inset-0 border border-white/20 m-2 rounded-lg pointer-events-none"></div>
                  <img src={pic} alt="pic" />
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <span className="text-4xl font-bold text-customBlue/50">#{index + 1}</span>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-8 -left-8 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                      <div className="absolute -top-8 -right-8 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                      <div className="absolute -bottom-8 -left-8 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                      <div className="absolute -bottom-8 -right-8 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Decorative film strip */}
            <div className="mt-8 h-8 bg-customBlue/10 rounded-lg flex items-center justify-between px-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-4 bg-customOrange/30 rounded-sm"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about-us"
        ref={aboutUsRef}
        initial="hidden"
        animate={aboutUsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-customWhite relative overflow-hidden"
      >
        {/* New decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Decorative horizontal stripes */}
          <div className="absolute top-20 left-0 w-full h-2 bg-customLightBlue/10"></div>
          <div className="absolute top-24 left-0 w-full h-1 bg-customLightOrange/10"></div>
          <div className="absolute bottom-20 left-0 w-full h-2 bg-customLightBlue/10"></div>
          <div className="absolute bottom-24 left-0 w-full h-1 bg-customLightOrange/10"></div>

          {/* Decorative coffee stains */}
          <div
            className="absolute top-40 left-20 w-20 h-20 rounded-full bg-customLightOrange/10"
            style={{ filter: "blur(8px)" }}
          ></div>
          <div
            className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-customLightBlue/10"
            style={{ filter: "blur(6px)" }}
          ></div>

          {/* Decorative paper clips */}
          <div className="absolute top-1/3 right-20 w-6 h-12 border-2 border-customBlue/20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-20 w-6 h-12 border-2 border-customOrange/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12">
                <div className="w-full h-full border-4 border-customBlue/30 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12">
                <div className="w-full h-full border-4 border-customOrange/30 rounded-full"></div>
              </div>

              <h2 className="text-5xl font-black mb-6 tracking-tighter text-customBlack">
                CINE SUNTEM <br />
                <span className="text-customBlue">NOI</span>
              </h2>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-t-4 border-l-4 border-customBlue rounded-tl-lg"></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-t-4 border-r-4 border-customOrange rounded-tr-lg right-0"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-b-4 border-l-4 border-customLightBlue rounded-bl-lg bottom-0"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute w-8 h-8 border-b-4 border-r-4 border-customLightOrange rounded-br-lg bottom-0 right-0"></div>
              </div>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div className="text-6xl font-bold text-customBlue animate-glitch">Learnity</motion.div>
                  <motion.div className="absolute inset-0 text-6xl font-bold text-customOrange animate-noise opacity-70">
                    Learnity
                  </motion.div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-6 relative text-customBlack">
                  {/* Decorative quote marks */}
                  <span className="absolute -top-4 -left-4 text-4xl text-customBlue/30 font-serif">"</span>
                  <span className="absolute -bottom-4 -right-4 text-4xl text-customBlue/30 font-serif rotate-180">
                    "
                  </span>
                  Learnity este o comunitate democratică de învățare alternativă pentru adolescenți, locul în care
                  aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care
                  trăiesc.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">

                  <div className="md:flex flex-col justify-around gap-6">
                    <motion.a
                      href="https://instagram.com/learnityro"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 md:my-0 my-6 text-customBlack hover:text-customBlue transition-colors relative"
                    >
                      {/* Decorative highlight */}
                      <div className="absolute inset-0 bg-customLightBlue/30 rounded-full -z-10"></div>
                      <Instagram size={24} />
                      <span>@learnityro</span>
                    </motion.a>

                    <motion.a
                      href="https://www.instagram.com/whatthefuture.learnity/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center md:my-0 my-6 gap-2 text-customBlack hover:text-customOrange transition-colors relative"
                    >
                      {/* Decorative highlight */}
                      <div className="absolute inset-0 bg-customLightOrange/30 rounded-full -z-10"></div>
                      <Instagram size={24} />
                      <span>@whatthefuture.learnity</span>
                    </motion.a>
                      <motion.a
                      href="https://learnity.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center md:my-0 my-6 gap-2 text-customBlack hover:text-customBlue transition-colors relative"
                    >
                      {/* Decorative highlight */}
                      <div className="absolute inset-0 bg-customLightBlue/30 rounded-full -z-10"></div>
                      <Globe size={24} />
                      <span>learnity.ro</span>
                    </motion.a>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-4">
                    <div className="w-4 h-4 bg-customBlue rounded-full"></div>
                    <div className="w-4 h-4 bg-customOrange rounded-full"></div>
                    <div className="w-4 h-4 bg-customLightBlue rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-8 bg-customLightOrange/10"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-customBlue/10 rounded-full transform translate-y-1/2"></div>
          <div className="absolute bottom-0 left-2/4 w-24 h-24 bg-customOrange/10 rounded-full transform translate-y-1/2"></div>
          <div className="absolute bottom-0 left-3/4 w-16 h-16 bg-customLightBlue/10 rounded-full transform translate-y-1/2"></div>
        </div>
      </motion.section>
      <WTForm />
    </div>
  )
}

export default WhatTheFuture
