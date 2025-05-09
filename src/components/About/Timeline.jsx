"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, Award, Lightbulb } from "lucide-react"

const Timeline = () => {
  return (
    <section className="relative">
      {/* Part 1: How it started? */}
      <JourneyPart
        title="How it started?"
        icon={<Calendar className="w-8 h-8" />}
        bgColor="bg-customLightOrange"
        textColor="text-customBlack"
        alignment="left"
        curveDirection="up"
        extraHeight={true}
      >
        <div className="space-y-4">
          <p>
            Learnity began as a small initiative by a group of passionate educators who believed that traditional
            education wasn't serving all children equally. In 2015, we started with just one classroom and fifteen
            students, driven by a vision to create a learning environment where curiosity and creativity could flourish.
          </p>
          <p>
            Our founders, drawing from diverse backgrounds in education, psychology, and the arts, sought to develop a
            curriculum that honored each child's unique learning style and interests. Those early days were filled with
            experimentation, learning, and a deep commitment to reimagining what education could be.
          </p>
        </div>
      </JourneyPart>

      {/* Part 2: Reforma */}
      <JourneyPart
        title="Reforma"
        icon={<Award className="w-8 h-8" />}
        bgColor="bg-customWhite"
        textColor="text-customBlack"
        alignment="right"
        curveDirection="up"
      >
        <div className="space-y-4">
          <p>
            By 2018, what began as an experiment had evolved into a comprehensive educational reform model. We called
            this approach "Reforma" – a holistic framework that integrates project-based learning, emotional
            intelligence development, and community engagement into every aspect of education.
          </p>
          <p>
            Reforma represents our commitment to transforming not just what children learn, but how they learn. It
            emphasizes hands-on experiences, cross-disciplinary connections, and authentic assessment methods that
            celebrate growth rather than just achievement. This approach has since been recognized by educational
            researchers and has influenced teaching practices beyond our own classrooms.
          </p>
        </div>
      </JourneyPart>

      {/* Part 3: How is it going? */}
      <JourneyPart
        title="How is it going?"
        icon={<Lightbulb className="w-8 h-8" />}
        bgColor="bg-customLightOrange"
        textColor="text-customBlack"
        alignment="left"
        curveDirection="up"
      >
        <div className="space-y-4">
          <p>
            Today, Learnity has grown into a thriving educational community serving over 200 students across multiple
            age groups. Our campus has expanded to include specialized learning spaces, from our innovative playground
            to technology labs and art studios, all designed to inspire discovery and creativity.
          </p>
          <p>
            We've built partnerships with local businesses, artists, and community organizations that enrich our
            curriculum and connect learning to real-world contexts. Our graduates are demonstrating that a different
            approach to education can produce not just academic success, but also the creativity, resilience, and social
            awareness needed for a rapidly changing world.
          </p>
          <p>
            As we look to the future, we remain committed to our founding vision while continuously evolving our
            practices based on emerging research and the changing needs of our students. The journey continues, and
            we're excited about where it will lead next.
          </p>
        </div>
      </JourneyPart>
    </section>
  )
}

const JourneyPart = ({ title, children, icon, bgColor, textColor, alignment, curveDirection, extraHeight = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <div className={`relative h-[80dvh] ${bgColor} ${textColor}`}>
      <div
        className={`container mx-auto px-4 ${extraHeight ? "pt-80 pb-20" : "py-20"} md:${extraHeight ? "pt-80 pb-24" : "py-24"}`}
      >
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            alignment === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text content */}
          <div className={`${alignment === "right" ? "md:order-2" : ""}`}>
            <div
              className={`flex items-center mb-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                className={`
                ${alignment === "right" ? "bg-customOrange" : "bg-customBlue"} 
                text-white p-4 rounded-full mr-4
              `}
              >
                {icon}
              </div>
              <h2 className="text-4xl md:text-5xl font-bangers italic">{title}</h2>
            </div>

            <div className={`${inView ? "animate-slide-up" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
              {children}
            </div>
          </div>

          {/* Image */}
          <div className={`${alignment === "right" ? "md:order-1" : ""}`}>
            <div className={`relative ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.6s" }}>
              <div
                className={`
                relative z-10 rounded-2xl overflow-hidden shadow-xl 
                ${alignment === "right" ? "transform -rotate-3" : "transform rotate-3"}
                transition-transform duration-500 hover:rotate-0
              `}
              >
                <img
                  src="/placeholder.svg?height=500&width=700"
                  alt={`Illustration for ${title}`}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div
                className={`
                absolute -bottom-6 ${alignment === "right" ? "-right-6" : "-left-6"} 
                w-32 h-32 rounded-full opacity-20 z-0
                ${alignment === "right" ? "bg-customBlue" : "bg-customOrange"}
              `}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      {curveDirection && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg
            className={`relative block w-full h-16 md:h-24 ${curveDirection === "down" ? "" : "transform rotate-180"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={`${
                bgColor.includes("customOrange") && bgColor.includes("opacity")
                  ? "fill-customWhite"
                  : bgColor.includes("customWhite")
                    ? "fill-customLightOrange"
                    : "fill-customWhite"
              }`}
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default Timeline

