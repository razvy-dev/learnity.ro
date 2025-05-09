import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from '../components/Forms/ContactUs';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Set visibility to true after component mounts to trigger animations once
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-20 pt-40 px-4 bg-gradient-to-br bg-customWhite relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
            <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
            >
              <h1 className="text-5xl md:text-6xl font-bangers text-customBlack mb-6 italic transform -rotate-1">
                Hai să stăm de vorbă!
              </h1>
              <p className="text-xl text-customBlack mb-8">
                Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să descoperi mai multe despre
                programele noastre educaționale. Completează formularul de mai jos sau folosește informațiile de contact
                pentru a ne găsi.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form and info section */}
        <section className="py-16 px-4 bg-customWhite">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact form - takes up more space */}
              <div className="lg:col-span-7">
                <div
                  className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
                >
                  <ContactForm />
                </div>
              </div>

              {/* Contact information */}
              <div className="lg:col-span-5">
                <div
                  className={`bg-customLightBlue rounded-3xl p-8 h-full transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
                >
                  <h2 className="text-3xl font-bangers text-customBlack mb-6 italic transform -rotate-1">
                    Informații de Contact
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-customBlue rounded-full p-3 mr-4 text-white">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-customBlack mb-1">Adresa Noastră</h3>
                        <p className="text-customBlack">
                          Strada Educației nr. 123
                          <br />
                          București, Sector 1<br />
                          România
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-customOrange rounded-full p-3 mr-4 text-white">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-customBlack mb-1">Telefon</h3>
                        <p className="text-customBlack">
                          <a href="tel:+40123456789" className="hover:text-customBlue transition-colors">
                            +40 123 456 789
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-customBlue rounded-full p-3 mr-4 text-white">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-customBlack mb-1">Email</h3>
                        <p className="text-customBlack">
                          <a href="mailto:contact@learnity.ro" className="hover:text-customBlue transition-colors">
                            contact@learnity.ro
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-customOrange rounded-full p-3 mr-4 text-white">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-customBlack mb-1">Program</h3>
                        <p className="text-customBlack">
                          Luni - Vineri: 9:00 - 18:00
                          <br />
                          Sâmbătă: 10:00 - 14:00
                          <br />
                          Duminică: Închis
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social media links could go here */}
                  <div className="pt-4 border-t border-customBlue border-opacity-20">
                    <h3 className="text-xl font-bold text-customBlack mb-3">Urmărește-ne</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-customBlue hover:text-white text-customBlue p-3 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-customBlue hover:text-white text-customBlue p-3 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-customBlue hover:text-white text-customBlue p-3 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-customBlue hover:text-white text-customBlue p-3 rounded-full transition-colors duration-300 shadow-sm"
                        aria-label="YouTube"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="py-16 px-4 bg-customLightOrange bg-opacity-10">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
            >
              <h2 className="text-4xl font-bangers text-customBlack mb-4 italic transform -rotate-1">
                Vino să ne vizitezi
              </h2>
              <p className="text-lg text-customBlack max-w-2xl mx-auto">
                Suntem localizați central, ușor de găsit și mereu bucuroși să primim vizitatori. Te așteptăm!
              </p>
            </div>

            <div
              className={`bg-white p-4 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
            >
              {/* This is a placeholder for an embedded map */}
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8272833334277!2d26.12669317670501!3d44.43670500140456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff29423828e1%3A0x3b1df70f8b904c25!2sStrada%20Duzilor%2023%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1746787133637!5m2!1sen!2sro" height={450} width={1300} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
