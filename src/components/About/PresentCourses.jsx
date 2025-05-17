import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Calendar, User, MapPin, ChevronDown, ChevronUp } from "lucide-react"
// import psihologie from './assets/';
// import comunicare from './assets/';
import pastilaDeArta from './assets/pastila-de-arta.jpg';
// import pda from './assets/';
import hotiiDeSubiecte from './assets/hotii-de-subiecte.jpg';
import ri from './assets/ri.jpg';
import filosofie from './assets/filosofie.jpg'
import oymys from './assets/oymys.jpg'
import creativeThinking from './assets/creative-thinking.jpg';
import psiho from './assets/psiho.jpeg';
import pda from './assets/pda.jpeg';
import { Link } from "react-router-dom";
import paty from './assets/paty.jpeg';
import sdj from './assets/sdj.jpeg';
import comunicare from './assets/comunicare.jpg'
import bootcamp1 from './assets/build.jpeg';
import bootcamp2 from './assets/thinkbig.jpeg';
import bootcamp3 from './assets/create.jpeg';
import branding from './assets/branding.jpeg';
import writing from './assets/writing.jpeg';

// Sample data for course modules
const courseModules = [
  {
    id: "1",
    name: "Modulul 1",
    description: "Courses that develop artistic expression, imagination, and creative thinking skills.",
    courses: [
      {
        id: 1,
        name: "Psiholohie aplicată",
        description:
          "Ești pasionat de psihologie și de firea umană? Vrei să înțelegi mai bine subiecte precum mecanismele de apărare, tulburările de personalitate și traumele de respingere și de abandon? Prin intermediul cursului de „Psihologie Aplicată”, susținut de psihoterapeutul și psihologul clinician Alexandru Necșulescu, vei primi răspunsuri la aceste întrebări (și nu numai) și vei putea explora aceste subiecte prin intermediul exercițiilor practice din fiecare sesiune.",
        teacher: "Alex Necșulescu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Luni, 19:30 - 21:30",
        image: psiho,
      },
      {
        id: 2,
        name: "Comunicare",
        description:
          "Te invităm la un curs captivant despre comunicare, unde vom descoperi împreună cele trei stări: Părinte, Adult și Copil și modul în care acestea ne modelează comportamentul în relații. Vom explora cum se manifestă fiecare stare în comunicarea noastră de zi cu zi și cum influențează felul în care suntem percepuți și în care suntem tratați de ceilalți. Prin exerciții interactive, vom experimenta atât laturile constructive, cât și pe cele mai puțin constructive ale acestor stări, iar împreună vom căuta soluții pentru a îmbunătăți comunicarea cu părinții, profesorii și colegii.",
        teacher: "Smaranda Nay",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Marți, 19:30 - 21:30",
        image: comunicare,
      },
      {
        id: 3,
        name: "Pastila de Artă",
        description:
          "Arta este pentru toată lumea, oricine poate să se exprime prin intermediul său. Nivelul de skill-uri sau cunoștințe nu contează, ci doar dorința și curajul de a-ți exterioriza trăirile și ideile prin această modalitate. Vrem să creăm un spațiu în cadrul căruia putem cu toții să ne regăsim și să comunicăm cine suntem cu ajutorul mijloacelor plastice. În cadrul acestui curs vom avea 6 ședințe în care vom explora diferite tipuri de artă - pictura, modelajul, fotografia, gravura, fiecare având profesori separați, specializați pe fiecare domeniu în parte.",
        teacher: "Andra Achim, Ana Guțǎ, Emma Blaga, Costin Duțu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Luni, 19:30 - 21:30",
        image: pastilaDeArta,
      },
      {
        id: 4,
        name: "Povești despre antreprenoriat",
        description:
          "Te interesează domeniul antreprenoriatului și ți-ai dori să afli cum arată viața unui antreprenor? 💸 Vrei să știi care este importanța cifrelor într-o afacere, cum să îți prezinți proiectul, cum să îi determini pe oameni să cumpere de la tine sau cum să îți creezi echipa? 🤔 Cursul „Povești despre antreprenoriat”, susținut de Cristian Chirnogeanu își propune să vină cu răspunsuri la aceste întrebări prin poveștile și experiențele altor antreprenori invitați.",
        teacher: "Cristi Chirnogeanu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Joi, 19:30 - 21:30",
        image: pda
      },
      {
        id: 5,
        name: "Brainsotrming: Hoții de subiecte",
        description:
          "Anul acesta, Learnity a colaborat cu Promocrat pentru a crea o experiență cât mai aplicată și fun pentru elevii pasionați de marketing. 🚀✨Ghidați de Cosmin Muscălescu, pe parcursul primului modul, learnitașii au avut ocazia să contribuie la gândirea și implementarea strategiei de promovare pentru filmul „Hoții de Subiecte”. 🎬🔎",
        teacher: "Cosmin Mușcălescu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Joi, 19:30 - 21:30",
        image: hotiiDeSubiecte,
      },
    ],
  },
  {
    id: "2",
    name: "Modulul 2",
    description: "Courses focused on science, technology, engineering, and mathematics through hands-on exploration.",
    courses: [
      {
        id: 1,
        name: "Filosofie politică",
        description:
          "Children conduct exciting experiments to discover fundamental scientific principles. This hands-on course develops critical thinking skills and scientific curiosity.",
        teacher: "Petrișor Ivan",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Luni, 19:30 - 21:30",
        image: filosofie,
      },
      {
        id: 2,
        name: "Relații internaționale",
        description:
          "Ești interesat de relațiile diplomatice dintre state? Vrei să afli mai multe despre cum funcționează mecanismele din spatele instituțiilor care guvernează, despre regimurile politice și chiar despre drepturile tale? Hai la cursul „Relații internaționale”, susținut de Rebeca Bașuț și Teodora Bălăceanu, unde îți vom răspunde la toate aceste întrebări și la multe altele, punând toate informațiile în contexte actuale și relevante pentru generația noastră.",
        teacher: "Rebeca Bășuț & Teodora Bălăceanu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Luni, 19:30 - 21:30",
        image: ri,
      },
      {
        id: 3,
        name: "Creative Thinking",
        description:
          "This course makes mathematics engaging through puzzles, games, and real-world applications that develop problem-solving skills and mathematical confidence.",
        teacher: "Cosmin Mușcălescu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Joi, 19:30 - 21:30",
        image: creativeThinking,
      },
      {
        id: 4,
        name: "To be or not to be",
        description:
          'Vrei să afli mai multe despre tine, să-ți ieși din zona de confort și să înveți să te exprimi liber? ✨ Dacă răspunsul este da, atunci cursul "To be or not to be", susținut de Patricia Katona, s-ar putea să fie exact ce ai nevoie.Prin intermediul jocurilor de actorie și de improvizație, te vom ajuta să scapi de inhibiții și să faci cunoștință cu varianta ta cea mai autentică. 🎭  Promitem că o să te distrezi tare!!',
        teacher: "Patricia Katone",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Marți, 19:30 - 21:30",
        image: paty,
      },
      {
        id: 5,
        name: "Self Discovery Journey",
        description:
          "Students explore ecosystems, sustainability, and environmental stewardship through hands-on activities, outdoor exploration, and conservation projects.",
        teacher: "Miruna Anin",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Vineri, 19:30 - 21:30",
        image: sdj,
      },
      {
        id: 6,
        name: "On Your Magic & Your Shit",
        description:
          "This course introduces principles of design and architecture as children create structures, models, and spaces while developing spatial reasoning and creative problem-solving.",
        teacher: "Andreea Mirescu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Thursdays, 4:00-5:30 PM",
        image: oymys,
      },
    ],
  },
  {
    id: "3",
    name: "Modulul 3",
    description: "Courses that develop essential life skills, emotional intelligence, and physical wellbeing.",
    courses: [
      {
        id: 1,
        name: "Build Up Camp",
        description:
          "Construim căsuțe 🛠️ și deconstruim concepții. Trei zile în mijlocul naturii 🌿, departe de agitația orașului, în care ne reconectăm la un alt ritm de viață, punem mâna pe unelte 🪚 și ne întrebăm ce fel de lume vrem să construim – în afara și înăuntrul nostru. ✨ Un bootcamp despre viață alternativă, comunitate, perspective noi și autenticitate. 🫂 Despre traineri: Traian Brumă (@traianbruma ) Traian este unul dintre mentorii noştri, fondatorul Universității Alternative și unul dintre pionierii educației alternative din România. A călătorit prin lume explorând comunități de învățare și astăzi, împreună cu prietenii săi, construiește propriul lor “sat”– un vis despre viață în ritm natural, educație și comunitate.🌿",
        teacher: "Lisa Thompson",
        place: "Zona Vălenii de Munte",
        timeperiod: "20 - 22 iunie",
        image: bootcamp1,
      },
      {
        id: 2,
        name: "Think Big Camp",
        description:
          "Ai o idee care merită să fie pusă în lume, dar nu știi de unde să începi?⚡️ Timp de 3 zile, ne distrăm, transformăm ideile în concepte reale, ne antrenăm gândirea strategică și creativă, și învățăm cum să lucrăm în echipă – cu scop, deadline și pitch. Iar asta nu e tot, proiectul câștigător va fi susținut de Learnity pentru a deveni realitate!❤️‍🔥🌟 Despre traineri: Sandra Muscălescu (@sandramuscalescu ) Sandra este designer grafic cu peste 10 ani de experiență, recunoscută pentru creativitatea ei remarcabilă și atenția la detalii. A lucrat în proiecte diverse – de la publicitate și platforme digitale, până la jocuri video și animație – și aduce în bootcamp o viziune artistică originală și o pasiune autentică pentru artă și design. Cu un simț fin al esteticii și o înțelegere solidă a principiilor de design, Sandra îi va inspira pe liceeni să creeze cu încredere și imaginație. Cosmin Muscălescu (@kosminach ) Cosmin e genul de om care nu doar că vede ideile înainte să prindă contur, dar le și pune pe roate cu un mix de curaj, umor și strategie. Îi place să dea sens lucrurilor complicate, să provoace gândirea convențională și să transforme “hmm...” în “a-ha!”. În bootcamp, vine cu mult chef de joacă serioasă: branding, storytelling și tot ce ține de comunicare cu personalitate. Spoiler: s-ar putea să-ți dea peste cap felul în care vezi creativitatea — în cel mai bun sens posibil.",
        teacher: "Cosmin Mușcălescu",
        place: "Slănic, Prahova",
        timeperiod: "16 - 18 mai",
        image: bootcamp2,
      },
      {
        id: 3,
        name: "Create Camp",
        description:
          "Trei zile la mare, departe de agitația orașului, în care ne dăm voie să simțim, să observăm și să spunem lucruri care contează – prin imagine, sunet și poveste. Explorăm, învățăm, ne exprimăm artistic și autentic. Fotografie 📷, video 🎥, sunet și perspective noi. Un bootcamp pentru adolescenții care vor să-și găsească vocea și să o transpună în artă. Despre traineri: Costin Dutu (@theusvrper ) Costin este artist vizual si muzician, foloseste experimentul ca si practica recurenta in lucrarile sale - de la performance art, sculptura, gravura si video, pana la sound art, muzica industrial, drone si harsh noise. Activeaza de 8 ani pe scena de arta romaneasca si internationala, in parcursul sau artistic sustinand performance-uri de sunet si participand la expozitii in galerii din Bucuresti, Timisoara si Shanghai. Incurajeaza practica artistica libera, sincera si asumata, situata in afara canoanelor artistice consacrate, notiunea de counter-culture si counter-movement jucand un rol vital in filosofia sa de viata. Emma Blaga (@earthbody__ ) Ema este artistă multi-medium, îmbină arta vizuală cu muzica experimentală. Lucrează cu land art, fotografie si tehnici de imprimare analog - contact printing, monotipie, gravură, şi sculptură. Performează folosindu-și atât vocea și instrumentele clasice precum pianul/instrumentele de percuție, cât și utilizând sintetizatoare, drum machines si instrumente electronice diy. Practica sa artistică gravitează in jurul temelor sociale și politice precum activismul pentru mediu și pentru drepturile omului și al animalelor, dar si primitivism, misticism si traiul in comunități alternative.",
        teacher: "David Johnson",
        place: "Corbu, Constanța",
        timeperiod: "13 - 15 iunie",
        image: bootcamp3,
      },
      {
        id: 4,
        name: "Personal Branding",
        description:
          "Cum te prezinți în fața lumii atunci când nu ești acolo să vorbești pentru tine?✨ Imaginea ta, online și offline, este primul tău ambasador. În acest curs de Personal Branding, Mihaela Tomescu – career coach și fondatoarea PuntoUp Impact – te va ajuta să înțelegi cum să îți construiești un brand personal autentic și puternic. Personal branding-ul nu este doar pentru adulți sau pentru cei care lucrează deja; este esențial și pentru adolescenți. 🌐 Într-o lume în care prezența online contează tot mai mult, să știi cine ești, ce valori ai și cum să le comunici: îți crește încrederea în tine, te diferențiază în proiectele la care aplici , te pregătește pentru orice drum profesional vei alege",
        teacher: "Mihaela Tomescu",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Marți, 19:30 - 21:30",
        image: branding,
      },
      {
        id: 5,
        name: "Creative Writing",
        description:
          "Vrei să scrii, dar nu știi de unde să începi? ✍️ Sau simți că ai povești de spus, dar cauți forma potrivită? Hai la cursul de Scriere Creativă, susținut de Ștefania Mihalache, poetă și prozatoare! Timp de 7 întâlniri, vei experimenta exerciții inedite care îți vor scoate creativitatea din zona de confort și vei explora texte din lumi și stiluri literare diferite. Împreună, vom descoperi: ce înseamnă să îți găsești propria voce, cum să îți ascuți simțul observației, cum să îți construiești un stil autentic. Cursul este despre curajul de a crea, despre joaca serioasă cu ideile și despre transformarea pasiunii pentru scris într-o practică vie.",
        teacher: "Ștefania Mihalache",
        place: "Str. Duzilor nr. 23",
        timeperiod: "Luni, 19:30 - 21:30",
        image: writing,
      },
    ],
  },
]

const PresentCoursesSection = () => {
  const [activeModule, setActiveModule] = useState("1")
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

  const activeModuleData = courseModules.find((module) => module.id === activeModule)

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite bg-opacity-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic">
              Cursurile acestui an
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Explorați câteva dintre cursurile noastre diverse concepute pentru a inspira curiozitate, creativitate și creștere. Fiecare curs reprezintă un mediu de susținere în care copiii își pot dezvolta noi abilități și își pot descoperi pasiunile.
          </p>
        </div>

        {/* Module tabs */}
        <div
          className={`flex flex-wrap justify-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          {courseModules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`px-6 py-3 mx-2 mb-3 rounded-full font-bold transition-all duration-300 ${
                activeModule === module.id
                  ? "bg-customBlue text-white shadow-md"
                  : "bg-white text-customBlack hover:bg-customLightOrange"
              }`}
            >
              {module.name}
            </button>
          ))}
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeModuleData?.courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* Course image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  height={300}
                  width={500}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Course content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-customBlack mb-3">{course.name}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <User size={18} className="text-customBlue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-customBlack">{course.teacher}</span>
                  </div>

                  <div className="flex items-start">
                    <MapPin size={18} className="text-customBlue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-customBlack">{course.place}</span>
                  </div>

                  <div className="flex items-start">
                    <Calendar size={18} className="text-customBlue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-customBlack">{course.timeperiod}</span>
                  </div>
                </div>

                {/* Toggle description */}
                <div>
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
                        <span>Read Description</span>
                        <ChevronDown size={20} className="ml-1" />
                      </>
                    )}
                  </button>

                  {/* Expandable description */}
                  {expandedCourse === course.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                      <p className="text-customBlack">{course.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Registration button */}
        <div
          className={`text-center mt-16 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.9s" }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            Înscrie-te la cursuri
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PresentCoursesSection

