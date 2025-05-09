import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Home, RefreshCw } from "lucide-react"

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false)

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: buttonsRef, inView: buttonsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Random shapes for background
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 20 + Math.random() * 80,
    color: i % 3 === 0 ? "bg-customOrange" : i % 3 === 1 ? "bg-customBlue" : "bg-customLightBlue",
    delay: i * 0.2,
    duration: 3 + Math.random() * 7,
  }))

  return (
    <div className="min-h-screen bg-customWhite flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated background shapes */}
      {isLoaded &&
        shapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute rounded-full opacity-20 ${shape.color} animate-bounce-slow`}
            style={{
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.duration}s`,
            }}
          />
        ))}

      <div className="z-10 max-w-3xl w-full text-center">
        {/* Error Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleInView ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-8xl font-bangers text-customBlack mb-4">
            <span className="text-customBlue">Oops!</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-8">Something Went Wrong</h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`mb-10 transition-all duration-700 delay-300 ${contentInView ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl text-customBlack mb-6">
            We encountered an unexpected error. Don't worry, even the best explorers face challenges sometimes!
          </p>
          <p className="text-lg text-customBlack">
            You can try again or head back to our home page to continue your learning journey.
          </p>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${buttonsInView ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
        >
          <button
            // onClick={reset}
            className="flex items-center justify-center gap-2 bg-customBlue text-customWhite py-3 px-8 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-customOrange text-customBlack py-3 px-8 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

