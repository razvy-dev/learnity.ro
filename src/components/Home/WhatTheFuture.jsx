import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Calendar, MapPin, Clock, ArrowRight, Users, Sparkles, Star, Rocket } from "lucide-react"
import img1 from './assets/4.jpeg';
import img2 from './assets/6.jpeg';

const WhatTheFuture = () => {
  const [activeImage, setActiveImage] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  // Event details
  const eventDetails = {
    title: "What The Future",
    subtitle: "Un eveniment despre carieră, vocație și viitor",
    description: (
      <>
        What The Future este un <strong>eveniment</strong> adresat <strong>adolescenților</strong> în cadrul căruia povestim alături de invitați din diferite <strong>domenii de activitate</strong>. Organizăm diverse <strong>discuții</strong>, <strong>panel-uri</strong> și <strong>workshop-uri</strong> despre <strong>carieră</strong>, <strong>vocație</strong> și <strong>facultate</strong>, prin care dorim să oferim liceenilor o <strong>privire de ansamblu</strong> a opțiunilor pe care le au și a <strong>direcției</strong> în care vor să meargă.
      </>
    ),
    longDescription: (
      <>
        Ca adolescent, mai devreme sau mai târziu, vine momentul acela în care <strong>întrebările despre viitor</strong> apar, iar răspunsurile se lasă așteptate. Uneori, întrebările acestea vin cu <strong>entuziasm</strong>, alteori cu <strong>anxietate</strong>. Noi suntem aici să le reamintim că <strong>au timp</strong>, că <strong>sunt bine fix unde sunt</strong>, că <strong>procesul fiecăruia este unic</strong> și că <strong>nu sunt într-o cursă</strong>. Cu toate acestea în minte, am creat acest <strong>eveniment</strong> menit să le vină în <strong>ajutor</strong> și să îi <strong>ghideze</strong> în această perioadă de <strong>explorare</strong>, pentru a găsi <strong>răspunsurile potrivite</strong> lor.
      </>
    ),
    place: "NOD Makerspace",
    date: "7 - 8 iunie 2025",
    time: "11:00 - 19:00",
    prices: {
      oneDay: "35 RON",
      twoDays: "50 RON",
    },
    features: [
      "Speakeri din diverse domenii de interes",
      "Workshop-uri și panel-uri despre carieră și vocație  ",
      "Networking cu profesioniști",
      "Discuții cu oameni faini care să te inspire",
      "Certificate de participare",
      "Răspunsul la anxietățile tale legate de viitor",
    ],
    images: [img1, img2],
  }
  
  

  // Handle image navigation
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % eventDetails.images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? eventDetails.images.length - 1 : prev - 1))
  }

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-customWhite relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10 animate-float-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-20 animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow" style={{ animationDelay: "0.7s" }}>
        <Rocket className="text-customBlue w-12 h-12 opacity-20" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1.2s" }}>
        <Star className="text-customOrange w-10 h-10 opacity-20" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float-slow" style={{ animationDelay: "0.5s" }}>
        <Sparkles className="text-customBlue w-14 h-14 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Event header with title and subtitle */}
        <div className={`text-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bangers text-customBlack mb-4 italic transform -rotate-1">
            {eventDetails.title}
          </h2>
          <p className="text-xl md:text-2xl text-customBlue font-bold">{eventDetails.subtitle}</p>
          <div className="w-40 h-2 bg-customOrange mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Images and details */}
          <div
            className={`lg:col-span-7 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Image carousel */}
            <div className="relative mb-8">
              <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <div className="rounded-xl overflow-hidden aspect-video">
                  <img
                    src={eventDetails.images[activeImage] || "/placeholder.svg"}
                    alt={`What The Future event - image ${activeImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Image navigation */}
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="bg-white bg-opacity-70 hover:bg-customBlue hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white bg-opacity-70 hover:bg-customBlue hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image indicator */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                  {eventDetails.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeImage === index ? "bg-customOrange w-6" : "bg-white bg-opacity-70"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Event description */}
            <div
              className={`bg-white rounded-2xl shadow-lg p-6 mb-8 ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold text-customBlack mb-4">Despre eveniment</h3>
              <p className="text-customBlack mb-4">{eventDetails.description}</p>
              <p className="text-customBlack">{eventDetails.longDescription}</p>
            </div>

            {/* Event features */}
            <div
              className={`bg-customLightBlue bg-opacity-50 rounded-2xl p-6 ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-customBlack mb-4 flex items-center">
                <Sparkles className="mr-2 text-customBlue" /> Ce vei experimenta
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-customBlue rounded-full p-1 mr-3">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-customBlack">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Event details and CTAs */}
          <div className="lg:col-span-5">
            {/* Event details card */}
            <div
              className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-8 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="bg-customBlue p-6 text-white">
                <h3 className="text-2xl font-bold">Detalii eveniment</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-customOrange mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-customBlack">Data</h4>
                    <p className="text-customBlack">{eventDetails.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-customOrange mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-customBlack">Program</h4>
                    <p className="text-customBlack">{eventDetails.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-customOrange mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-customBlack">Locație</h4>
                    <p className="text-customBlack">{eventDetails.place}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-customOrange mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-customBlack">Participanți</h4>
                    <p className="text-customBlack">Locuri limitate (max. 100 participanți)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing card */}
            <div
              className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-8 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-customOrange p-6 text-white">
                <h3 className="text-2xl font-bold">Prețuri</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <h4 className="font-bold text-customBlack text-lg">Participare 1 zi</h4>
                    <p className="text-gray-600">Acces la toate activitățile dintr-o singură zi</p>
                  </div>
                  <div className="text-2xl font-bold text-customBlue">{eventDetails.prices.oneDay}</div>
                </div>

                <div className="flex justify-between items-center pb-4">
                  <div>
                    <h4 className="font-bold text-customBlack text-lg">Participare 2 zile</h4>
                    <p className="text-gray-600">Acces complet la întregul eveniment</p>
                    <span className="inline-block bg-customLightOrange text-customBlack text-sm font-bold px-2 py-1 rounded-full mt-2">
                      Recomandat
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-customBlue">{eventDetails.prices.twoDays}</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div
              className={`space-y-4 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Link
                to="/what-the-future"
                className="block w-full bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-center shadow-lg transform hover:scale-105"
              >
                Înscrie-te acum
              </Link>

              <Link
                to="/what-the-future"
                className="block w-full bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-center shadow-md transform hover:scale-105"
              >
                Află mai multe detalii
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatTheFuture
