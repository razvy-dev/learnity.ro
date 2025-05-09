"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Send, User, Mail, MessageSquare, Info, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
  const [submitStatus, setSubmitStatus] = useState(null);

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) return;

    try {
      // This is the URL to your Firebase Cloud Function endpoint
      const response = await fetch('https://us-central1-learnity-d8d50.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({ success: false, message: errorData.error || 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ success: false, message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Te rugăm să completezi numele"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Te rugăm să completezi adresa de email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Te rugăm să introduci o adresă de email validă"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Te rugăm să completezi subiectul"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Te rugăm să completezi mesajul"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mesajul trebuie să conțină cel puțin 10 caractere"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setSubmitted(false)
  }

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      {submitted ? (
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="w-20 h-20 bg-customBlue rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-customBlack mb-4">Mesajul tău a fost trimis cu succes!</h2>
          <p className="text-customBlack mb-6">
            Îți mulțumim pentru mesaj. Echipa noastră îl va analiza și îți va răspunde în cel mai scurt timp posibil.
          </p>
          <button
            onClick={resetForm}
            className="bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
          >
            Trimite alt mesaj
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`bg-white rounded-3xl shadow-xl overflow-hidden ${inView ? "animate-fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Form header */}
          <div className="bg-customBlue px-6 py-8 text-white relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-customOrange rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bangers mb-2">Contactează-ne</h2>
              <p className="text-white text-opacity-90">Suntem aici pentru a răspunde întrebărilor tale</p>
            </div>
          </div>

          {/* Form fields */}
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-customBlack font-medium mb-2">
                  Nume <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                    placeholder="Numele tău complet"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                    placeholder="adresa@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-customBlack font-medium mb-2">
                  Subiect <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                    placeholder="Subiectul mesajului"
                  />
                </div>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-customBlack font-medium mb-2">
                  Mesaj <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`block w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent`}
                  placeholder="Scrie-ne mesajul tău aici..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
                      Trimite mesajul
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
          </div>
        </form>
      )}
    </div>
  )
}

export default ContactForm
