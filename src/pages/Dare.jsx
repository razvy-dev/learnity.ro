import dare from './assets/dare.jpg';
import andreea1 from './assets/andreea1.jpeg';
import andreea2 from './assets/andreea2.jpeg';
import andrei from './assets/andrei.jpeg';
import { useInView } from "react-intersection-observer"
import {
  MapPin,
  Calendar,
  Users,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  HandHeart,
  Phone,
} from "lucide-react"
import { Link } from 'react-router-dom';

const DareYourself = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: offersRef, inView: offersInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: themesRef, inView: themesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: locationRef, inView: locationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: practicalRef, inView: practicalInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const offers = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ateliere profunde de autocunoaștere și explorare emoțională",
      description:
        "Vei învăța să-ți recunoști valorile, emoțiile și tiparele. Să-ți setezi limite sănătoase și să fii autentic în relații.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Provocări creative și activități care te scot din zona de confort",
      description:
        "Îți vei testa curajul, vei explora noi perspective și vei descoperi în tine resurse pe care nu știai că le ai.",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Construirea unei comunități reale",
      description:
        "Fiecare moment în tabără este despre conexiune: prin ascultare activă, empatie, lucru în echipă și susținere reciprocă.",
    },
  ]

  const themes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Eu cu mine",
      description: "autocunoaștere, încredere în sine, iubire de sine, reziliență",
      accentColor: "border-customBlue",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Eu cu ceilalți",
      description: "empatie, comunicare, colaborare, ascultare activă",
      accentColor: "border-customOrange",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Eu cu lumea",
      description: "responsabilitate, conștiință ecologică, adaptabilitate, implicare civică",
      accentColor: "border-green-500",
    },
  ]

  const team = [
    {
      name: "Andreea Mirescu",
      role: "psiholog clinician și educațional",
      image: andreea2,
    },
    {
      name: "Andreea Mutu-Necula",
      role: "psiholog clinician specializat în consilierea adolescenților",
      image: andreea1,
    },
    {
      name: "Andrei Dumitrache",
      role: "psiholog clinician, cu experiență în lucrul cu tineri și adulți",
      image: andrei,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relativeIt flex items-start md:pt-48 justify-center overflow-hidden bg-white"
        style={{ marginBottom: 0, paddingBottom: 0 }} // Remove extra space below hero
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-customBlue rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-5 animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customBlue rounded-full opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customOrange rounded-full opacity-8"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Content */}
          <div className={`${heroInView ? "animate-fade-in" : "opacity-0"}`}>
            <div className="mb-8">
              <div className="inline-block bg-customBlue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Tabără de dezvoltare personală
              </div>
              <h1 className="text-4xl md:text-6xl font-bangers text-customBlack mb-6 leading-tight">Dare Yourself</h1>
              <div className="w-20 h-1 bg-customOrange rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                Tabăra Learnity care îți activează curajul și vocea interioară
              </p>
            </div>

            {/* Key Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700 text-lg">
                <div className="w-10 h-10 bg-customBlue rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <span className="font-medium">Predeluț, Bran</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <div className="w-10 h-10 bg-customOrange rounded-full flex items-center justify-center mr-4">
                  <Calendar className="text-white w-5 h-5" />
                </div>
                <span className="font-medium">17–23 august</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins text-customWhite"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                </div>
                <span className="font-medium">Preț: 2100 RON</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/dare-yourself-form' className="bg-customBlue hover:bg-customOrange text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                Înscrie-te acum
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`${heroInView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
            <div className="relative">
              <img
                src={dare}
                alt="Dare Yourself Camp"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-xl shadow-lg">
                <p className="text-lg font-medium text-customBlack">O săptămână de descoperire</p>
                <p className="text-sm text-gray-600">și dezvoltare personală</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
      ref={aboutRef}
      style={{ marginTop: '4rem', paddingTop: "4rem" }} //
        className=" px-4 bg-gray-50" 
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${aboutInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Despre tabără</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto mb-12"></div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Vara asta, Learnity te provoacă să te descoperi cu adevărat.{" "}
                  <strong className="text-customBlue">Dare Yourself</strong> este o tabără de dezvoltare personală
                  pentru liceeni curajoși, dornici să-și descopere vocea, să-și înțeleagă emoțiile și să devină
                  schimbarea pe care o vor în lume.
                </p>
                <p>
                  Timp de o săptămână, vei fi înconjurat de oameni ca tine – care caută sens, autenticitate și
                  conexiune. Vei explora ce înseamnă să te înțelegi pe tine, să relaționezi sănătos cu ceilalți, să îți
                  depășești fricile și să te implici în ceea ce contează cu adevărat.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-customBlue">
                  <p className="font-medium text-customBlack">
                    Este o tabără care îmbină jocul, introspecția, provocările și comunitatea, într-un proces ghidat de
                    o echipă de psihologi cu experiență.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section ref={offersRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${offersInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Ce îți propunem?</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`${offersInView ? "animate-fade-in" : "opacity-0"} bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-customBlue rounded-lg flex items-center justify-center text-white mb-4">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-bold text-customBlack mb-3">{offer.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Themes Section */}
      <section ref={themesRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${themesInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Temele principale</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tot ce vei face în tabără este construit în jurul a trei direcții fundamentale de dezvoltare personală:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`${themesInView ? "animate-fade-in" : "opacity-0"} bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${theme.accentColor}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-customBlue mb-4 mx-auto">
                  {theme.icon}
                </div>
                <h3 className="text-xl font-bold text-customBlack mb-3 text-center">{theme.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${teamInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Cine te va ghida</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Echipa de traineri este formată din psihologi cu experiență, care vor crea un spațiu sigur, cald și
              stimulant, în care să te simți văzut, susținut și provocat:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`${teamInView ? "animate-fade-in" : "opacity-0"} bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-customBlack mb-2">{member.name}</h3>
                  <p className="text-customBlue font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${locationInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Locația</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8">
              Tabăra se va desfășura în Predeluț, Bran - un loc perfect pentru dezvoltare personală și conexiune cu
              natura.
            </p>
          </div>

          <div
            className={`${locationInView ? "animate-fade-in" : "opacity-0"} bg-white rounded-2xl p-8 shadow-lg`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Google Maps Embed Placeholder */}
            <div className="bg-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="bg-gray-200 rounded-lg p-4" style={{ height: "300px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11179.97299316975!2d25.342336825850992!3d45.53034141903415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3486eb99cd875%3A0xc5d78c75f78b9f74!2s507026%20Predelu%C8%9B!5e0!3m2!1sen!2sro!4v1747562044184!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație tabără"
                ></iframe>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-customBlue mr-3" />
                <div>
                  <p className="font-medium text-customBlack">Adresa</p>
                  <p className="text-gray-600">Predeluț, Bran, Brașov</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-customBlue mr-3" />
                <div>
                  <p className="font-medium text-customBlack">Contact</p>
                  <p className="text-gray-600">Pentru detalii despre locație</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section ref={practicalRef} className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${practicalInView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-8">Informații practice</h2>
            <div className="w-16 h-1 bg-customOrange rounded-full mx-auto"></div>
          </div>

          <div
            className={`${practicalInView ? "animate-fade-in" : "opacity-0"} bg-white rounded-2xl p-8 shadow-lg border border-gray-100`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-customBlue rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-customBlack">Perioada</p>
                    <p className="text-gray-600">17–23 august</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-customOrange rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-customBlack">Locația</p>
                    <p className="text-gray-600">Predeluț, Bran</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-customBlack">Vârsta</p>
                    <p className="text-gray-600">Liceeni (14-18 ani)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-customBlack">Inclus</p>
                    <p className="text-gray-600">Cazare, masă, activități</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-customBlue">
                <h3 className="text-2xl font-bold text-customBlack mb-4">Gata să îți descoperi curajul?</h3>
                <p className="text-gray-700 mb-6">
                  Alătură-te unei experiențe care îți va schimba perspectiva asupra ta și asupra lumii.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/dare-yourself-form" className="bg-customBlue hover:bg-customOrange text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                    Înscrie-te la Dare Yourself
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                    Contactează-ne pentru detalii
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DareYourself
