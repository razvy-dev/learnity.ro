"use client"

import { useState, useEffect } from "react"
import { Calendar, ExternalLink, Search, ChevronDown, ChevronUp, Mail } from "lucide-react"

const Newsletters = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [newsletters, setNewsletters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Set visibility to true after component mounts to trigger animations once
  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    fetch("https://us-central1-learnity-d8d50.cloudfunctions.net/getNewsletters")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("API response:", data) // Add this to debug
        if (data && data.campaigns && Array.isArray(data.campaigns)) {
          setNewsletters(data.campaigns)
        } else {
          setError("Datele primite nu sunt în formatul așteptat.")
        }
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching newsletters:", err)
        setError("A apărut o eroare la încărcarea newsletterelor. Te rugăm să încerci din nou mai târziu.")
        setIsLoading(false)
      })
  }, [])

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("ro-RO", options)
  }

  const getYears = () => {
    if (!newsletters || newsletters.length === 0) return []
    const years = newsletters.map((newsletter) => new Date(newsletter.send_time).getFullYear())
    return [...new Set(years)].sort((a, b) => b - a) // Sort descending
  }

  // Filter newsletters based on search term and year
  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = yearFilter === "all" || new Date(newsletter.send_time).getFullYear().toString() === yearFilter
    return matchesSearch && matchesYear
  })

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-20 px-4 bg-gradient-to-b from-customLightBlue to-customWhite relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
            <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="inline-block bg-white p-4 rounded-full mb-6 shadow-md">
                <Mail className="w-12 h-12 text-customBlue" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bangers text-customBlack mb-6 italic transform -rotate-1">
                Newsletterele Noastre
              </h1>
              <p className="text-xl text-customBlack mb-8">
                Descoperă cele mai recente noutăți, evenimente și resurse educaționale din comunitatea Learnity. Arhiva
                noastră de newslettere îți oferă acces la toate informațiile importante.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletters section */}
        <section className="py-16 px-4 bg-customWhite">
          <div className="max-w-7xl mx-auto">
            {/* Search and filters */}
            <div
              className={`mb-12 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="bg-customLightBlue bg-opacity-30 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-customBlack">Caută în arhivă</h2>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center text-customBlue hover:text-customOrange transition-colors duration-300 md:hidden"
                  >
                    {showFilters ? "Ascunde filtrele" : "Arată filtrele"}
                    {showFilters ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                  </button>
                </div>

                <div className={`md:flex gap-4 ${showFilters ? "block" : "hidden md:flex"}`}>
                  {/* Search input */}
                  <div className="flex-grow mb-4 md:mb-0">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Caută după titlu..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customBlue"
                      />
                    </div>
                  </div>

                  {/* Year filter */}
                  <div className="w-full md:w-48">
                    <select
                      value={yearFilter}
                      onChange={(e) => setYearFilter(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customBlue appearance-none bg-white"
                    >
                      <option value="all">Toți anii</option>
                      {getYears().map((year) => (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletters list */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-customBlue"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">{error}</div>
              ) : filteredNewsletters.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-customBlack mb-2">Niciun newsletter găsit</h3>
                  <p className="text-gray-600">
                    Nu am găsit newslettere care să corespundă criteriilor tale de căutare.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNewsletters.map((newsletter, index) => (
                    <NewsletterCard key={newsletter.id} newsletter={newsletter} index={index} />
                  ))}
                </div>
              )}
            </div>

            {/* Subscribe section */}
            <div
              className={`mt-16 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="bg-customBlue rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bangers mb-4 italic transform -rotate-1">Abonează-te la Newsletter</h2>
                  <p className="mb-6">
                    Primește cele mai recente noutăți și resurse educaționale direct în inbox-ul tău. Ne asigurăm că vei
                    fi mereu la curent cu activitățile și evenimentele Learnity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Adresa ta de email"
                      className="flex-grow px-4 py-3 rounded-l-xl text-customBlack focus:outline-none focus:ring-2 focus:ring-customOrange"
                    />
                    <button className="bg-customOrange hover:bg-customLightOrange text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 transform hover:scale-105">
                      Abonează-te
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const NewsletterCard = ({ newsletter, index }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("ro-RO", options)
  }

  // Determine card color based on index
  const getCardColor = (index) => {
    const colors = [
      "bg-customLightBlue hover:bg-customBlue",
      "bg-customLightOrange hover:bg-customOrange",
      "bg-customWhite hover:bg-gray-100",
    ]
    return colors[index % colors.length]
  }

  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${getCardColor(index)}`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4 text-sm text-customBlack">
          <Calendar size={16} className="mr-2" />
          <span>{formatDate(newsletter.send_time)}</span>
        </div>

        <h3 className="text-xl font-bold text-customBlack mb-6 line-clamp-2 h-14">{newsletter.title}</h3>

        <a
          href={newsletter.archive_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-customBlue hover:bg-customBlue hover:text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm"
        >
          Citește newsletter
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  )
}

export default Newsletters
