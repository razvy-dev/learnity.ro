import dare from './assets/dare.jpg';
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Link } from 'react-router-dom';

const OtherCamps = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const [isHovered, setIsHovered] = useState(false)

  const camp = {
    title: "Dare Yourself",
    subtitle: "Tabăra Learnity care îți activează curajul și vocea interioară",
    price: 2100,
    date: "17-23 August 2025",
    duration: "7 zile / 6 nopți",
    location: "Predeluț, Bran",
    ageGroup: "14-18 ani",
    description:
      <p>Vara asta, Learnity te provoacă să te descoperi cu adevărat. Dare Yourself este o tabără de dezvoltare personală pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină schimbarea pe care o vor în lume. <br/> <br/> Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți depășești fricile și să te implici în ceea ce contează cu adevărat. <br/> <br/> Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de o echipă de psihologi cu experiență. </p>,
    features: [
      "Ateliere de autocunoaștere și explorare emoțională",
      "Recunoașterea valorilor și setarea limitelor sănătoase",
      "Activități creative care te scot din zona de confort",
      "Explorarea curajului și a resurselor interioare",
      "Construirea unei comunități autentice și empatice",
      "Dezvoltarea conexiunii prin ascultare și susținere reciprocă"
    ],
    image: dare,
  }

  return (
    <section className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-customOrange rounded-full opacity-15 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-customBlue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-customLightBlue rounded-full opacity-10 animate-spinSlow"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-customOrange rounded-full opacity-15"></div>

        {/* Floating icons */}
        <div className="absolute top-32 right-1/3 animate-bounce-slow">
          <svg className="w-8 h-8 text-customBlue opacity-30" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse">
          <svg className="w-10 h-10 text-customOrange opacity-25" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-customBlack mb-4 italic animate-headerFallBounce">
            Tabăra de Vară
          </h2>
          <p className="text-xl text-customBlack opacity-80">O experiență de neuitat în inima naturii</p>
        </div>

        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img
                  src={camp.image || "/placeholder.svg"}
                  alt={camp.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Age group badge */}
                <div className="absolute top-6 left-6 bg-customBlue text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {camp.ageGroup}
                </div>

                {/* Bottom overlay info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl md:text-4xl font-bangers text-white mb-2">{camp.title}</h3>
                  <p className="text-white opacity-90 text-lg">{camp.subtitle}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Event Details */}
                  <div className="flex flex-row justify-around gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-customLightBlue rounded-xl">
                      <svg className="w-6 h-6 text-customBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-bold text-customBlack">{camp.date}</p>
                        <p className="text-sm text-customBlack opacity-70">{camp.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-customLightOrange rounded-xl">
                      <svg className="w-6 h-6 text-customOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div>
                        <p className="font-bold text-customBlack">{camp.location}</p>
                        <p className="text-sm text-customBlack opacity-70">Locație premium</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-customLightBlue rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins text-customBlue"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>                      <div>
                        <div>
                          <p className="font-bold text-customBlack">{camp.price} RON</p>
                          <p className="text-sm text-customBlack opacity-70">Preț</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-customBlack leading-relaxed mb-6">{camp.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-customBlack mb-4">Ce include tabăra:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {camp.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-customBlue rounded-full animate-pulse"></div>
                          <span className="text-customBlack text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link to="/dare-yourself-form" className="flex-row justify-center px-8 py-4 bg-customBlue text-white rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Înscrie-te acum
                    </Link>
                    <Link to="/dare-yourself" className="flex-row justify-center px-8 py-4 border-2 border-customOrange text-customOrange rounded-2xl font-bold text-lg hover:bg-customOrange hover:text-white transition-all transform hover:-translate-y-1">
                      Detalii complete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherCamps
