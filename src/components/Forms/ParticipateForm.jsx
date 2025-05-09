import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, MapPin, User, Send, ChevronDown, ChevronUp, Info } from "lucide-react"
import { useParams } from "react-router-dom"
import useEventsStore from "../../state/useEvents"
import LoadingPage from "../Loading/LoadingPage"
import useAuth from "../../state/useAuth"

const ParticipateForm = () => {
  const [ event, setEvent ] = useState();
  const { id } = useParams();
  const { addParticipant, fetchEventById } = useEventsStore();
  const { user } = useAuth();

  useEffect(() => {
    const getEvent = async () => {
      const ev = await fetchEventById(id);
      setEvent(ev);
    }
  
    getEvent();
  }, [id, fetchEventById]);

  const [formData, setFormData] = useState({
    nume: "",
    clasa: "",
    liceu: "",
    telefon: "",
    cumAiAflat: "",
    insotitor: "nu",
    altceva: "",
  })

  const [showDetails, setShowDetails] = useState(true)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const formatEventDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const validateForm = () => {
    const newErrors = {}
  
    // Only validate all fields if user is not logged in or not accepted
    if (!user || !user.accepted) {
      if (!formData.nume.trim()) newErrors.nume = "Te rugăm să completezi numele"
      if (!formData.clasa.trim()) newErrors.clasa = "Te rugăm să completezi clasa"
      if (!formData.liceu.trim()) newErrors.liceu = "Te rugăm să completezi liceul"
      if (!formData.telefon.trim()) {
        newErrors.telefon = "Te rugăm să completezi numărul de telefon"
      } else if (!/^[0-9+\s()-]{9,15}$/.test(formData.telefon)) {
        newErrors.telefon = "Te rugăm să introduci un număr de telefon valid"
      }
      if (!formData.cumAiAflat.trim()) newErrors.cumAiAflat = "Te rugăm să ne spui cum ai aflat de noi"
    }
  
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (!validateForm()) return
  
    setIsSubmitting(true)
    
    try {
      // Prepare the data to submit
      let dataToSubmit = { ...formData };
      
      if (user && user.accepted) {
        // Make sure we're sending all required fields for accepted users
        dataToSubmit = {
          ...dataToSubmit,
          nume: user.displayName || "deja learnitaș",
          clasa: user.grade || "N/A",
          liceu: user.school || "N/A",
          telefon: user.phoneNumber || "N/A",
          cumAiAflat: "Utilizator existent"
        };
      }
      
      // Add a timeout to prevent infinite waiting
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Submission timeout")), 10000)
      );
      
      // Race between the actual submission and the timeout
      await Promise.race([
        addParticipant(id, dataToSubmit),
        timeoutPromise
      ]);
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`A apărut o eroare la trimiterea formularului: ${error.message}. Te rugăm să încerci din nou.`);
    } finally {
      // Always make sure isSubmitting is set to false
      setIsSubmitting(false);
    }
  }

  if (!event) return <LoadingPage />

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-br from-customLightBlue to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1
            className={`text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic transform -rotate-1 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Înscrie-te la Eveniment
          </h1>
          <div
            className={`w-32 h-2 bg-customOrange mx-auto rounded-full ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          ></div>
        </div>

        {/* Event details card */}
        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="md:flex">
            {/* Event image */}
            <div className="md:w-2/5 relative">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.name}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h2 className="text-white text-xl font-bold">{event.name}</h2>
              </div>
            </div>

            {/* Event details */}
            <div className="md:w-3/5 p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-customBlack">{event.name}</h2>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-customBlue hover:text-customOrange transition-colors duration-300 p-1"
                  aria-label={showDetails ? "Ascunde detalii" : "Arată detalii"}
                >
                  {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {showDetails && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-customBlack">{event.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <User className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>{event.teacher}</span>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>{formatEventDate(event.date).split(",")[1]}</span>
                    </div>

                    <div className="flex items-start">
                      <Clock className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                      <span>{event.place}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Registration form */}
        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-customBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-white w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-customBlack mb-4">Înscrierea a fost trimisă cu succes!</h2>
              <p className="text-customBlack mb-6">
                Îți mulțumim pentru înscriere. Vei primi în curând un email de confirmare cu toate detaliile
                evenimentului.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Înscrie altă persoană
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-customBlack mb-6">Formular de Înscriere</h2>

              {(!user || !user.accepted) ? ( <div className="space-y-6">
                {/* Nume */}
                <div>
                  <label htmlFor="nume" className="block text-customBlack font-medium mb-2">
                    Nume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.nume ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-customBlue`}
                    placeholder="Numele tău complet"
                  />
                  {errors.nume && <p className="text-red-500 text-sm mt-1">{errors.nume}</p>}
                </div>

                {/* Clasa */}
                <div>
                  <label htmlFor="clasa" className="block text-customBlack font-medium mb-2">
                    Sunt în clasa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="clasa"
                    name="clasa"
                    value={formData.clasa}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.clasa ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-customBlue`}
                    placeholder="Ex: a IX-a, a X-a, etc."
                  />
                  {errors.clasa && <p className="text-red-500 text-sm mt-1">{errors.clasa}</p>}
                </div>

                {/* Liceu */}
                <div>
                  <label htmlFor="liceu" className="block text-customBlack font-medium mb-2">
                    Liceul la care înveți <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="liceu"
                    name="liceu"
                    value={formData.liceu}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.liceu ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-customBlue`}
                    placeholder="Numele liceului tău"
                  />
                  {errors.liceu && <p className="text-red-500 text-sm mt-1">{errors.liceu}</p>}
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="telefon" className="block text-customBlack font-medium mb-2">
                    Numărul de telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.telefon ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-customBlue`}
                    placeholder="Ex: 0712 345 678"
                  />
                  {errors.telefon && <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>}
                </div>

                {/* Cum ai aflat */}
                <div>
                  <label htmlFor="cumAiAflat" className="block text-customBlack font-medium mb-2">
                    Cum ai aflat de noi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cumAiAflat"
                    name="cumAiAflat"
                    value={formData.cumAiAflat}
                    onChange={handleChange}
                    placeholder="Cum ai aflat de noi?"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.cumAiAflat ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-customBlue`}
                  />
                  {errors.cumAiAflat && <p className="text-red-500 text-sm mt-1">{errors.cumAiAflat}</p>}
                </div>

                {/* Însoțitor */}
                <div>
                  <label className="block text-customBlack font-medium mb-2">Mai vii cu cineva</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="insotitor"
                        value="da"
                        checked={formData.insotitor === "da"}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-customBlue"
                      />
                      <span className="ml-2">Da</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="insotitor"
                        value="nu"
                        checked={formData.insotitor === "nu"}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-customBlue"
                      />
                      <span className="ml-2">Nu</span>
                    </label>
                  </div>
                </div>

                {/* Altceva */}
                <div>
                  <label htmlFor="altceva" className="block text-customBlack font-medium mb-2">
                    Mai vrei să ne spui ceva?
                  </label>
                  <textarea
                    id="altceva"
                    name="altceva"
                    value={formData.altceva}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customBlue"
                    placeholder="Orice altă informație pe care vrei să ne-o împărtășești..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        Trimite înscrierea
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Form note */}
                <div className="text-center text-sm text-gray-500 flex items-center justify-center">
                  <Info className="h-4 w-4 mr-1" />
                  Câmpurile marcate cu <span className="text-red-500 mx-1">*</span> sunt obligatorii
                </div>
              </div> ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-customBlack font-medium mb-2">Mai vii cu cineva</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="insotitor"
                          value="da"
                          checked={formData.insotitor === "da"}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-customBlue"
                        />
                        <span className="ml-2">Da</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="insotitor"
                          value="nu"
                          checked={formData.insotitor === "nu"}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-customBlue"
                        />
                        <span className="ml-2">Nu</span>
                      </label>
                    </div>
                  </div>

                  {/* Altceva */}
                  <div>
                    <label htmlFor="altceva" className="block text-customBlack font-medium mb-2">
                      Mai vrei să ne spui ceva?
                    </label>
                    <textarea
                      id="altceva"
                      name="altceva"
                      value={formData.altceva}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customBlue"
                      placeholder="Orice altă informație pe care vrei să ne-o împărtășești..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Se trimite...
                        </>
                      ) : (
                        <>
                          Trimite înscrierea
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Form note */}
                  <div className="text-center text-sm text-gray-500 flex items-center justify-center">
                    <Info className="h-4 w-4 mr-1" />
                    Câmpurile marcate cu <span className="text-red-500 mx-1">*</span> sunt obligatorii
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ParticipateForm

