"use client"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link, useNavigate } from "react-router-dom"
import { User, Mail, Phone, Lock, Eye, EyeOff, CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react"
import useAuthStore from "../../state/useAuth"

const SignUp= () => {
  const { signup, error, user } = useAuthStore();
  const navigate = useNavigate();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  // UI state
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    hasMinLength: false,
    hasNumber: false,
    hasCapital: false,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Animation
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Handle input changes
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

    // Check password confirmation match
    if (name === "confirmPassword" || (name === "password" && formData.confirmPassword)) {
      if (name === "password" && value !== formData.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Parolele nu coincid",
        }))
      } else if (name === "confirmPassword" && value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Parolele nu coincid",
        }))
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: null,
        }))
      }
    }
  }

  // Check password strength
  useEffect(() => {
    const password = formData.password

    // Check requirements
    const hasMinLength = password.length >= 8
    const hasNumber = /\d/.test(password)
    const hasCapital = /[A-Z]/.test(password)

    // Calculate score (0-3)
    let score = 0
    if (hasMinLength) score++
    if (hasNumber) score++
    if (hasCapital) score++

    setPasswordStrength({
      score,
      hasMinLength,
      hasNumber,
      hasCapital,
    })
  }, [formData.password])

  // Form validation
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Numele este obligatoriu"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresa de email nu este validă"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Numărul de telefon este obligatoriu"
    } else if (!/^[0-9+\s()-]{9,15}$/.test(formData.phone)) {
      newErrors.phone = "Numărul de telefon nu este valid"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Parola este obligatorie"
    } else if (passwordStrength.score < 3) {
      newErrors.password = "Parola nu îndeplinește toate cerințele"
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmarea parolei este obligatorie"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parolele nu coincid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await signup(formData.name, formData.email, formData.password, formData.phone);
      navigate('/thank-you');
      // Success
      setSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors((prev) => ({
        ...prev,
        form: "A apărut o eroare. Te rugăm să încerci din nou.",
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get strength color
  const getStrengthColor = () => {
    switch (passwordStrength.score) {
      case 0:
        return "bg-gray-200"
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-500"
      default:
        return "bg-gray-200"
    }
  }

  // Get strength text
  const getStrengthText = () => {
    switch (passwordStrength.score) {
      case 0:
        return "Introduceți parola"
      case 1:
        return "Slabă"
      case 2:
        return "Medie"
      case 3:
        return "Puternică"
      default:
        return ""
    }
  }

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-br from-customLightBlue to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Form card */}
        <div
          className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="bg-customBlue px-6 py-8 text-white text-center relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-customOrange rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h1 className="text-4xl font-bangers mb-2">Alătură-te Comunității Learnity!</h1>
              <p className="text-white text-opacity-90">Creează un cont pentru a începe aventura educațională</p>
            </div>
          </div>

          {/* Success message */}
          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-customBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-customBlack mb-4">Înregistrare reușită!</h2>
              <p className="text-customBlack mb-6">
                Contul tău a fost creat cu succes. Vei primi în curând un email de confirmare.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/login"
                  className="bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Conectează-te
                </Link>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Înregistrează alt cont
                </button>
              </div>
            </div>
          ) : (
            /* Sign up form */
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-customBlack font-medium mb-2">
                    Nume complet <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                      placeholder="Numele tău complet"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-customBlack font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                      placeholder="email@exemplu.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block text-customBlack font-medium mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                      placeholder="0712 345 678"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Password field */}
                <div>
                  <label htmlFor="password" className="block text-customBlack font-medium mb-2">
                    Parolă <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-10 py-3 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-gray-400 hover:text-customBlue" />
                      ) : (
                        <Eye size={18} className="text-gray-400 hover:text-customBlue" />
                      )}
                    </button>
                  </div>

                  {/* Password strength indicator */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-500">Putere parolă: {getStrengthText()}</span>
                      <span className={`text-sm ${passwordStrength.score === 3 ? "text-green-500" : "text-gray-500"}`}>
                        {passwordStrength.score}/3
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getStrengthColor()} transition-all duration-300`}
                        style={{ width: `${(passwordStrength.score / 3) * 100}%` }}
                      ></div>
                    </div>

                    {/* Password requirements */}
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm">
                        {passwordStrength.hasMinLength ? (
                          <CheckCircle size={14} className="text-green-500 mr-1" />
                        ) : (
                          <XCircle size={14} className="text-gray-400 mr-1" />
                        )}
                        <span className={passwordStrength.hasMinLength ? "text-green-500" : "text-gray-500"}>
                          Minim 8 caractere
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        {passwordStrength.hasNumber ? (
                          <CheckCircle size={14} className="text-green-500 mr-1" />
                        ) : (
                          <XCircle size={14} className="text-gray-400 mr-1" />
                        )}
                        <span className={passwordStrength.hasNumber ? "text-green-500" : "text-gray-500"}>
                          Cel puțin un număr
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        {passwordStrength.hasCapital ? (
                          <CheckCircle size={14} className="text-green-500 mr-1" />
                        ) : (
                          <XCircle size={14} className="text-gray-400 mr-1" />
                        )}
                        <span className={passwordStrength.hasCapital ? "text-green-500" : "text-gray-500"}>
                          Cel puțin o literă mare
                        </span>
                      </div>
                    </div>
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm password field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-customBlack font-medium mb-2">
                    Confirmă parola <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-10 py-3 border ${
                        errors.confirmPassword ? "border-red-500" : "border-gray-300"
                      } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} className="text-gray-400 hover:text-customBlue" />
                      ) : (
                        <Eye size={18} className="text-gray-400 hover:text-customBlue" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-customBlue hover:bg-customOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue transition-colors duration-300 font-bold"
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
                        Se creează contul...
                      </>
                    ) : (
                      <>
                        Creează cont
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </div>

                {/* Form error */}
                {errors.form && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">{errors.form}</div>
                )}

                {/* Login link */}
                <div className="text-center text-sm">
                  <p className="text-gray-600">
                    Ai deja un cont?{" "}
                    <Link to="/login" className="text-customBlue hover:text-customOrange font-medium">
                      Conectează-te
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Terms and privacy */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Prin crearea unui cont, ești de acord cu{" "}
          <Link to="/terms" className="text-customBlue hover:text-customOrange">
            Termenii și Condițiile
          </Link>{" "}
          și{" "}
          <Link to="/privacy" className="text-customBlue hover:text-customOrange">
            Politica de Confidențialitate
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignUp

