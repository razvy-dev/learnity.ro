import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { CheckCircle, Home, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react"

const ThankYou = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  // Animation hooks
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const { ref: actionsRef, inView: actionsInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  // Set loaded state after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-16 px-4 bg-gradient-to-br from-customLightBlue to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-customOrange rounded-full opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-customBlue rounded-full opacity-10"></div>

          {/* Floating shapes */}
          <div className="absolute top-1/4 right-1/3 animate-float-slow" style={{ animationDelay: "0.5s" }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L60 30L30 60L0 30L30 0Z" fill="#05BE9E" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1.2s" }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#F8A12E" fillOpacity="0.2" />
            </svg>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Thank you card */}
          <div
            className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Header */}
            <div ref={headerRef} className="bg-customBlue px-6 py-10 text-white text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-customOrange rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

              <div
                className={`relative z-10 transition-all duration-700 ${
                  headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bangers mb-4">Mulțumim!</h1>
                <p className="text-white text-opacity-90 text-lg max-w-xl mx-auto">
                  Contul tău a fost creat cu succes și este în așteptare pentru aprobare.
                </p>
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="p-8 md:p-10">
              <div
                className={`transition-all duration-700 delay-300 ${
                  contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="bg-customLightBlue bg-opacity-20 rounded-2xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-customBlack mb-4 flex items-center">
                    <Clock className="mr-3 text-customBlue" />
                    Contul tău este în așteptare
                  </h2>
                  <p className="text-customBlack mb-4">
                    Echipa noastră va revizui cererea ta de creare a contului în cel mai scurt timp posibil. Acest
                    proces poate dura până la 24 de ore în zilele lucrătoare.
                  </p>
                  <p className="text-customBlack">
                    Vei primi un email de confirmare la adresa furnizată odată ce contul tău a fost aprobat. După
                    aprobare, vei putea accesa toate funcționalitățile platformei Learnity.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-customOrange rounded-full p-2 mr-4 text-white flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-customBlack mb-1">Verifică-ți email-ul</h3>
                      <p className="text-customBlack">
                        Ți-am trimis un email de confirmare. Te rugăm să verifici și folderul de spam dacă nu îl găsești
                        în inbox.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-customBlue rounded-full p-2 mr-4 text-white flex-shrink-0">
                      <ExternalLink size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-customBlack mb-1">Explorează resursele noastre</h3>
                      <p className="text-customBlack">
                        În timp ce aștepți aprobarea, te invităm să explorezi blogul nostru și resursele educaționale
                        disponibile public.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div ref={actionsRef} className="px-8 pb-10 text-center">
              <div
                className={`transition-all duration-700 delay-500 ${
                  actionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  to="/"
                  className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Home className="mr-2" size={20} />
                  Înapoi la pagina principală
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-gray-500">
                    Ai întrebări?{" "}
                    <a href="/contact" className="text-customBlue hover:text-customOrange">
                      Contactează-ne
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional resources */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-customBlack mb-4">Între timp, descoperă mai multe despre Learnity</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                to="/about"
                className="inline-flex items-center bg-white hover:bg-customLightBlue text-customBlack font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-md"
              >
                Despre noi
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center bg-white hover:bg-customLightBlue text-customBlack font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-md"
              >
                Evenimente
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center bg-white hover:bg-customLightBlue text-customBlack font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-md"
              >
                Blog
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ThankYou

