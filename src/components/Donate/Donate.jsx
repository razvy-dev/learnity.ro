import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Heart, BookOpen, Users, Sparkles, ArrowRight, ExternalLink, Check } from "lucide-react"
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import outsideWorld from './assets/outside-world.jpeg'
import mediiDefav from './assets/medii-defav.jpeg';

const DonatePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeImpactStory, setActiveImpactStory] = useState(0)

  // Set loaded state after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate impact stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImpactStory((prev) => (prev + 1) % impactStories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Intersection observers for scroll animations
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const { ref: whyRef, inView: whyInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const { ref: objectivesRef, inView: objectivesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const { ref: donateRef, inView: donateInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const { ref: impactRef, inView: impactInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Sample impact stories
  const impactStories = [
    {
      name: "Maria",
      age: 16,
      quote:
        "Programul Learnity mi-a schimbat perspectiva asupra educației. Am descoperit că pot învăța în moduri creative și că vocea mea contează.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Alexandru",
      age: 17,
      quote:
        "Datorită bursei Learnity, am putut participa la workshopuri care m-au ajutat să-mi descopăr pasiunea pentru design și tehnologie.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Elena",
      age: 15,
      quote:
        "Am crescut într-o comunitate cu resurse limitate. Learnity mi-a oferit acces la educație de calitate și m-a ajutat să visez mai departe.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section ref={headerRef} className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="order-2 lg:order-1">
                <div
                  className={`transition-all duration-1000 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="inline-flex items-center bg-customLightBlue bg-opacity-30 px-4 py-2 rounded-full mb-6">
                    <Heart className="w-5 h-5 text-customBlue mr-2" />
                    <span className="text-customBlue font-medium">Fă o diferență</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bangers text-customBlack mb-6 leading-tight">
                    Susține Educația <span className="text-customBlue">pentru Viitorul</span> Tinerilor
                  </h1>

                  <p className="text-xl text-customBlack mb-8 leading-relaxed">
                    Investește în viitorul tinerilor și contribuie la crearea unei societăți mai bune prin educație de
                    calitate, creativă și accesibilă tuturor.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#donate-section"
                      className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Donează Acum
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>

                    <a
                      href="#objectives"
                      className="inline-flex items-center bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-4 px-8 rounded-xl transition-all duration-300"
                    >
                      Află Obiectivele Noastre
                    </a>
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div
                className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={img1}
                      width={800}
                      height={600}
                      alt="Elevi Learnity învățând împreună"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-customOrange text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3">
                    <p className="font-bold text-lg">Împreună facem diferența!</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-customLightBlue rounded-full opacity-50 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Education Section */}
        <section ref={whyRef} className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div
              className={`mb-12 text-center ${whyInView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4">De ce să susții educația?</h2>
              <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left image */}
              <div className={`${whyInView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:rotate-0 duration-500">
                    <img
                      src={img2}
                      width={800}
                      height={600}
                      alt="Elevi participând la un workshop creativ"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-customBlue to-transparent p-6">
                    <p className="text-white font-bold italic">
                      "Educația este cea mai puternică armă pe care o puteți folosi pentru a schimba lumea."
                    </p>
                    <p className="text-white text-sm">— Nelson Mandela</p>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div>
                <div
                  className={`prose prose-lg max-w-none text-customBlack ${whyInView ? "animate-fade-in" : "opacity-0"}`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  <p className="font-medium text-xl text-customBlue">
                    În ultima vreme, fiecare discuție despre situația social-economică și politică din România și din
                    lume pare să se încheie cu aceeași concluzie:
                  </p>

                  <p className="text-2xl font-bold italic mb-6">„Totul pleacă de la educație."</p>

                  <p>
                    Dacă ne-am cunoaște mai bine istoria, poate nu am repeta-o, crezând orbește că extremismul este
                    soluția radicală de care avem nevoie.
                  </p>

                  <p>
                    Dacă am învăța să gândim critic, în loc să memorăm mecanic orice informație ni se livrează, poate nu
                    am cădea atât de ușor pradă manipulării și dezinformării.
                  </p>

                  <p>
                    Dacă ne-ar fi cultivată încrederea în noi înșine, creativitatea și unicitatea, în loc să fim forțați
                    să ne încadrăm în standarde rigide, poate am înțelege că schimbarea depinde de noi.
                  </p>

                  <p className="font-bold text-xl text-customBlue">
                    Și, chiar dacă poate suna clișeic, generația aceasta este viitorul. Așadar, dacă nu investim în ea,
                    atunci în ce?
                  </p>
                </div>
              </div>
            </div>

            {/* Additional content */}
            <div
              className={`mt-12 bg-customLightBlue bg-opacity-10 p-8 rounded-2xl ${whyInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <p className="text-lg text-customBlack mb-4">
                Vrem să le oferim adolescenților un spațiu în care să fie ei înșiși, unde părerea și emoțiile lor
                contează, unde sunt liberi să ia decizii în funcție de propriile nevoi. Un loc în care pot învăța orice
                își doresc într-un mod aplicat și distractiv, în care se susțin unii pe ceilalți și creează conexiuni
                autentice.
              </p>

              <p className="text-lg text-customBlack">
                Lucrând cu tinerii și fiind, la rândul nostru, la început de drum, am realizat cât de important este să
                îi ascultăm și să avem încredere în ei. Au atât de multe lucruri de spus, atât de multă energie și
                dorință de implicare!
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" ref={objectivesRef} className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div
              className={`mb-16 text-center ${objectivesInView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4">
                Obiectivele noastre pentru 2025
              </h2>
              <div className="w-32 h-2 bg-customBlue mx-auto rounded-full"></div>
              <p className="text-lg text-customBlack max-w-3xl mx-auto mt-6">
                Cu ajutorul donațiilor tale, putem transforma educația și crea oportunități pentru tinerii din România.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Objective 1 */}
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${objectivesInView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={mediiDefav}
                    alt="Copii din comunități defavorizate"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-customBlue rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 -mt-12 border-4 border-white shadow-lg">
                    <Users className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-customBlack mb-3">
                    Acces la educație pentru comunități defavorizate
                  </h3>
                  <p className="text-customBlack">
                    Inspirate de experiența noastră în Brazilia, ne dorim să lansăm un proiect destinat adolescenților
                    din medii vulnerabile, oferindu-le oportunități educaționale și mentorat.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-customBlue">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-medium">Obiectiv: 100 de tineri în 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objective 2 */}
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${objectivesInView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={img3}
                    height={400}
                    width={600}
                    alt="Elevi la cursuri Learnity"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-customOrange rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 -mt-12 border-4 border-white shadow-lg">
                    <BookOpen className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-customBlack mb-3">
                    „Susține un Learnitaș" – Burse pentru elevi
                  </h3>
                  <p className="text-customBlack">
                    Prin această inițiativă, oferim burse finanțate din donații, astfel încât educația alternativă să
                    fie accesibilă tuturor celor care își doresc să crească alături de noi.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-customOrange">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-medium">Obiectiv: 50 de burse în 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objective 3 */}
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${objectivesInView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={outsideWorld}
                    alt="Tineri în experiențe practice"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-customLightOrange rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 -mt-12 border-4 border-white shadow-lg">
                    <Sparkles className="text-customBlack w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-customBlack mb-3">
                    „The Outside World" – Conectarea tinerilor cu lumea reală
                  </h3>
                  <p className="text-customBlack">
                    Oferim elevilor experiențe practice prin colaborări cu ONG-uri și companii - internshipuri, vizite
                    și voluntariat pentru a explora domeniile care îi pasionează.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-customLightOrange">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-medium">Obiectiv: 20 de parteneriate în 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`text-center ${objectivesInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <p className="text-lg text-customBlack mb-8 max-w-3xl mx-auto">
                Pentru a face toate acestea posibile, avem nevoie de sprijinul comunității. Poți contribui printr-o
                donație, parteneriate sau promovând inițiativele noastre. Orice ajutor contează!
              </p>

              <a
                href="#donate-section"
                className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Vreau să Susțin
                <Heart className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate-section" ref={donateRef} className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div
              className={`mb-16 text-center ${donateInView ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4">Modalități de Donație</h2>
              <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
              <p className="text-lg text-customBlack max-w-3xl mx-auto mt-6">
                Alege metoda preferată pentru a susține misiunea noastră de a transforma educația și a crea oportunități
                pentru tineri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Stripe Payment */}
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-gray-100 ${donateInView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="h-48 overflow-hidden bg-gradient-to-r from-customLightBlue to-customBlue flex items-center justify-center">
                  <svg className="w-48 h-auto" viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M414 174.6C414 160.5 402.5 150 388 150C373.3 150 362 160.3 362 174.8C362 195.3 380.8 201.4 394.8 205.8C404.3 208.8 412 211.3 412 219.5C412 226.8 406 232 397.5 232C388.3 232 382.3 226.3 382.3 217H362C362 236.8 376.5 250 397.8 250C419.3 250 433 236.5 433 219C433 197.3 414.3 191.5 400.3 187.3C391 184.3 383 181.8 383 174C383 167.5 388.5 162.8 397.5 162.8C406 162.8 411.5 168 411.5 174.8H414V174.6Z"
                      fill="white"
                    />
                    <path d="M217 152H197V248H217V152Z" fill="white" />
                    <path
                      d="M263.8 152H245L217 248H238.3L242.8 233.3H275.3L279.8 248H301L272.3 152H263.8ZM248 216L259 178.5L270 216H248Z"
                      fill="white"
                    />
                    <path
                      d="M349.8 152H313V248H333V214.5H349.8C370.5 214.5 386.8 203.3 386.8 183.3C386.8 163.3 370.5 152 349.8 152ZM348.5 196.8H333V169.8H348.5C358.8 169.8 366 174.8 366 183.3C366 191.8 358.8 196.8 348.5 196.8Z"
                      fill="white"
                    />
                    <path d="M477.3 152H457.3V248H477.3V152Z" fill="white" />
                    <path d="M527.5 152H507.5V248H553.5V230.3H527.5V152Z" fill="white" />
                  </svg>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-customBlack mb-4">Donează prin Stripe</h3>
                  <p className="text-customBlack mb-6">
                    Donează rapid și sigur folosind cardul tău prin platforma Stripe. Procesul este simplu, securizat și
                    poți alege să faci o donație unică sau recurentă.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Check className="text-customBlue mr-3 w-5 h-5" />
                      <span>Plată sigură și criptată</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-customBlue mr-3 w-5 h-5" />
                      <span>Primești confirmare pe email</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-customBlue mr-3 w-5 h-5" />
                      <span>Opțiuni pentru donații recurente</span>
                    </div>
                  </div>

                  <a
                    href="https://buy.stripe.com/3cscNI4ly6ld90I3cf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Donează cu Stripe
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Alternative Payment */}
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-gray-100 ${donateInView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="h-48 overflow-hidden bg-gradient-to-r from-customLightOrange to-customOrange flex items-center justify-center">
                  <Heart className="w-24 h-24 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-customBlack mb-4">Alte Modalități de Donație</h3>
                  <p className="text-customBlack mb-6">
                    Preferă o altă metodă de plată? Poți susține proiectele noastre educaționale și prin alte
                    modalități, inclusiv transfer bancar sau donații în natură.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Check className="text-customOrange mr-3 w-5 h-5" />
                      <span>Transfer bancar direct</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-customOrange mr-3 w-5 h-5" />
                      <span>Donații de echipamente sau materiale</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-customOrange mr-3 w-5 h-5" />
                      <span>Sponsorizări și parteneriate</span>
                    </div>
                  </div>

                  <a
                    href="#alternative-link-here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-customOrange hover:bg-customBlue text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Alte Modalități
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate donations */}
            <div
              className={`bg-customLightBlue bg-opacity-10 rounded-2xl p-8 ${donateInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    <svg
                      className="w-24 h-24 text-customBlue"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-2xl font-bold text-customBlack mb-4">Donații Corporative și Parteneriate</h3>
                  <p className="text-customBlack mb-6">
                    Companiile pot deveni parteneri în misiunea noastră de a transforma educația. Oferim diverse pachete
                    de sponsorizare și posibilitatea de a personaliza implicarea în funcție de valorile și obiectivele
                    companiei tale.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:contact@learnity.ro"
                      className="inline-flex items-center bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Contactează-ne
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <a
                      href="/corporate-partnerships"
                      className="inline-flex items-center bg-white border-2 border-customBlack text-customBlack hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Descarcă Broșura
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bangers text-customBlack mb-4">Întrebări Frecvente</h2>
              <div className="w-24 h-2 bg-customOrange mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-customLightBlue bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-customBlack mb-2">Cum sunt folosite donațiile?</h3>
                <p className="text-customBlack">
                  Donațiile sunt folosite pentru a finanța programele noastre educaționale, pentru a oferi burse
                  elevilor din medii defavorizate și pentru a dezvolta noi inițiative care să îmbunătățească accesul la
                  educație de calitate.
                </p>
              </div>

              <div className="bg-customLightBlue bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-customBlack mb-2">Pot să deduc fiscal donația mea?</h3>
                <p className="text-customBlack">
                  Da, Learnity este o organizație non-profit înregistrată legal, iar donațiile către noi sunt
                  deductibile fiscal conform legislației în vigoare. Vei primi o confirmare a donației tale care poate
                  fi folosită pentru deduceri fiscale.
                </p>
              </div>

              <div className="bg-customLightBlue bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-customBlack mb-2">Pot să donez și în alt mod decât financiar?</h3>
                <p className="text-customBlack">
                  Absolut! Acceptăm și apreciem donații de materiale educaționale, echipamente, spații pentru evenimente
                  sau chiar timp și expertiză. Contactează-ne pentru a discuta despre cum poți contribui.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-customLightOrange bg-opacity-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bangers text-customBlack mb-6">Împreună Putem Face Diferența</h2>
            <p className="text-lg text-customBlack mb-8 max-w-2xl mx-auto">
              Fiecare donație, indiferent de mărime, contribuie la crearea unui viitor mai bun pentru tinerii din
              România. Alătură-te misiunii noastre de a transforma educația!
            </p>
            <a
              href="#donate-section"
              className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donează Acum
              <Heart className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DonatePage

