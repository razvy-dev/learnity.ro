import { useRef } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Heart, Globe, MessageCircle } from "lucide-react"
import changemakers from './assets/changemakers.jpg';
import changemakersCalendar from './assets/changemakers-calendar.png'
import andrei from './assets/andrei.jpeg';
import andreea1 from './assets/andreea1.jpeg';
import andreea2 from './assets/andreea2.jpeg';
import changemakers2 from './assets/changemakers2.jpg';

const ChangemakersCamp = () => {
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

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [trainersRef, trainersInView] = useInView({
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

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-16 border-b-4 border-dotted border-customBlue/20"></div>

          {/* Organic shapes */}
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-customLightBlue/20"
            style={{ borderRadius: "70% 30% 50% 50% / 30% 50% 70% 60%" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-customLightOrange/20"
            style={{ borderRadius: "40% 60% 30% 70% / 60% 30% 70% 40%" }}
          ></div>

          {/* Confetti-like elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-3 h-3 ${i % 2 === 0 ? "bg-customBlue/20" : "bg-customOrange/20"} rotate-45`}
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

              <h1 className="text-4xl md:text-7xl font-black tracking-tighter relative text-customBlack">
                <span className="relative inline-block">
                  <span className="relative z-10">CHANGEMAKERS</span>
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
                    CHANGEMAKERS
                  </motion.span>
                </span>
                <br />
                <span className="text-customOrange">CAMP</span>
              </h1>
            </div>

            <motion.div variants={itemVariants} className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-customLightBlue/30 rounded-xl blur-md"></div>
              <p className="text-xl md:text-2xl font-medium mb-6 relative text-customBlack">
                Ești gata să devii un changemaker?
              </p>
              <p className="text-lg relative text-customBlack/80 mb-8">
                Vara asta, Learnity te invită într-o tabără creată special pentru liceeni care vor să descopere cine
                sunt, să se conecteze autentic cu ceilalți și să își găsească vocea în lume.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#register"
                className="inline-block bg-customBlue text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Înscrie-te acum</span>
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

        {/* Decorative elements */}
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-customBlue font-bold text-xl">C</div>
        </div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-customOrange font-bold text-xl">M</div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 relative overflow-hidden bg-white"
      >
        {/* Decorative elements */}
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

                <h2 className="text-4xl font-black mb-6 tracking-tighter relative text-customBlack">
                  <span className="relative">
                    <span className="absolute -left-3 top-0 h-full w-1 bg-customBlue"></span>
                    DESPRE <br />
                    <span className="text-customBlue">CHANGEMAKERS CAMP</span>
                  </span>
                </h2>

                {/* Image placeholder */}
                <div className="relative mt-8 rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video bg-customLightBlue/30 flex items-center justify-center">
                    <img src={changemakers} alt="changemakers camp" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="bg-customWhite rounded-xl p-8 shadow-lg relative">
                {/* Paper clip decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-10 border-t-4 border-l-4 border-r-4 border-customBlue/70 rounded-t-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-10 border-t-4 border-l-4 border-r-4 border-customOrange/70 rounded-t-lg"></div>

                <p className="text-lg mb-6 text-customBlack leading-relaxed">
                  Changemaker Camp este locul unde dezvoltăm abilități esențiale pentru viață – ceea ce noi numim
                  <span className="font-bold text-customBlue"> dibăcii</span>.
                </p>

                <p className="text-lg mb-6 text-customBlack leading-relaxed">
                  Ele ne ajută să fim mai aproape de misiunea noastră: să formăm tineri care pot aduce schimbare atât în
                  interiorul lor, cât și în mediile și comunitățile din care fac parte și ulterior în lume, cu încredere
                  și curaj.
                </p>

                <p className="text-lg text-customBlack leading-relaxed">
                  Vom explora toate aceste direcții prin ateliere, jocuri, reflecții și provocări creative.
                  <span className="font-bold text-customOrange"> Distracția e din oficiu!</span>
                </p>

                {/* Decorative tag */}
                <div className="inline-block mt-6 px-3 py-1 bg-customLightBlue/40 rounded-full text-sm font-medium text-customBlack">
                  #changemakers #tabără #dezvoltare
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-customLightOrange/20"></div>
        <div className="absolute bottom-8 left-0 w-full h-4 bg-customLightBlue/20"></div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-customWhite to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-full border-t border-dashed border-customBlue/30"></div>
        <div className="absolute top-14 left-0 w-full border-t border-dashed border-customOrange/30"></div>
        <div className="absolute bottom-10 left-0 w-full border-t border-dashed border-customBlue/30"></div>
        <div className="absolute bottom-14 left-0 w-full border-t border-dashed border-customOrange/30"></div>

        {/* Decorative sticky notes */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-customLightBlue/40 rotate-6 shadow-sm"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-customLightOrange/40 -rotate-6 shadow-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border-2 border-dashed border-customOrange/30 rounded-xl"></div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack">
                CE SUNT <br />
                <span className="text-customBlue">dibăciILE?</span>
              </h2>
            </div>

            <p className="text-lg max-w-3xl mx-auto text-customBlack/80 mt-6">
              Fiecare atelier, fiecare discuție și fiecare moment petrecut împreună în tabără este construit în jurul
              acestor abilități, grupate în trei direcții:
            </p>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-customBlue mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Skill Category 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-customLightBlue/20 rounded-bl-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-customBlue" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">Eu cu mine</h3>

                <ul className="space-y-2 text-customBlack/80">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Autocunoaștere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Viziune despre sine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Încredere în sine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Iubire de sine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Autonomie în învățare</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Reziliență</span>
                  </li>
                </ul>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-customBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>

            {/* Skill Category 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-customLightOrange/20 rounded-bl-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-customOrange/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-customOrange" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">Eu cu ceilalți</h3>

                <ul className="space-y-2 text-customBlack/80">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Colaborare</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Comunicare</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Empatie</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Ascultare activă</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Lucru în echipă</span>
                  </li>
                </ul>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-customOrange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>

            {/* Skill Category 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-customLightBlue/20 rounded-bl-3xl"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-customBlue/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-customBlue" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-customBlack">Eu cu mediul</h3>

                <ul className="space-y-2 text-customBlack/80">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Adaptabilitate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Responsabilitate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Viziune critică asupra lumii</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Conștiință ecologică</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Implicare civică</span>
                  </li>
                </ul>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-customBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div variants={itemVariants} className="mt-20 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-customBlack">Vezi cum arată o zi în tabără</h3>

            {/* Video placeholder */}
            <div className="aspect-video bg-customLightBlue/20 rounded-lg flex items-center justify-center">
              <img src={changemakers2} alt="changemakers camp" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trainers Section */}
      <motion.section
        id="trainers"
        ref={trainersRef}
        initial="hidden"
        animate={trainersInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-1 bg-customBlue/20"></div>
          <div className="absolute top-14 left-10 w-20 h-1 bg-customOrange/20"></div>
          <div className="absolute bottom-10 right-10 w-40 h-1 bg-customBlue/20"></div>
          <div className="absolute bottom-14 right-10 w-20 h-1 bg-customOrange/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border-2 border-dashed border-customOrange/30 rounded-xl"></div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack">
                DESPRE <br />
                <span className="text-customBlue">TRAINERI</span>
              </h2>
            </div>

            <p className="text-lg max-w-3xl mx-auto text-customBlack/80 mt-6">
              Echipa de traineri este formată din trei psihologi cu experiență, care vor crea un spațiu sigur, cald și
              stimulant, în care fiecare participant se va simți văzut și valorizat.
            </p>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-customBlue mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trainer 1 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Trainer image placeholder */}
              <div className="aspect-square bg-customLightBlue/30 flex items-center justify-center">
                <img src={andreea1} alt="Andreea" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-customBlack">Andreea-Anamaria Mirescu</h3>
                <p className="text-customBlue font-medium mb-4">Psiholog clinician și educațional</p>
                <p className="text-customBlack/80 text-sm">
                  Este psiholog clinician și educațional sub supervizare, acreditată de Colegiul Psihologilor din
                  România. A absolvit masterul de Psihologie Educațională și Consiliere Psihologică și este în formare
                  în Psihoterapie Experiențială Focalizată pe Emoții (EFT).
                </p>
              </div>
            </motion.div>

            {/* Trainer 2 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Trainer image placeholder */}
              <div className="aspect-square bg-customLightOrange/30 flex items-center justify-center">
                <img src={andreea2} alt="Andreea Mutu Necula" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-customBlack">Andreea Mutu-Necula</h3>
                <p className="text-customOrange font-medium mb-4">Psiholog clinician</p>
                <p className="text-customBlack/80 text-sm">
                  Este psiholog clinician specializat în evaluarea și consilierea copiilor și adolescenților. Are peste
                  doi ani și jumătate de experiență în terapie comportamentală și un an de experiență în consiliere
                  clinică. A sprijinit peste 10 copii și adolescenți în dezvoltarea reglajului emoțional, a strategiilor
                  de coping și în ameliorarea simptomelor de depresie, anxietate și tulburare acută de stres.
                </p>
              </div>
            </motion.div>

            {/* Trainer 3 */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Trainer image placeholder */}
              <div className="aspect-square bg-customLightBlue/30 flex items-center justify-center">
                <img src={andrei} alt="andrei dumitrache" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-customBlack">Andrei Dumitrache</h3>
                <p className="text-customBlue font-medium mb-4">Psiholog clinician</p>
                <p className="text-customBlack/80 text-sm">
                  Este psiholog clinician, absolvent al masterului de Terapii Cognitiv-Comportamentale din cadrul
                  Universității din București. Are experiență în lucrul cu adolescenții și adulții, oferind sprijin în
                  procese de autocunoaștere, dezvoltare personală și echilibru emoțional.
                </p>
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
        className="py-20 bg-gradient-to-b from-white to-customWhite relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Horizontal stripes */}
          <div className="absolute top-20 left-0 w-full h-2 bg-customLightBlue/20"></div>
          <div className="absolute top-24 left-0 w-full h-1 bg-customLightOrange/20"></div>
          <div className="absolute bottom-20 left-0 w-full h-2 bg-customLightBlue/20"></div>
          <div className="absolute bottom-24 left-0 w-full h-1 bg-customLightOrange/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border-2 border-dashed border-customOrange/30 rounded-xl"></div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack">
                DETALII <br />
                <span className="text-customBlue">LOGISTICE</span>
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-customBlue mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-customBlue/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-customBlue" />
                </div>
                <h3 className="text-xl font-bold text-customBlack">Locația</h3>
              </div>

              <p className="text-lg font-medium text-customBlack mb-4">Predeluț, Bran</p>

              {/* Google Maps placeholder */}
              <div className="aspect-video bg-customLightBlue/20 rounded-lg flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11179.97299316975!2d25.342336825850992!3d45.53034141903415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3486eb99cd875%3A0xc5d78c75f78b9f74!2s507026%20Predelu%C8%9B!5e0!3m2!1sen!2sro!4v1747562044184!5m2!1sen!2sro" width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="mt-4 text-customBlack/80">
                <p>
                  Tabăra se va desfășura într-o locație pitorească din Predeluț, Bran, înconjurată de natură și peisaje
                  montane.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-customOrange/10 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-customOrange" />
                </div>
                <h3 className="text-xl font-bold text-customBlack">Perioada</h3>
              </div>

              <p className="text-lg font-medium text-customBlack mb-4">17-23 august 2025</p>

              {/* Calendar image placeholder */}
              <div className="aspect-video bg-customLightOrange/20 rounded-lg flex items-center justify-center">
                <img src={changemakersCalendar} alt="changemakers calendar" />
              </div>

              <div className="mt-4 text-customBlack/80">
                <p>Tabăra durează 7 zile pline de activități, ateliere și experiențe transformatoare.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-customBlue/10 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-customBlue" />
              </div>
              <h3 className="text-xl font-bold text-customBlack">Informații suplimentare</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-customBlack mb-2">Ce este inclus:</h4>
                <ul className="space-y-2 text-customBlack/80">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Cazare (6 nopți)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Toate mesele (mic dejun, prânz, cină)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Materiale pentru ateliere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customBlue rounded-full mt-2 mr-2"></div>
                    <span>Activități și excursii</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-customBlack mb-2">Ce să aduci:</h4>
                <ul className="space-y-2 text-customBlack/80">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Haine confortabile</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Încălțăminte pentru drumeții</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Articole de igienă personală</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-customOrange rounded-full mt-2 mr-2"></div>
                    <span>Entuziasm și deschidere</span>
                  </li>
                </ul>
              </div>
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
        className="py-20 bg-customWhite relative overflow-hidden"
      >
        {/* Decorative elements */}
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
              <div className="absolute -inset-4 border-2 border-dashed border-customOrange/30 rounded-lg"></div>

              <h2 className="text-4xl font-black mb-6 tracking-tighter text-customBlack">
                ÎNSCRIE-TE <br />
                <span className="text-customBlue">LA TABĂRĂ</span>
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="w-32 h-1 bg-customBlue mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-customBlue to-customOrange"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-customBlue/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-customOrange/30 rounded-br-lg"></div>

            <h3 className="text-2xl font-bold text-center text-customBlack mb-6">Formular de înscriere</h3>

            <p className="text-center text-customBlack/80 mb-8">
              Completează formularul de mai jos pentru a-ți rezerva locul în tabăra Changemakers Camp. Locurile sunt
              limitate, așa că înscrie-te cât mai curând!
            </p>

            <p className="text-center font-bold text-lg text-customBlue mb-8">
              Formular de înscriere va fi adăugat aici
            </p>

            <div className="text-center">
              <button className="bg-customBlue text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Înscrie-te acum</span>
                <span className="absolute inset-0 bg-customOrange transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out"></span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default ChangemakersCamp
