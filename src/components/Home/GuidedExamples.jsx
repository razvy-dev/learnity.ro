import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Calendar, User, ArrowRight } from "lucide-react"
import g1 from './assets/g1.jpg';
import g2 from './assets/g2.jpg';
import g3 from './assets/g3.jpg';

const workshops = [
  {
    id: 1,
    title: "Doza de inspirație",
    description:
      "La ultima “Doză de Inspirație” i-am avut invitați pe cei de la The Kryptonites Sparks !!!😎💪💪 Am fost foarte entuziasmați să-i primim în sufrageria Learnity pe cei trei membrii ai trupei The Kryptonite Sparks 🎸🎶🥁, pentru a ne spune povestea lor, de la cum au început, la ce îi motivează și inspiră şi până la experiența turului de lansare al ultimului lor album, pe care tocmai l-au finalizat. 🚀🪐",
    image: g1,
    teacher: "The Kryptonite Sparks",
    date: "11 decembrie, 2024",
    link: "/workshops/storytelling",
  },
  {
    id: 2,
    title: "Prim ajutor",
    description:
      "În situații critice, fiecare secundă contează și cu toții ar trebuie să știm cum să acționăm! ⏳ În acest workshop de prim ajutor susținut de Caravana cu medici vei învăța tehnici esențiale precum resuscitarea cardio-respiratorie (CPR), oprirea hemoragiilor, manevra Heimlich și gestionarea situațiilor de urgență până la sosirea echipajelor medicale.",
    image: g3,
    teacher: "Caravana cu medici",
    date: "19 martie, 2025",
    link: "/workshops/science",
  },
  {
    id: 3,
    title: "Taboo Talk: Depresie și anxietate",
    description:
      'Toți ne-am confruntat, de-a lungul vieții, cu stări proaste care păreau să nu treacă. Totuși, cum faci diferența între o simplă perioadă care te seacă de energie și o problemă adevărată? Ei bine, vă invităm miercurea aceasta , între orele 19:30 și 21:30, la "Taboo Talk: Depresie și Anxietate", susținut de Alex Necsulescu, pentru a răspunde la această întrebare și la altele legate de subiect. 💫💫',
    image: g2,
    teacher: "Alex Necșulescu",
    date: "26 februarie, 2025",
    link: "/workshops/digital-art",
  },
]

const GuidedExamples = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightBlue rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-customLightOrange rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Câteva dintre workshop-urile Guided
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Workshop-urile guided: Pastile de invatare sustinute de profesionisti din diferite domenii. Fiecare aterlier este practic si creat in functie de interesele adolescentilor
          </p>
        </div>

        {/* Workshops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className={`bg-customWhite rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Workshop image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-customBlack opacity-50"></div>
                <div className="absolute top-4 right-4 bg-customOrange text-white text-sm font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>

              {/* Workshop content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-customBlack mb-3">{workshop.title}</h3>

                <p className="text-customBlack mb-4 text-sm">{workshop.description}</p>

                {/* Teacher and date info */}
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <User size={16} className="text-customBlue mr-2" />
                    <span className="text-customBlack">{workshop.teacher}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="text-customBlue mr-2" />
                    <span className="text-customBlack">{workshop.date}</span>
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  to={workshop.link}
                  className="group flex items-center justify-between bg-customBlue hover:bg-customOrange text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all workshops button */}
        <div
          className={`text-center mt-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <Link
            to="/workshops"
            className="inline-flex items-center bg-white border-2 border-customBlue hover:bg-customBlue text-customBlue hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            View All Workshops
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GuidedExamples

