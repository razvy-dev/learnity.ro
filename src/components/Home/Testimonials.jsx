import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import sanzi from './assets/sanzi.jpeg';
import razvan from './assets/razvan.jpg';
import mama_lui_kit from './assets/mama_lui_kit.jpeg';
import karla from './assets/karla.jpeg';

const testimonials = [
    {
      id: 1,
      name: "Sânziana Tudose",
      role: "Learnity Alumni",
      image: sanzi,
      text: "Learnity mi-a oferit o nouă perspectivă legată de ce e o comunitate și ce e învățarea. Pentru mine, a fost un prim pas spre a deveni o persoană care are inițiativa și care iubește colaborarea cu ceilalți.",
    },
    {
      id: 2,
      name: "Karla Ezaru",
      role: "Learnitaș",
      image: karla,
      text: "Imaginează-ți acel loc în care ai libertatea să găsești și să fii cea mai autentică versiune a ta, unde înveți cum să înveți și te cunoști pe tine însuți, unde greșelile nu sunt eșecuri, ci pași înainte. Acel loc în care cunoști oameni care te inspiră, te susțin, cu care și de la care înveți atâtea lucruri. Acel loc este Learnity🤍",
    },
    {
      id: 3,
      name: "Andronachi Răzvan",
      role: "Learnitaș",
      image: razvan,
      text: "Before Learnity, I struggled with traditional schooling. Now I wake up excited to learn every day! The hands-on projects make complex concepts so much easier to understand.",
    },
    {
      id: 4,
      name: "Mihaela Danilov",
      role: "Mama unui Alumni Learnity",
      image: mama_lui_kit,
      text: "Learnity a fost revelația de care aveau nevoie copiii mei: au descoperit bucuria de a învăța, curajul de a fi vulnerabili și puterea unei comunități care îi ascultă cu adevărat. A fost o transformare reală, pentru ei și pentru mine.",
    },
  ]

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const timeoutRef = useRef(null)
  
    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: false,
    })
  
    // Handle auto-advance
    useEffect(() => {
      if (inView && !isPaused) {
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
      }
  
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [currentIndex, isPaused, inView])
  
    // Handle navigation
    const handlePrev = () => {
      setIsPaused(true)
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  
      // Resume auto-advance after 10 seconds of inactivity
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsPaused(false), 10000)
    }
  
    const handleNext = () => {
      setIsPaused(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  
      // Resume auto-advance after 10 seconds of inactivity
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsPaused(false), 10000)
    }
  
    // Handle touch events for swipe
    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX)
    }
  
    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  
    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 75) {
        // Swipe left
        handleNext()
      } else if (touchEnd - touchStart > 75) {
        // Swipe right
        handlePrev()
      }
    }
  
    return (
      <section className="py-16 px-4 bg-customWhite relative overflow-hidden" ref={ref}>
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-customLightBlue rounded-full opacity-30"></div>
  
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Testimoniale
            </h2>
            <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>
  
          <div
            className="relative max-w-4xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Testimonial carousel */}
            <div
              className={`bg-white rounded-3xl shadow-xl p-6 md:p-8 relative z-10 ${
                inView ? "animate-zoom-in" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 absolute top-0 left-0 w-full h-full"
                  }`}
                  style={{
                    display: index === currentIndex ? "block" : "none",
                    padding: "1.5rem 2rem",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-customBlue mb-6 relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-customOrange rounded-t-full"></div>
                    </div>
  
                    <p className="text-lg md:text-xl italic text-customBlack mb-8 max-w-2xl mx-auto leading-relaxed">
                      "{testimonial.text}"
                    </p>
  
                    <h3 className="text-xl font-bold text-customBlue">{testimonial.name}</h3>
  
                    <p className="text-customOrange font-medium">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-customBlue text-white rounded-full p-3 shadow-lg hover:bg-customOrange transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
  
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-customBlue text-white rounded-full p-3 shadow-lg hover:bg-customOrange transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
  
          {/* Fixed Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true)
                  setCurrentIndex(index)
                  if (timeoutRef.current) clearTimeout(timeoutRef.current)
                  timeoutRef.current = setTimeout(() => setIsPaused(false), 10000)
                }}
                className={`h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-customOrange w-10" : "bg-customBlue bg-opacity-30 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
export default TestimonialsSection


  