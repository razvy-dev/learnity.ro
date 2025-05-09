import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Heart, Users, Lightbulb, Sparkles, Shield, BookOpen, Star } from "lucide-react"

const RulesAndValuesSection = () => {
  const [activeTab, setActiveTab] = useState("values")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Core values data
  const coreValues = [
    {
      id: 1,
      title: "Autonomie",
      description:
        "Autonomia înseamnă încurajarea elevilor să ia decizii proprii, să-și urmeze curiozitatea și să învețe în ritmul lor. Ea promovează responsabilitatea personală, dezvoltarea gândirii critice și formarea unei identități autentice.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      color: "bg-customBlue",
    },
    {
      id: 2,
      title: "Proactivitate",
      description:
        "Proactivitatea înseamnă încurajarea elevilor să inițieze acțiuni, să-și asume roluri active în procesul de învățare și să caute soluții înainte ca problemele să apară. Ea dezvoltă spiritul de inițiativă, încrederea în sine și implicarea conștientă în comunitate.",
      icon: <Heart className="w-10 h-10 text-white" />,
      color: "bg-customOrange",
    },
    {
      id: 3,
      title: "Libertate",
      description:
        "Libertatea, ca valoare într-o școală alternativă, presupune oferirea unui cadru flexibil în care elevii pot alege ce, cum și când să învețe. Aceasta cultivă autenticitatea, respectul pentru alegerile celorlalți și responsabilitatea față de propriul parcurs educațional.",
      icon: <Shield className="w-10 h-10 text-white" />,
      color: "bg-customBlue",
    },
  ]

  // School rules data
  const schoolRules = [
    {
      id: 1,
      title: "Libertatea mea se oprește unde începe libertatea ta",
      description:
        "Treat everyone with kindness and respect. Listen to others' ideas, honor differences, and use positive language. Remember that respect extends to our physical space and materials too.",
      icon: <Star className="w-6 h-6 text-customOrange" />,
    },
    {
      id: 2,
      title: "Principiul celor două picioare",
      description:
        "Folosește-ți cele două picioare să te deplasezi din contextele care nu îți aduc valoare către cele care te ajută cu adevărat.",
      icon: <Star className="w-6 h-6 text-customOrange" />,
    },
    {
      id: 3,
      title: "Responsabilitate",
      description:
        "Am responsabilitate față de alegerile și de învățarea mea, dar și față de ceilalți și de spațiul pe care il împărțim.",
      icon: <Star className="w-6 h-6 text-customOrange" />,
    },
    {
      id: 4,
      title: "Safe Environment",
      description:
        "Help maintain physical and emotional safety for all. Move carefully in our spaces, use materials appropriately, and consider how your words and actions affect others.",
      icon: <Star className="w-6 h-6 text-customOrange" />,
    },
    {
      id: 5,
      title: "Growth Mindset",
      description:
        "Approach challenges with persistence and a belief in your ability to improve. Mistakes are valuable parts of learning! Embrace feedback and celebrate your progress.",
      icon: <Star className="w-6 h-6 text-customOrange" />,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Valorile și regulile noastre
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            La Learnity, valorile și acordurile noastre comunitare creează o bază pentru învățarea plină de bucurie și creșterea personală. Aceste principii ghidează modul în care învățăm, interacționăm și creștem împreună.
          </p>
        </div>

        {/* Tab navigation */}
        <div
          className={`flex justify-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === "values"
                  ? "bg-customBlue text-white shadow-md"
                  : "bg-transparent text-customBlack hover:bg-gray-200"
              }`}
            >
              Core Values
            </button>
            <button
              onClick={() => setActiveTab("rules")}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === "rules"
                  ? "bg-customBlue text-white shadow-md"
                  : "bg-transparent text-customBlack hover:bg-gray-200"
              }`}
            >
              Community Agreements
            </button>
          </div>
        </div>

        {/* Values content */}
        {activeTab === "values" && (
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={value.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    inView ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`${value.color} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-customBlack mb-3">{value.title}</h3>
                    <p className="text-customBlack">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values illustration */}
            <div
              className={`mt-16 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="bg-customLightBlue rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-customOrange rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-customBlue rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                  <BookOpen className="w-16 h-16 text-customBlue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-customBlack mb-3">Valorile noastre în acțiune</h3>
                  <p className="text-customBlack max-w-3xl mx-auto">
                  Aceste valori de bază nu sunt doar cuvinte pe o pagină - sunt experiențe trăite la Learnity. În fiecare zi, elevii și profesorii noștri aduc la viață aceste valori prin interacțiunile, proiectele și aventurile lor de învățare. Când vizitați școala noastră, veți vedea curiozitatea care conduce la descoperire, creativitatea care modelează exprimarea, compasiunea care ghidează relațiile, construirea de conexiuni comunitare și curajul care alimentează creșterea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rules content */}
        {activeTab === "rules" && (
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
            <div className="bg-customLightBlue rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-customOrange rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-customBlue rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="space-y-8">
                  {schoolRules.map((rule, index) => (
                    <div
                      key={rule.id}
                      className={`bg-white rounded-xl p-6 shadow-md transform transition-all duration-500 hover:shadow-lg ${
                        inView ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{rule.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-customBlack mb-2">{rule.title}</h3>
                          <p className="text-customBlack">{rule.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rules footer */}
                <div
                  className={`mt-10 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
                  style={{ transitionDelay: "1s" }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                    <p className="text-customBlack font-bold italic">
                      "These agreements help us create a learning environment where everyone can thrive. When we follow
                      these principles, we build a community of trust, respect, and joyful learning."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RulesAndValuesSection

