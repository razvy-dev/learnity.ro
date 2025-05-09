import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"
import rebeca from './assets/rebeca.jpeg';
import alex from './assets/alex.jpeg';
import smaranda from './assets/smaranda.jpeg';
import prof2 from './assets/prof2.jpg';
import prof3 from './assets/prof3.jpg';

// Sample data for teachers
const teachers = [
  {
    id: 1,
    name: "Rebeca Bășuț",
    course: "Relații internaționale",
    image: rebeca,
    quote:
      "Relațiile internaționale explicate pe gustul tinerilor",
  },
  {
    id: 2,
    name: "Alex Necșulescu",
    course: "Psihologie Aplicată",
    image: alex,
    quote:
      "Psihologie Aplicată: Înțelege mintea umană prin teorie și practică."
  },
  {
    id: 3,
    name: "Smaranda Nay",
    course: "Comunicare",
    image: smaranda,
    quote:
      "Descoperă-ți vocea și transformă-ți relațiile prin înțelegerea celor trei stări: Părinte, Adult și Copil!",
  },
  {
    id: 4,
    name: "Valentin Brabete",
    course: "Economie",
    image: prof2,
    quote:
      "Economie la firul ierbii, explicată simplu, prin dialog și perspective din viața reală!",
  },
  {
    id: 5,
    name: "Cristi Chirnogeanu",
    course: "Povești despre antreprenoriat",
    image: prof3,
    quote:
      "Descoperă secretele antreprenoriatului prin povești reale și lecții practice!",
  },
]

const TeachersShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Profesorii noștri
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Our passionate educators bring learning to life with creativity, expertise, and a deep understanding of how
            children learn best. Each teacher contributes their unique talents to create an engaging, supportive
            environment.
          </p>
        </div>

        {/* Teachers grid - uniform layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Teacher info header */}
                <div className="flex items-center mb-4">
                  <div className="bg-customOrange text-white text-sm font-bold px-3 py-1 rounded-full">
                    {teacher.course}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-customBlack mb-2">{teacher.name}</h3>

                {/* Teacher photo and quote side by side */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  {/* Teacher photo - contained */}
                  <div className="md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden aspect-square">
                      <img
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        height={400}
                        width={400}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Teacher quote */}
                  <div className="md:w-2/3 relative">
                    <div className="absolute top-0 right-0 text-customOrange opacity-20">
                      <Quote size={30} />
                    </div>

                    <p className="text-customBlack italic text-sm md:text-base pt-4 md:pt-0">"{teacher.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all teachers button */}
        <div
          className={`text-center mt-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="/teachers"
            className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            Meet All Our Teachers
          </a>
        </div>
      </div>
    </section>
  )
}

export default TeachersShowcase

