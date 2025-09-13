import dare from './assets/changemakers.jpg';
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import {
  Send,
  User,
  GraduationCap,
  School,
  Calendar,
  Phone,
  UserCheck,
  Utensils,
  MessageSquare,
  CheckCircle,
} from "lucide-react"
import * as yup from "yup"
import { collection, addDoc } from "firebase/firestore"
import { db } from '../state/firebase/firebase';

// Yup validation schema
const dareFormSchema = yup.object().shape({
  numeComplet: yup.string().required("Te rugăm să completezi numele complet"),
  clasaTerminata: yup.string().required("Te rugăm să selectezi clasa terminată"),
  liceu: yup.string().required("Te rugăm să completezi liceul"),
  varsta: yup
    .number()
    .typeError("Te rugăm să introduci o vârstă validă (8-20 ani)")
    .required("Te rugăm să completezi vârsta")
    .min(8, "Vârsta minimă este 8 ani")
    .max(20, "Vârsta maximă este 20 ani"),
  telefonElev: yup
    .string()
    .required("Te rugăm să completezi numărul de telefon")
    .matches(/^[0-9+\s()-]{9,15}$/, "Te rugăm să introduci un număr de telefon valid"),
  numeParinte: yup.string().required("Te rugăm să completezi numele părintelui"),
  telefonParinte: yup
    .string()
    .required("Te rugăm să completezi numărul de telefon al părintelui")
    .matches(/^[0-9+\s()-]{9,15}$/, "Te rugăm să introduci un număr de telefon valid pentru părinte"),
  restrictiiAlimentare: yup.string(),
  altceva: yup.string(),
})

const DareForm = () => {
  const [formData, setFormData] = useState({
    numeComplet: "",
    clasaTerminata: "",
    liceu: "",
    varsta: "",
    telefonElev: "",
    numeParinte: "",
    telefonParinte: "",
    restrictiiAlimentare: "",
    altceva: "",
  })

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
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  // Use yup for validation
  const validateForm = async () => {
    try {
      await dareFormSchema.validate(formData, { abortEarly: false })
      setErrors({})
      return true
    } catch (validationError) {
      const newErrors = {}
      if (validationError.inner) {
        validationError.inner.forEach((err) => {
          if (!newErrors[err.path]) {
            newErrors[err.path] = err.message
          }
        })
      }
      setErrors(newErrors)
      return false
    }
  }

  // Submit to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = await validateForm()
    if (!isValid) return

    setIsSubmitting(true)
    try {
      await addDoc(collection(db, "tabara"), {
        ...formData,
        timestamp: new Date(),
      })
      setSubmitted(true)
      setFormData({
        numeComplet: "",
        clasaTerminata: "",
        liceu: "",
        varsta: "",
        telefonElev: "",
        numeParinte: "",
        telefonParinte: "",
        restrictiiAlimentare: "",
        altceva: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      className="py-8 px-2 sm:py-12 sm:px-4 bg-customWhite relative overflow-hidden sm:m-16 m-2"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-customOrange rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-customBlue rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-customLightOrange rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-customLightBlue rounded-full opacity-30"></div>

        {/* Floating icons */}
        <div className="absolute top-20 right-20 text-customOrange opacity-20 animate-bounce-slow">
          <GraduationCap size={32} className="sm:size-40" />
        </div>
        <div className="absolute bottom-20 left-20 text-customBlue opacity-20 animate-pulse">
          <School size={28} className="sm:size-35" />
        </div>
        <div className="absolute top-1/2 left-10 text-customOrange opacity-15 animate-bounce">
          <User size={24} className="sm:size-30" />
        </div>
      </div>

      <div className="max-w-4xl sm:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Image and info */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.1s" }}>
            <div className="relative mb-8">
              <img
                src={dare}
                alt="Camp Registration"
                className="w-full h-48 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Alătură-te aventurii!</h2>
                <p className="text-base sm:text-lg opacity-90">Înscrie-te la tabăra de vară</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bangers text-customBlack mb-3 sm:mb-4 italic transform -rotate-1">
                Formular de Înscriere
              </h1>
              <div className="w-16 sm:w-24 h-2 bg-customOrange rounded-full mb-4 sm:mb-6"></div>
              <p className="text-customBlack text-base sm:text-lg leading-relaxed">
                Completează formularul pentru a te înscrie la tabăra noastră de vară! Vei trăi o experiență de neuitat,
                plină de aventuri, prietenii noi și activități captivante în natură. Pregătește-te pentru cea mai tare
                vacanță din viața ta!
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {submitted ? (
                <div className="p-6 sm:p-8 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-customBlue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce">
                    <CheckCircle className="text-white w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-customBlack mb-3 sm:mb-4">Înscrierea a fost trimisă!</h2>
                  <p className="text-customBlack mb-4 sm:mb-6 text-base sm:text-lg">
                    Îți mulțumim pentru înscriere! Vei primi în curând un email de confirmare cu toate detaliile
                    taberei.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-customBlue hover:bg-customOrange text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Înscrie altă persoană
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Nume complet */}
                    <div>
                      <label htmlFor="numeComplet" className="flex items-center text-customBlack font-medium mb-2">
                        <User className="mr-2 h-5 w-5 text-customBlue" />
                        Nume și prenume <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="numeComplet"
                        name="numeComplet"
                        value={formData.numeComplet}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.numeComplet ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Numele tău complet"
                      />
                      {errors.numeComplet && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.numeComplet}
                        </p>
                      )}
                    </div>

                    {/* Clasa terminată */}
                    <div>
                      <label htmlFor="clasaTerminata" className="flex items-center text-customBlack font-medium mb-2">
                        <GraduationCap className="mr-2 h-5 w-5 text-customBlue" />
                        Ce clasă ai terminat? <span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        id="clasaTerminata"
                        name="clasaTerminata"
                        value={formData.clasaTerminata}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.clasaTerminata ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                      >
                        <option value="">Selectează clasa</option>
                        <option value="a 8-a">a 8-a</option>
                        <option value="a 9-a">a 9-a</option>
                        <option value="a 10-a">a 10-a</option>
                        <option value="a 11-a">a 11-a</option>
                        <option value="a 12-a">a 12-a</option>
                      </select>
                      {errors.clasaTerminata && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.clasaTerminata}
                        </p>
                      )}
                    </div>

                    {/* Liceu */}
                    <div>
                      <label htmlFor="liceu" className="flex items-center text-customBlack font-medium mb-2">
                        <School className="mr-2 h-5 w-5 text-customBlue" />
                        Liceu <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="liceu"
                        name="liceu"
                        value={formData.liceu}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.liceu ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Numele liceului tău"
                      />
                      {errors.liceu && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.liceu}
                        </p>
                      )}
                    </div>

                    {/* Vârsta */}
                    <div>
                      <label htmlFor="varsta" className="flex items-center text-customBlack font-medium mb-2">
                        <Calendar className="mr-2 h-5 w-5 text-customBlue" />
                        Vârsta <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="number"
                        id="varsta"
                        name="varsta"
                        value={formData.varsta}
                        onChange={handleChange}
                        min="8"
                        max="20"
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.varsta ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Vârsta ta"
                      />
                      {errors.varsta && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.varsta}
                        </p>
                      )}
                    </div>

                    {/* Telefon elev */}
                    <div>
                      <label htmlFor="telefonElev" className="flex items-center text-customBlack font-medium mb-2">
                        <Phone className="mr-2 h-5 w-5 text-customBlue" />
                        Numărul tău de telefon <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefonElev"
                        name="telefonElev"
                        value={formData.telefonElev}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.telefonElev ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Ex: 0712 345 678"
                      />
                      {errors.telefonElev && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.telefonElev}
                        </p>
                      )}
                    </div>

                    {/* Nume părinte */}
                    <div>
                      <label htmlFor="numeParinte" className="flex items-center text-customBlack font-medium mb-2">
                        <UserCheck className="mr-2 h-5 w-5 text-customBlue" />
                        Numele părintelui cu care ținem legătura <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="numeParinte"
                        name="numeParinte"
                        value={formData.numeParinte}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.numeParinte ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Numele părintelui"
                      />
                      {errors.numeParinte && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.numeParinte}
                        </p>
                      )}
                    </div>

                    {/* Telefon părinte */}
                    <div>
                      <label htmlFor="telefonParinte" className="flex items-center text-customBlack font-medium mb-2">
                        <Phone className="mr-2 h-5 w-5 text-customBlue" />
                        Numărul de telefon al părintelui <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefonParinte"
                        name="telefonParinte"
                        value={formData.telefonParinte}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 ${errors.telefonParinte ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base`}
                        placeholder="Ex: 0712 345 678"
                      />
                      {errors.telefonParinte && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.telefonParinte}
                        </p>
                      )}
                    </div>

                    {/* Restricții alimentare */}
                    <div>
                      <label
                        htmlFor="restrictiiAlimentare"
                        className="flex items-center text-customBlack font-medium mb-2"
                      >
                        <Utensils className="mr-2 h-5 w-5 text-customBlue" />
                        Ai restricții alimentare?
                      </label>
                      <input
                        type="text"
                        id="restrictiiAlimentare"
                        name="restrictiiAlimentare"
                        value={formData.restrictiiAlimentare}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Ex: vegetarian, alergii, etc."
                      />
                    </div>

                    {/* Mai vreau să zic */}
                    <div>
                      <label htmlFor="altceva" className="flex items-center text-customBlack font-medium mb-2">
                        <MessageSquare className="mr-2 h-5 w-5 text-customBlue" />
                        Mai vreau să zic...
                      </label>
                      <textarea
                        id="altceva"
                        name="altceva"
                        value={formData.altceva}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Orice altă informație pe care vrei să ne-o împărtășești..."
                      ></textarea>
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center pt-4 sm:pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-customBlue to-customOrange hover:from-customOrange hover:to-customBlue text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center shadow-xl text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white"
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
                            <Send className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Form note */}
                    <div className="text-center text-xs sm:text-sm text-gray-500 bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="flex items-center justify-center">
                        <span className="mr-2">ℹ️</span>
                        Câmpurile marcate cu <span className="text-red-500 mx-1 font-bold">*</span> sunt obligatorii
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DareForm
