import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import dare from './assets/dare.jpg';
import changemakers from './assets/changemakers.jpg';

const Camps = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const camps = [
    {
      id: 1,
      title: "Changemakers Camp",
      date: "17-23 august 2025",
      location: "Predeluț, Bran",
      description:
        <>O tabără pentru liceeni care vor să devină changemakers. Dezvoltăm dibăcii esențiale pentru viață: autocunoaștere, comunicare, colaborare, responsabilitate și viziune critică. Totul prin ateliere, jocuri și activități cu sens. <br /> 🔎 Focus: <strong> dezvoltare personală, relații sănătoase, sens și reziliență </strong> </>,
      image: changemakers,
      ref: ref1,
      inView: inView1,
      link: "/changemakers-camp"
    },
    {
      id: 2,
      title: "Dare yourself",
      date: "14-20 iulie 2025",
      location: "Predeluț, Bran",
      description:
        <>O tabără care te scoate din zona de confort. Explorăm curajul, fricile, limitele personale și autenticitatea într-un spațiu sigur, ghidat de psihologi. Crești, te provoci, devii mai încrezător. <br /> 🔎 Focus: <strong> curaj, limite personale, autenticitate, depășirea fricilor </strong> </>,
      image: dare,
      ref: ref2,
      inView: inView2,
      link: "/dare-yourself"
    },
  ]

  return (
    <section className="py-16 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-customOrange rounded-full opacity-10 animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-customBlue rounded-full opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bangers text-center text-customBlack mb-12 italic">
          Taberele Learnity
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {camps.map((camp) => (
            <div
              key={camp.id}
              ref={camp.ref}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                camp.inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={camp.image || "/placeholder.svg"}
                  alt={camp.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-3xl font-bangers text-white mb-2">{camp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{camp.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{camp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-customBlack mb-6">{camp.description}</p>

                <div className="flex flex-wrap gap-4">
                  <Link to={camp.link} className="px-6 py-3 bg-customBlue text-white rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-md">
                    Înscrie-te acum
                  </Link>
                  <Link to={camp.link} className="px-6 py-3 border-2 border-customBlue text-customBlue rounded-full font-bold hover:bg-customBlue hover:bg-opacity-10 transition-all">
                    Detalii complete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Camps
