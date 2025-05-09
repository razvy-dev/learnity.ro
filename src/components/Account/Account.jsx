import { useState, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
import { Calendar, LogOut, Key, ChevronRight, User, School, Phone, Camera } from "lucide-react"
import useAuthStore from "../../state/useAuth"
import LoadingPage from "../Loading/LoadingPage"
import { Timestamp } from "firebase/firestore"
import NotFound from '../NotFound'

export default function AccountPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=200&width=200")

  const { user, loading, logout, uploadProfilePhoto, error } = useAuthStore();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [profileRef, profileInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 200,
  })

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 400,
  })

  function timestampToString(timestamp) {
  
    // Convert Timestamp to Date object
    const date = timestamp.toDate();
  
    // Format the Date object as a string
    return date.toLocaleString(); // You can customize the format if needed
  }

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  const handleChangePassword = () => {
    // Implement change password functionality
    navigate("/change-password")
  }

  const handleProfilePictureClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result)
        }
      }
      reader.readAsDataURL(file)

      uploadProfilePhoto(file);
    }
  }

  useEffect(() => {

    if (loading) return;  // Avoid further logic while loading

    if (!user) {
      navigate('/login');  // Redirect if no user
      return;
    }

    if (!user.accepted) {
      navigate('/thank-you')
    }

    if (error) {
      console.error("Auth error:", error);
      return;  // Stop if there's an error
    }

    console.log('user:', user);
    console.log('loading:', loading);
    console.log('error:', error);

  }, [user, loading, error, navigate]);

  if (loading) return <LoadingPage />;
  if (error) return <NotFound />;
  if (!user || !user.accepted) return null;  // Render null if user is null (fallback to loading)
  // if (!user.accepted) navigate('/thank-you')

  else return (
    <div className="min-h-screen bg-customWhite mt-32 p-4 md:p-8">
      <div ref={ref} className={`max-w-6xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
        <h1 className="text-4xl md:text-5xl font-bangers text-center mb-8 text-customBlue">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div
            ref={profileRef}
            className={`lg:col-span-1 ${profileInView ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="overflow-hidden border-2 border-customLightBlue rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="bg-customBlue p-6 flex justify-center">
                <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-customLightBlue group">
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL || "/placeholder.svg"}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-customBlack">{user.displayName?.charAt(0)}</span>
                  )}

                  {/* Profile Picture Change Button */}
                  <div
                    className="absolute inset-0 bg-customBlack bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={handleProfilePictureClick}
                  >
                    <div className="flex flex-col items-center text-customWhite">
                      <Camera className="w-8 h-8 mb-1" />
                      <span className="text-xs font-medium">Change Photo</span>
                    </div>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold font-arima text-customBlack">{user.displayName}</h2>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-customLightBlue bg-opacity-30 rounded-xl">
                    <School className="text-customBlue" />
                    <div>
                      <p className="text-sm text-customBlack opacity-70">School</p>
                      <p className="font-medium text-customBlack">{user.school ? user.school : "La ce liceu înveți?"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-customLightOrange bg-opacity-30 rounded-xl">
                    <Phone className="text-customOrange" />
                    <div>
                      <p className="text-sm text-customBlack opacity-70">Phone</p>
                      <p className="font-medium text-customBlack">{user.phoneNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-4">
                  <button
                    onClick={handleChangePassword}
                    className="bg-customBlue hover:bg-opacity-90 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300"
                  >
                    <Key size={18} />
                    Change Password
                  </button>

                  <button
                    onClick={handleLogout}
                    className="border-2 border-customOrange text-customOrange hover:bg-customOrange hover:text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div
            ref={eventsRef}
            className={`lg:col-span-2 ${eventsInView ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="border-2 border-customLightBlue rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <div className="bg-customBlue p-6">
                <h2 className="text-2xl font-bold font-bangers text-white tracking-widest flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Upcoming Events
                </h2>
                <p className="text-customWhite">Events you're participating in</p>
              </div>
              <div className="divide-y divide-customLightBlue">
                {user.events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`p-4 hover:bg-customLightBlue hover:bg-opacity-10 transition-all duration-300 ${
                      eventsInView ? "animate-zoom-in" : "opacity-0 scale-90"
                    }`}
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-customBlack">{event.name}</h3>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-customBlue" />
                          <span className="text-sm text-customBlack opacity-70">{timestampToString(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-customOrange" />
                          <span className="text-sm text-customBlack opacity-70">{event.teacher}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-customBlack opacity-50" />
                    </div>
                  </div>
                ))}

                {user.events.length === 0 && (
                  <div className="p-8 text-center text-customBlack opacity-70">
                    <p>You don't have any upcoming events.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Card for Animation Demo */}
            <div
              className={`mt-6 ${eventsInView ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "700ms" }}
            >
              <div className="border-2 border-customLightOrange rounded-2xl shadow-lg overflow-hidden bg-white">
                <div className="bg-customOrange p-6">
                  <h2 className="text-xl font-bold tracking-widest font-bangers text-white">Learning Progress</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-customBlack">Science</span>
                        <span className="text-sm font-medium text-customBlack">85%</span>
                      </div>
                      <div className="w-full bg-customLightBlue bg-opacity-30 rounded-full h-2.5">
                        <div className="bg-customBlue h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-customBlack">Arts</span>
                        <span className="text-sm font-medium text-customBlack">92%</span>
                      </div>
                      <div className="w-full bg-customLightOrange bg-opacity-30 rounded-full h-2.5">
                        <div className="bg-customOrange h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-customBlack">Mathematics</span>
                        <span className="text-sm font-medium text-customBlack">78%</span>
                      </div>
                      <div className="w-full bg-customLightBlue bg-opacity-30 rounded-full h-2.5">
                        <div className="bg-customBlue h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

