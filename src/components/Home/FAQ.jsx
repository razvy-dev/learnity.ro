import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronDown, ChevronUp, Search, HelpCircle, School, Calendar, Users, BookOpen, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general")
  const [activeQuestions, setActiveQuestions] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // FAQ categories with icons
  const categories = [
    { id: "general", name: "Despre Learnity", icon: <School className="w-5 h-5" /> },
    { id: "admissions", name: "Admitere", icon: <Calendar className="w-5 h-5" /> },
    { id: "curriculum", name: "Curriculum", icon: <BookOpen className="w-5 h-5" /> },
    { id: "community", name: "Comunitate", icon: <Users className="w-5 h-5" /> },
    { id: "activities", name: "Activități", icon: <Sparkles className="w-5 h-5" /> },
  ]

  // FAQ data organized by category
  const faqData = {
    general: [
      {
        question: "Ce este Learnity?",
        answer:
          "Learnity este o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.",
      },
      {
        question: "Cum functioneaza pachetele?",
        answer:
          "Poți combina experiențele noastre educaționale în funcție de interesele și obiectivele tale. Poți alege să participi doar la un curs sau să îți creezi un pachet care să includă mai multe cursuri și acces la partea de Playground – spațiul nostru dedicat învățării autonome, explorării și conexiunii în comunitate.Dacă alegi mai multe cursuri, beneficiezi de reduceri progresive, iar dacă adaugi și partea de Playground, ai acces la o ofertă specială. Pentru cei care vor să se implice cât mai mult, pachetele avansate oferă și extra beneficii, cum ar fi acces gratuit la partea de Playground atunci când te înscrii la trei cursuri sau pachetul All Inclusive.Scopul acestor pachete este să îți ofere flexibilitate și să îți permită să experimentezi în ritmul tău, alături de alți adolescenți care împărtășesc aceleași curiozități și pasiuni.",
      },
      {
        question: "Oferim diploma la final?",
        answer:
          "Noi credem că învățarea ar trebui să fie despre curiozitate, pasiune și explorare, nu doar despre a adăuga încă o diplomă în teanc. De aceea, nu punem accent pe certificări formale, ci pe progresul real și pe dezvoltarea personală. Totuși, pentru cei care au nevoie, putem oferi o diplomă la cerere. În locul unui sistem clasic de evaluare, folosim un model de tracking al progresului bazat pe Badge-uri. Fiecare Learnitaș își setează propriile obiective, criterii și metode de evaluare, iar la fiecare Playground Day, ne uităm împreună la parcursul fiecăruia: ce s-a realizat, ce provocări au apărut și cum putem susține mai departe procesul de învățare.",
      },
      {
        question: "Cum comunicăm cu părinții?",
        answer:
          "Comunicarea cu părinții este cât se poate de deschisă și bazată pe o relație de încredere reciprocă. Suntem atenți la dezvoltarea fiecărui adolescent din comunitatea noastră și ne dorim să lucrăm împreună pentru a găsi cele mai bune variante de creștere și evoluție pentru el. Credem că un dialog autentic și colaborativ între Learnity, părinți și adolescenți este esențial pentru a le oferi acestora sprijinul de care au nevoie în parcursul lor.",
      },
    ],
    admissions: [
      {
        question: "Cum pot înscrie copilul meu la Learnity?",
        answer:
          "Procesul de înscriere la Learnity începe cu completarea formularului online de pe site-ul nostru, urmată de o vizită la școală și o întâlnire cu echipa noastră. Această întâlnire ne ajută să înțelegem mai bine nevoile și interesele copilului dumneavoastră. După aceasta, organizăm o zi de probă pentru copil, pentru a experimenta direct mediul Learnity. Decizia finală se bazează pe compatibilitatea dintre valorile familiei, nevoile copilului și abordarea noastră educațională.",
      },
      {
        question: "Care sunt costurile de școlarizare la Learnity?",
        answer:
          "Taxele de școlarizare variază în funcție de programul ales și nivelul de studiu. Oferim opțiuni flexibile de plată, inclusiv rate lunare, trimestriale sau anuale. De asemenea, avem un program de burse pentru familiile care au nevoie de sprijin financiar. Pentru informații detaliate despre costuri, vă invităm să consultați secțiunea 'Taxe și Burse' de pe site sau să ne contactați direct.",
      },
      {
        question: "Există un proces de selecție pentru admitere?",
        answer:
          "La Learnity, nu organizăm examene de admitere tradiționale. Procesul nostru se concentrează pe identificarea compatibilității dintre valorile și așteptările familiei, nevoile copilului și abordarea noastră educațională. Evaluăm dacă putem oferi mediul potrivit pentru dezvoltarea optimă a fiecărui copil. Diversitatea este valorificată în comunitatea noastră, și căutăm elevi cu perspective, talente și interese variate.",
      },
      {
        question: "Pot transfera copilul meu de la o școală tradițională la Learnity în timpul anului școlar?",
        answer:
          "Da, acceptăm transferuri pe parcursul anului școlar, în funcție de disponibilitatea locurilor. Avem un program de integrare special conceput pentru a ajuta elevii transferați să se adapteze la mediul și metodele noastre de învățare. Procesul include o evaluare inițială pentru a identifica punctele forte și ariile de dezvoltare, precum și un plan personalizat de tranziție.",
      },
    ],
    curriculum: [
      {
        question: "Ce materii studiază elevii la Learnity?",
        answer:
          "Curriculum-ul Learnity include materiile fundamentale (matematică, limbă și comunicare, științe, istorie, geografie), completate de arii de studiu inovative precum: gândire critică și rezolvarea problemelor, educație socio-emoțională, arte și creativitate, tehnologie și programare, sustenabilitate și educație civică. Abordăm aceste subiecte interdisciplinar, prin proiecte tematice care conectează cunoștințele din diverse domenii.",
      },
      {
        question: "Cum sunt evaluați elevii la Learnity?",
        answer:
          "La Learnity, evaluarea este un proces continuu, formativ și multidimensional. În locul testelor standardizate, folosim portofolii, proiecte, prezentări, auto-evaluare și feedback de la colegi. Evaluăm nu doar cunoștințele academice, ci și dezvoltarea abilităților sociale, emoționale și creative. Oferim feedback personalizat și constructiv, care evidențiază progresul și identifică următorii pași în învățare.",
      },
      {
        question: "Cum abordați tehnologia în procesul de învățare?",
        answer:
          "Integrăm tehnologia ca instrument pentru învățare, nu ca scop în sine. Elevii folosesc dispozitive digitale pentru cercetare, creație de conținut, colaborare și dezvoltarea proiectelor. Învață programare, design digital și gândire computațională prin aplicații practice. Totodată, promovăm o relație echilibrată cu tehnologia, punând accent pe interacțiunile umane directe și activitățile în natură.",
      },
      {
        question: "Cum pregătiți elevii pentru examene naționale și admitere la facultate?",
        answer:
          "Deși abordarea noastră diferă de cea tradițională, ne asigurăm că elevii sunt bine pregătiți pentru examene naționale și admitere la facultate. Oferim programe specifice de pregătire pentru aceste examene în anii terminali, menținând în același timp filosofia noastră de învățare prin înțelegere profundă, nu memorare. Rata noastră de promovabilitate și rezultatele la admiterea în învățământul superior demonstrează eficiența acestei abordări.",
      },
    ],
    community: [
      {
        question: "Cum sunt implicați părinții în comunitatea Learnity?",
        answer:
          "Părinții sunt parteneri esențiali în procesul educațional la Learnity. Organizăm întâlniri regulate părinte-profesor, ateliere pentru părinți, evenimente comunitare și oportunități de voluntariat. Părinții pot contribui cu expertiza lor prin prezentări, mentorat sau coordonarea unor activități extracurriculare. Comunicarea transparentă și colaborarea strânsă între școală și familie sunt fundamentale pentru filosofia noastră educațională.",
      },
      {
        question: "Ce fel de profesori predau la Learnity?",
        answer:
          "Echipa noastră este formată din educatori pasionați, cu pregătire în pedagogii alternative și expertiză în domeniile lor. Mulți dintre profesorii noștri au experiență internațională sau provin din medii profesionale diverse, aducând perspective valoroase în procesul educațional. Toți participă la dezvoltare profesională continuă și colaborează pentru a crea experiențe de învățare integrate și relevante pentru elevi.",
      },
      {
        question: "Cum abordați diversitatea și incluziunea la Learnity?",
        answer:
          "Diversitatea și incluziunea sunt valori fundamentale la Learnity. Creăm un mediu în care fiecare elev se simte văzut, respectat și valorizat, indiferent de origine, abilități sau circumstanțe personale. Curriculum-ul nostru reflectă perspective diverse și promovează înțelegerea interculturală. Oferim sprijin personalizat pentru elevii cu nevoi educaționale speciale și colaborăm cu specialiști pentru a asigura incluziunea autentică.",
      },
      {
        question: "Există oportunități pentru elevi de a se implica în comunitatea locală?",
        answer:
          "Absolut! Implicarea în comunitate este o componentă esențială a educației la Learnity. Elevii participă la proiecte de service learning, colaborări cu ONG-uri locale, inițiative de protecție a mediului și evenimente culturale comunitare. Aceste experiențe dezvoltă responsabilitatea civică, empatia și înțelegerea problemelor sociale reale, pregătindu-i pe elevi să devină cetățeni activi și implicați.",
      },
    ],
    activities: [
      {
        question: "Ce activități extracurriculare oferă Learnity?",
        answer:
          "Learnity oferă o gamă diversă de activități extracurriculare, inclusiv: cluburi de artă, muzică și teatru; echipe de robotică și programare; ateliere de scriere creativă și jurnalism; cluburi de dezbateri și model ONU; activități sportive și în aer liber; proiecte de antreprenoriat social. Aceste activități sunt integrate în programul școlar și sunt concepute pentru a dezvolta pasiuni, talente și abilități complementare curriculum-ului academic.",
      },
      {
        question: "Organizați excursii și tabere educaționale?",
        answer:
          "Da, excursiile și taberele educaționale sunt parte integrantă din experiența Learnity. Organizăm ieșiri regulate în natură, vizite la muzee, instituții culturale și companii locale. De asemenea, avem tabere tematice sezoniere și o tabără anuală internațională. Aceste experiențe extind învățarea dincolo de sala de clasă, oferind contexte autentice pentru aplicarea cunoștințelor și dezvoltarea abilităților sociale.",
      },
      {
        question: "Cum încurajați creativitatea și inovația la Learnity?",
        answer:
          "Creativitatea și inovația sunt cultivate prin spații de învățare flexibile, materiale diverse și timp dedicat explorării libere. Avem un makerspace echipat cu instrumente pentru proiecte DIY, un studio de artă și un laborator digital. Provocăm elevii să găsească soluții originale la probleme reale și celebrăm procesul creativ, nu doar rezultatul final. Profesorii modelează gândirea creativă și creează un mediu sigur pentru asumarea riscurilor și experimentare.",
      },
      {
        question: "Există oportunități pentru învățare experiențială și în afara școlii?",
        answer:
          "Învățarea experiențială este fundamentală pentru abordarea Learnity. Pe lângă excursii și tabere, oferim: stagii de practică pentru elevii mai mari; proiecte în colaborare cu experți din diverse domenii; schimburi interșcolare naționale și internaționale; participare la competiții și conferințe. Aceste experiențe conectează teoria cu practica și expun elevii la diverse perspective și oportunități profesionale.",
      },
    ],
  }

  // Toggle question expansion
  const toggleQuestion = (questionText) => {
    setActiveQuestions((prev) =>
      prev.includes(questionText) ? prev.filter((q) => q !== questionText) : [...prev, questionText],
    )
  }

  // Filter questions based on search query
  const getFilteredQuestions = () => {
    if (!searchQuery.trim()) {
      return faqData[activeCategory]
    }

    const query = searchQuery.toLowerCase()
    let results = []

    // Search across all categories
    Object.values(faqData).forEach((categoryQuestions) => {
      const filtered = categoryQuestions.filter(
        (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
      )
      results = [...results, ...filtered]
    })

    return results
  }

  const filteredQuestions = getFilteredQuestions()

  return (
    <section ref={ref} className="py-20 px-4 bg-customWhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customLightBlue rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customBlue rounded-full opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-12 ${inView ? "animate-slide-up" : "opacity-0"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="inline-flex items-center bg-customLightBlue bg-opacity-30 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-customBlue mr-2" />
            <span className="text-customBlue font-medium">Întrebări și Răspunsuri</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-4">Întrebări Frecvente</h2>
          <p className="text-lg text-customBlack max-w-2xl mx-auto">
            Află răspunsuri la cele mai comune întrebări despre Learnity, metodele noastre de predare și comunitatea
            noastră.
          </p>
        </div>

        {/* Search bar */}
        <div className={`mb-10 ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Caută întrebări..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Category tabs - only show if not searching */}
        {!searchQuery && (
          <div
            className={`flex flex-wrap justify-center mb-10 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-customBlue text-white shadow-md"
                    : "bg-white text-customBlack hover:bg-customLightBlue border border-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ accordion */}
        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <div
                key={`${item.question}-${index}`}
                className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-500 ${
                  activeQuestions.includes(item.question) ? "shadow-md" : ""
                } ${inView ? "animate-fade-in" : "opacity-0"}`}
                style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleQuestion(item.question)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left"
                >
                  <span className="font-bold text-lg text-customBlack pr-8">{item.question}</span>
                  {activeQuestions.includes(item.question) ? (
                    <ChevronUp className="flex-shrink-0 w-5 h-5 text-customBlue" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 w-5 h-5 text-customBlue" />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeQuestions.includes(item.question) ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-customBlack leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`text-center py-10 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-customLightBlue bg-opacity-10 rounded-xl p-8 inline-block">
                <HelpCircle className="w-12 h-12 text-customBlue mx-auto mb-4 opacity-50" />
                <p className="text-lg text-customBlack">Nu am găsit întrebări care să corespundă căutării tale.</p>
                <p className="text-customBlack mt-2">
                  Încearcă alte cuvinte cheie sau{" "}
                  <a href="/contact" className="text-customBlue hover:underline">
                    contactează-ne direct
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="bg-gradient-to-r bg-customLightOrange bg-opacity-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-customBlack mb-4">Nu ai găsit răspunsul căutat?</h3>
            <p className="text-customBlack mb-6">
              Suntem aici să răspundem la toate întrebările tale. Contactează-ne direct și îți vom răspunde cât mai
              curând posibil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Contactează-ne
              </Link>
              <a
                href="mailto:contact.learnity@gmail.com"
                className="inline-flex items-center bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Programează o vizită
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

