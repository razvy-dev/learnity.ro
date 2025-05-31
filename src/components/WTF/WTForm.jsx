import { useState } from "react"
import { motion } from "framer-motion"
import { functions } from "../../state/firebase/firebase"
import { httpsCallable } from "firebase/functions"

const WTForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    attendanceDays: "",
    reason: "",
    referralSource: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

//       const result = await createCheckoutSession({
//         name: formData.name,
//         email: formData.email,
//       });

//       const { url } = result.data;
//       window.location.href = url; // 🔁 Redirect to Stripe
//     } catch (error) {
//       console.error("Error starting payment", error);
//       alert("There was an error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu"
    if (!formData.phone.trim()) newErrors.phone = "Numărul de telefon este obligatoriu"
    if (!formData.school.trim()) newErrors.school = "Școala este obligatorie"
    if (!formData.grade.trim()) newErrors.grade = "Clasa este obligatorie"
    if (!formData.attendanceDays) newErrors.attendanceDays = "Te rugăm să selectezi ziua/zilele de participare"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitted(true)
        console.log("Form data:", formData)
      }, 1500)

      e.preventDefault();
      setLoading(true);

      try {
        const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

        console.log(formData)

        const result = await createCheckoutSession({
          name: formData.name,
          email: formData.email,
          attendanceDays: formData.attendanceDays
      });

        const { url } = result.data;
        window.location.href = url;
      } catch (error) {
        console.error("Error starting payment", error);
        alert("There was an error. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  if (submitted) {
    return (
      <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-customBlue"></div>
                </div>
    )
    }
  
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl p-8 mb-20 md:p-10 shadow-lg max-w-3xl mx-auto relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-customBlue to-customOrange"></div>
        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-customBlue/30 rounded-tl-lg"></div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-customOrange/30 rounded-br-lg"></div>
  
        {/* Decorative paper clip */}
        <div className="absolute top-4 right-4 w-8 h-16 border-2 border-customBlue/30 rounded-full"></div>
  
        {/* Decorative tape */}
        <div className="absolute top-10 -left-6 w-32 h-8 bg-customLightOrange/20 rotate-12"></div>
        <div className="absolute bottom-10 -right-6 w-32 h-8 bg-customLightBlue/20 -rotate-12"></div>
  
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-4xl font-bold text-customBlack">Înscrie-te la WTFuture</h2>
          <div className="w-40 h-1 bg-customBlue mx-auto mt-3 rounded-full"></div>
          <p className="text-customBlack/70 mt-4 text-lg">
            Completează formularul de mai jos pentru a participa la evenimentul nostru
          </p>
        </motion.div>
  
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-lg font-medium text-customBlack mb-2">
              Nume și prenume <span className="text-customOrange">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-customBlue/30"
              } focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg`}
              placeholder="Numele tău complet"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-lg font-medium text-customBlack mb-2">
              Email <span className="text-customOrange">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-customBlue/30"
              } focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg`}
              placeholder="Email"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </motion.div>
  
          {/* Phone Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-lg font-medium text-customBlack mb-2">
              Număr de telefon <span className="text-customOrange">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? "border-red-500" : "border-customBlue/30"
              } focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg`}
              placeholder="07XX XXX XXX"
            />
            {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
          </motion.div>
  
          {/* School Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="school" className="block text-lg font-medium text-customBlack mb-2">
              Școala <span className="text-customOrange">*</span>
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.school ? "border-red-500" : "border-customBlue/30"
              } focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg`}
              placeholder="Numele școlii tale"
            />
            {errors.school && <p className="mt-2 text-sm text-red-500">{errors.school}</p>}
          </motion.div>
  
          {/* Grade Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="grade" className="block text-lg font-medium text-customBlack mb-2">
              Clasa <span className="text-customOrange">*</span>
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.grade ? "border-red-500" : "border-customBlue/30"
              } focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg`}
            >
              <option value="">Selectează clasa</option>
              <option value="9">Clasa a IX-a</option>
              <option value="10">Clasa a X-a</option>
              <option value="11">Clasa a XI-a</option>
              <option value="12">Clasa a XII-a</option>
              <option value="other">Altă clasă</option>
            </select>
            {errors.grade && <p className="mt-2 text-sm text-red-500">{errors.grade}</p>}
          </motion.div>
  
          {/* Attendance Days Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-lg font-medium text-customBlack mb-3">
              În ce zi/zile vei participa? <span className="text-customOrange">*</span>
            </label>
            <div className="space-y-3 pl-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendanceDays"
                  value="first"
                  checked={formData.attendanceDays === "first"}
                  onChange={handleChange}
                  className="form-radio text-customBlue focus:ring-customBlue h-5 w-5"
                />
                <span className="text-customBlack text-lg">Prima zi (7 iunie)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendanceDays"
                  value="second"
                  checked={formData.attendanceDays === "second"}
                  onChange={handleChange}
                  className="form-radio text-customBlue focus:ring-customBlue h-5 w-5"
                />
                <span className="text-customBlack text-lg">A doua zi (8 iunie)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendanceDays"
                  value="both"
                  checked={formData.attendanceDays === "both"}
                  onChange={handleChange}
                  className="form-radio text-customBlue focus:ring-customBlue h-5 w-5"
                />
                <span className="text-customBlack text-lg">Ambele zile</span>
              </label>
            </div>
            {errors.attendanceDays && <p className="mt-2 text-sm text-red-500">{errors.attendanceDays}</p>}
          </motion.div>
  
          {/* Reason Field (Optional) */}
          <motion.div variants={itemVariants}>
            <label htmlFor="reason" className="block text-lg font-medium text-customBlack mb-2">
              De ce vrei să participi la WTFuture? <span className="text-customBlack/50">(opțional)</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-customBlue/30 focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg"
              placeholder="Spune-ne de ce ești interesat/ă de acest eveniment..."
            ></textarea>
          </motion.div>
  
          {/* Referral Source Field (Optional) */}
          <motion.div variants={itemVariants}>
            <label htmlFor="referralSource" className="block text-lg font-medium text-customBlack mb-2">
              Cum ai aflat despre noi? <span className="text-customBlack/50">(opțional)</span>
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-customBlue/30 focus:outline-none focus:ring-2 focus:ring-customBlue/50 bg-customWhite/50 text-lg"
            >
              <option value="">Selectează o opțiune</option>
              <option value="social">Social media (Instagram, Facebook, etc.)</option>
              <option value="friend">De la un prieten</option>
              <option value="school">De la școală</option>
              <option value="previous">Am mai participat la evenimente Learnity</option>
              <option value="other">Altă sursă</option>
            </select>
          </motion.div>
  
          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-customBlue text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{isSubmitting ? "Se trimite..." : "Înscrie-te acum"}</span>
              <span className="absolute inset-0 bg-customOrange transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out"></span>
            </button>
          </motion.div>
  
          {/* Required fields note */}
          <motion.div variants={itemVariants} className="mt-4 text-center text-base text-customBlack/60">
            <span className="text-customOrange">*</span> Câmpuri obligatorii
          </motion.div>
        </form>
      </motion.div>
    )
}

export default WTForm;
