import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Subscribing email:", email)
      setSubscribed(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 3000)
    }
  }

  return (
    <footer ref={ref} className="bg-customBlue text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-customOrange rounded-full opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and about section */}
          <div
            className={`md:col-span-4 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <img src={logo} alt="logo" width={200} height={200} />

            <p className="text-customWhite mb-6 max-w-md">
            Learnity: o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/learnity/"
                aria-label="Facebook"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-customOrange transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="tel:+40722280009"
                aria-label="Twitter"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-customOrange transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://www.instagram.com/learnityro/"
                aria-label="Instagram"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-customOrange transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact.learnity@gmail.com"
                aria-label="YouTube"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-customOrange transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div
            className={`md:col-span-2 ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-customWhite">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-customOrange transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-customOrange transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-customOrange transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Guided Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-customOrange transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Playground
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-customOrange transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div
            className={`md:col-span-2 ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-customWhite">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-customOrange transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Newsletter
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-customOrange transition-colors duration-300 flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Log In & Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/parent-resources"
                  className="hover:text-customOrange transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Account
                </Link>
              </li>
              <li>
                <Link
                  to="/student-resources"
                  className="hover:text-customOrange transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="hover:text-customOrange transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div
            className={`md:col-span-4 ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-customWhite">Stay Connected</h3>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg flex-grow text-customBlack focus:outline-none focus:ring-2 focus:ring-customOrange"
                  required
                />
                <button
                  type="submit"
                  className="bg-customOrange hover:bg-customLightOrange text-white px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center"
                >
                  <Send size={18} />
                </button>
              </div>
              {subscribed && <p className="text-customLightOrange mt-2 text-sm">Thanks for subscribing!</p>}
            </form>

            <h3 className="text-xl font-bold mb-4 text-customWhite">Contactează-ne: </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-customOrange" />
                <span>Str. Duzilor nr. 23, sector 2, București</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-customOrange" />
                <a href="tel:+40722280009">0722 280 009</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-customOrange" />
                <a href="mailto:contact.learnity@gmail.com" className="hover:text-customOrange transition-colors duration-300">
                  contact.learnity@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p className="text-sm text-customWhite mb-4 md:mb-0">
            © {new Date().getFullYear()} Learnity. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-customWhite">
            <Link to="/privacy" className="hover:text-customOrange transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-customOrange transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-customOrange transition-colors duration-300">
              Accessibility
            </Link>
            <Link to="/sitemap" className="hover:text-customOrange transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

