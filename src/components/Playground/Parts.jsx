"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

const SpinningTopSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const canvasRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [activeElement, setActiveElement] = useState(null)

  // Elements of the spinning top
  const elements = [
    { id: "action", name: "Acțiune", color: "#F8A12E" },
    { id: "reflection", name: "Reflecție", color: "#05be9e" },
    { id: "resilience", name: "Reziliență", color: "#FEC782" },
    { id: "design", name: "Design", color: "#C7F1F0" },
  ]

  // Animation for the spinning top
  useEffect(() => {
    if (!inView) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20

    let rotation = 0
    const speed = isHovering ? 0.03 : 0.01
    let hue = 0

    const drawSpinningTop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the spinning top
      for (let i = 0; i < elements.length; i++) {
        const startAngle = rotation + (i * Math.PI) / 2
        const endAngle = rotation + ((i + 1) * Math.PI) / 2

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.closePath()

        // Fill with element color
        ctx.fillStyle = elements[i].color
        ctx.fill()

        // Add element name
        const textAngle = startAngle + Math.PI / 4
        const textX = centerX + Math.cos(textAngle) * (radius / 2)
        const textY = centerY + Math.sin(textAngle) * (radius / 2)

        ctx.save()
        ctx.translate(textX, textY)
        ctx.rotate(textAngle + Math.PI / 2)
        ctx.fillStyle = "#2f2f27"
        ctx.font = "bold 14px Arial"
        ctx.textAlign = "center"
        ctx.fillText(elements[i].name, 0, 0)
        ctx.restore()
      }

      // Draw center circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius / 6, 0, Math.PI * 2)
      ctx.fillStyle = "#2f2f27"
      ctx.fill()

      // Update rotation
      rotation += speed
      hue = (hue + 1) % 360

      requestAnimationFrame(drawSpinningTop)
    }

    const animationId = requestAnimationFrame(drawSpinningTop)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [inView, isHovering])

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

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Spinning top visualization */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div
                className="bg-white p-6 rounded-full shadow-xl mx-auto max-w-md aspect-square flex items-center justify-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={400}
                  className="w-full h-full cursor-pointer"
                  onClick={() => {
                    setIsHovering(!isHovering)
                  }}
                />
              </div>

              {/* Interactive element indicators */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {elements.map((element, index) => (
                  <div
                    key={element.id}
                    className={`absolute transition-opacity duration-300 ${activeElement === element.id ? "opacity-100" : "opacity-0"}`}
                    style={{
                      top: index === 0 ? "10%" : index === 1 ? "10%" : index === 2 ? "80%" : "80%",
                      left: index === 0 ? "10%" : index === 1 ? "80%" : index === 2 ? "80%" : "10%",
                    }}
                  >
                    <div className="p-3 rounded-full shadow-md" style={{ backgroundColor: element.color }}>
                      <span className="font-bold text-customBlack">{element.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instruction text */}
              <p className="text-center mt-4 text-customBlack italic">
                {isHovering ? "Titirezul se rotește mai repede!" : "Atinge titirezul pentru a-l accelera"}
              </p>
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            <div className={`mb-6 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.1s" }}>
              <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
                Învățarea prin lentila Titirezului
              </h2>
              <div className="w-40 h-2 bg-customOrange rounded-full"></div>
            </div>

            <div
              className={`space-y-4 text-lg text-customBlack ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p>
                Metoda titirezului este o definiție metaforică a Învățării Emergente, o busolă pentru a te orienta în
                timp ce îți proiectezi propria călătorie de învățare, cea a unui grup sau a unei comunități.
              </p>

              <p>
                <span className="font-bold" style={{ color: elements[0].color }}>
                  Acțiunea
                </span>
                ,{" "}
                <span className="font-bold" style={{ color: elements[1].color }}>
                  Reflecția
                </span>{" "}
                și{" "}
                <span className="font-bold" style={{ color: elements[2].color }}>
                  Reziliența
                </span>{" "}
                descriu toată învățarea în forma sa naturală, iar partea de{" "}
                <span className="font-bold" style={{ color: elements[3].color }}>
                  Design
                </span>{" "}
                adaugă acesteia o nouă calitate: o face autodeterminată.
              </p>

              <p>
                Acestea sunt cele patru „puncte cardinale" ce ne ajută să încetinim mental procesul învățării noastre
                pentru a ne da seama unde și cum avem nevoie să ne îndreptăm focusul. După ce le-am înțeles pe fiecare
                individual, pentru a ne păstra procesul activ și eficient, cele patru elemente de bază se amestecă între
                ele, exact precum culorile unui titirez în rotație.
              </p>

              <p className="font-bold italic">
                Așadar, dacă vizualizezi învățarea sub forma unui titirez, scopul este să-i echilibrezi toate cele patru
                puncte pentru a-l ține în mișcare.
              </p>
            </div>

            {/* Next section teaser */}
            <div className={`mt-8 ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.5s" }}>
              <a
                href="#elements-section"
                className="group inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
              >
                Descoperă cele patru elemente
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Next section title */}
      <div
        id="elements-section"
        className={`mt-20 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
        style={{ transitionDelay: "0.6s" }}
      >
        <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
          Cele patru elemente de bază și calitățile lor:
        </h2>
        <div className="w-40 h-2 bg-customBlue mx-auto rounded-full"></div>
      </div>
    </section>
  )
}

export default SpinningTopSection
