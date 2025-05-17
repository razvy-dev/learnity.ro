import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Calendar, User, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import filosofie from './assets/filosofie.jpg';
import creative from './assets/creative-thinking.jpg';
import pastila from './assets/pastila-de-arta.jpg';
import sdj from './assets/sdj.jpeg';

// Sample data for courses
const courses = [
  {
    id: 1,
    name: "Filosofie Politică",
    description:
      "Dacă politica ultimelor luni din România ne-a arătat ceva, este că democraţia nu ne este dată de-a gata şi că, odată obţinută,  ea nu este dincolo de orice pericol. ⚖️ Spectrul totalitarismului ne bântuie în continuare, iar libertatea noastră trebuie apărată. Pentru asta, avem nevoie să înţelegem care sunt sursele şi formele de manifestare ale acţiunilor politice antidemocratice, de ce diversele forme de fascism şi comunism exercită în continuare o putere de convingere asupra oamenilor şi, în final, faptul că statul de drept este destul de bun chiar şi când e foarte prost. Despre toate acestea discutam la cursul de filosofie politică alături de Petrișor Ivan .✨",
    teacher: "Petrișor Ivan",
    image: filosofie,
    subjects: ["Marxismul", "Fascismul", "Nietzsche", "Sisteme de guvernare"],
    dateInterval: "20 ianuarie - 3 martie, 2025",
  },
  {
    id: 2,
    name: "Creative Thinking",
    description:
      "Să fii creativ înseamnă doar să ştii să pictezi? Ce este creativitatea? Care e diferenta dintre gândirea convergentă și cea divergentă şi cum poți să depașeşti bariere sau blocaje în creativitate? Cum arată un om creativ şi oare sunt şi eu unul dintre ei? Răspunsul la aceste întrebări și multe altele le afli la cursul “Creative Thinking” susținut de Cosmin Muscălescu, Head of Creative & Communications la Promocrat (agenție de publicitate).",
    teacher: "Cosmin Mușcălescu",
    image: creative,
    subjects: ["Brainstorming", "Team working", "Hackathon", "Pitching"],
    dateInterval: "23 ianuarie - 13 martie, 2025",
  },
  {
    id: 3,
    name: "Pastila de Artă",
    description:
      "Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vrem să creăm un spațiu în cadrul căruia putem cu toții să ne regăsim și să comunicăm cine suntem cu ajutorul mijloacelor plastice. În cadrul acestui curs avem 6 ședințe în care exploram diferite tipuri de artă - pictura, modelajul, fotografia, gravura, fiecare având profesori separați, specializați pe fiecare domeniu în parte.",
    teacher: "Andra Achim, Ana Guțǎ, Emma Blaga, Costin Duțu",
    image: pastila,
    subjects: ["Fotografie", "Gravură", "Pictură", "Sculptură"],
    dateInterval: "11 noiembrie - 16 decembrie, 2024",
  },
  {
    id: 4,
    name: "Self Discovery Journey",
    description:
      "Un parcurs în 7 întâlniri săptămânale, unde vei explora cine ești, ce te motivează și cum poți deveni o versiune mai încrezătoare și mai autentică a ta. Ce vei descoperi pe parcurs: \n 1. Gândirea, Cogniții și Bias-uri – Cum ne influențează gândurile deciziile și felul în care vedem lumea.  \n 2. Nevoi și Motivații– Ce te impulsionează cu adevărat și cum poți învăța să-ți recunoști și să-ți respecți nevoile. \n 3. Emoții și Inteligența Emoțională– Cum să înțelegi ce simți și să gestionezi emoțiile într-un mod sănătos. \n 4. Stiluri de Decizie – Cum să iei decizii mai clare și mai potrivite pentru tine. \n 5. Imagine de sine și Încredere în sine – Cum să-ți construiești o relație mai bună cu tine și să crezi în valoarea ta. \n 6. Idealuri și Valori– Ce contează cu adevărat pentru tine și cum să faci alegeri care reflectă asta. \n Acest grup este mai mult decât o serie de întâlniri – este o oportunitate să înveți mai multe despre tine și despre ce te face să te simți bine în pielea ta.",
    teacher: "Aisha Patel",
    image: sdj,
    subjects: ["Ecosystem Studies", "Sustainable Gardening", "Wildlife Observation", "Conservation Projects"],
    dateInterval: "14 martie - 18 aprilie, 2025",
  },
]

const GuidedCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const toggleCourse = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null)
    } else {
      setExpandedCourse(courseId)
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Câteva dintre cursurile noastre
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Explore some of our most popular courses from previous terms. These examples showcase the diverse learning
            experiences we offer at Learnity.
          </p>
        </div>

        {/* Timeline-style course layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-customBlue transform md:translate-x-[-0.5px] hidden md:block"></div>

          {/* Courses */}
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`mb-12 md:mb-16 relative ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-customOrange rounded-full transform md:translate-x-[-10px] mt-6 z-10 hidden md:block"></div>

              {/* Course content */}
              <div
                className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex md:flex-row-reverse"}`}
              >
                {/* Left/Right side based on index */}
                <div className={`relative ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  {/* Date badge */}
                  <div className="inline-flex items-center bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                    <Calendar size={16} className="mr-2" />
                    {course.dateInterval}
                  </div>

                  <h3 className="text-2xl font-bold text-customBlack mb-3">{course.name}</h3>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-customBlack">
                      <User size={18} className="text-customBlue mr-2" />
                      <span className="font-medium">Taught by {course.teacher}</span>
                    </div>
                  </div>

                  <p className="text-customBlack mb-4">{course.description}</p>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="flex items-center text-customBlue hover:text-customOrange transition-colors duration-300 font-bold"
                  >
                    {expandedCourse === course.id ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={20} className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Show Subjects</span>
                        <ChevronDown size={20} className="ml-1" />
                      </>
                    )}
                  </button>

                  {/* Expandable subjects */}
                  {expandedCourse === course.id && (
                    <div className="mt-4 pl-4 border-l-2 border-customLightOrange animate-fade-in">
                      <h4 className="font-bold text-customBlack mb-2">Course Subjects:</h4>
                      <ul className="space-y-2">
                        {course.subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-start">
                            <BookOpen size={18} className="text-customOrange mr-2 mt-1 flex-shrink-0" />
                            <span className="text-customBlack">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Image side */}
                <div className={`mt-6 md:mt-0 ${index % 2 === 0 ? "" : ""}`}>
                  <div
                    className={`w-1/2 h-auto rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? "transform md:rotate-2" : "transform md:-rotate-2"}`}
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.name}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all courses button */}
        <div
          className={`text-center mt-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="/courses"
            className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            Vezi cursurile acestui an
          </a>
        </div>
      </div>
    </section>
  )
}

export default GuidedCourses

