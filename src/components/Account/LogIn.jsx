import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import useAuthStore from "../../state/useAuth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const { login } = useAuthStore();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      try {
        if (login(email, password)) navigate('/account');
      } catch (err) {
        console.log(err);
      }
    }, 1500)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // In a real app, you would implement social login here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-customWhite flex items-center justify-center px-4 py-12">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div ref={ref} className="max-w-md w-full">
        {/* Login card */}
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
              <h1 className="text-4xl font-bangers mb-2">Welcome Back!</h1>
              <p className="text-white text-opacity-90">Log in to continue your learning adventure</p>
            </div>
          </div>

          {/* Login form */}
          <div className="px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-customBlack font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-customBlack font-medium">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl text-customBlack placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
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
              </div>

              {/* Forgot password link */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-customBlue hover:text-customOrange transition-colors duration-300"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Login button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-customOrange hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue transition-colors duration-300"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Log In
                    <ArrowRight className="ml-2" size={18} />
                  </span>
                )}
              </button>
            </form>

            {/* Sign up link */}
            <div className="mt-6">
              <Link
                to="/signup"
                className="w-full flex justify-center items-center py-3 px-4 border-2 border-customBlue rounded-xl text-customBlue hover:bg-customBlue hover:text-white transition-colors duration-300"
              >
                Create New Account
              </Link>
            </div>

            {/* Social login divider */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("facebook")}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.37 19.6 18.57C21.16 16.76 22.04 14.47 22.04 12.06C22.04 6.53 17.54 2.04 12 2.04Z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-sm text-gray-600">
          By logging in, you agree to our{" "}
          <Link to="/terms" className="text-customBlue hover:text-customOrange">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-customBlue hover:text-customOrange">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

