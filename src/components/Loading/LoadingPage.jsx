"use client"
import { useInView } from "react-intersection-observer"
import { Spinner } from "./Spinner"

const LoadingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Letters for the animated text
  const letters = "LEARNITY".split("")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background colored shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-chart-${(i % 5) + 1} opacity-20`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="flex flex-col items-center justify-center space-y-12 p-8">
        {/* Spinner */}
        <div className={`transition-all duration-700 ${inView ? "scale-100" : "scale-0"}`}>
          <Spinner />
        </div>

        {/* Animated text */}
        <div className="flex justify-center overflow-hidden">
          {letters.map((letter, i) => (
            <div
              key={i}
              className={`text-4xl md:text-6xl font-bold text-foreground mx-1 relative transition-all duration-500 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Loading text */}
        <p
          className={`text-muted-foreground text-lg text-center max-w-md transition-opacity duration-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          Preparing your learning adventure...
        </p>

        {/* Loading progress dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 300}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingPage

