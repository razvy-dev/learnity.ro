import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Lightbulb, BookOpen, Target, ArrowRight } from "lucide-react"
import img from './assets/guided1.jpg';

const GuidedLearningSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header - centered */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">Guided Learning</h2>
            <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Partea din Learnity care oferă experiențe de învățare precum cursuri și workshop-uri susținute de profesioniști. Acestea diferă de educația formală prin modul de predare cât mai practic și atractiv, lipsa temelor obligatorii sau activităților impuse și relația de egalitate dintre profesori și elevi. 
          </p>
        </div>

        {/* Main content - image left, features right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Image with overlays */}
          <div className="lg:col-span-5">
            <div className={`relative ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
              <div className="relative z-10">
                {/* Main image with frame */}
                <div className="bg-white p-3 rounded-xl shadow-xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={img}
                      height={600}
                      width={800}
                      alt="Teacher guiding students through an engaging learning activity"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-customBlue rounded-lg shadow-lg p-4 transform -rotate-6 z-20">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-customOrange rounded-lg shadow-lg p-4 transform rotate-12 z-20">
                  <Target className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-customLightBlue rounded-full opacity-20 z-0"></div>
            </div>
          </div>

          {/* Right column - Features and CTA */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Feature 1 */}
              <div
                className={`flex items-start ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="bg-customBlue rounded-xl p-4 mr-5 text-white shadow-md transform -rotate-3">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-2">Cursuri</h3>
                  <p className="text-customBlack">
                    Cursurile sunt experiențe de învățare care consistă din mai multe sesiuni, permițându-le adolescenților să exploreze în adâncime subiectul abordat
                    alături de profesioniști din domeniul respectiv. Acestea au aproximativ 6-7 sesiuni de curs, fiecare de căte două ore, pline de exerciții, discuții și teorie explicată pe înțelesul lor.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className={`flex items-start ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="bg-customOrange rounded-xl p-4 mr-5 text-white shadow-md transform rotate-3">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-2">Workshop-uri</h3>
                  <p className="text-customBlack">
                    Workshop-urile sunt experiențe de învățare ce au loc o singură dată, pe un singur subiect, într-o sesiune de aproximativ două ore.
                    Alături de diferiți profesioniști din domeniile în cauză, adolescenții învață despre subiectul discutat prin diferite exerciții și discuții.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className={`flex items-start ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="bg-customLightOrange rounded-xl p-4 mr-5 text-customBlack shadow-md transform -rotate-3">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-customBlack mb-2">Bootcamp-uri</h3>
                  <p className="text-customBlack">
                  Tabere de weekend in care elevii invata super practic, se conecteaza cu oameni faini si isi ies complet din rutina. Fiecare dintre ele dezvolta abilitati cheie precum creativitatea, gandirea critica si lucrul in echipa, intr-un mediu nou si provocator, cu adevarat in afara zonei de confort.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className={`mt-10 ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.7s" }}>
                <Link
                  to="/guided-learning"
                  className="group inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
                >
                  Vezi mai multe
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuidedLearningSection

