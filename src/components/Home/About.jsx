import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react"
import video from './assets/video.mp4';
import thumbnail from './assets/image.png';

const AboutUsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #05be9e 0%, #C7F1F0 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-customWhite opacity-10 transform -skew-y-3"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-white opacity-10 transform skew-y-3"></div>

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-customOrange rounded-full opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full opacity-10"></div>

        <svg className="absolute top-0 right-0 h-24 w-24 text-customWhite opacity-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          className="absolute bottom-20 left-20 h-32 w-32 text-customWhite opacity-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Video */}
          <div
            className={`order-2 lg:order-1 ${inView ? "animate-fade-in" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 border-8 border-customWhite">
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full h-auto"
                poster={thumbnail}
                preload="metadata"
                playsInline
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video overlay with play/pause button */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
              >
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 focus:outline-none"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-customBlue" />
                  ) : (
                    <Play className="w-8 h-8 text-customBlue ml-1" />
                  )}
                </button>
              </div>

              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex justify-between items-center">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-customOrange transition-colors duration-300 focus:outline-none"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                  onClick={handleMuteToggle}
                  className="text-white hover:text-customOrange transition-colors duration-300 focus:outline-none"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Video caption */}
            <div className="bg-white p-4 rounded-xl shadow-lg max-w-md mx-auto -mt-6 relative z-20 transform -rotate-1">
              <p className="text-customBlack text-center text-sm italic">
                Descoperă povestea Learnity și cum transformăm educația prin joc și creativitate
              </p>
            </div>
          </div>

          {/* Right column - Text content */}
          <div
            className={`order-1 lg:order-2 ${inView ? "animate-slide-up" : "opacity-0"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-xl transform -rotate-1">
              <div className="transform rotate-1">
                <h2 className="text-4xl md:text-5xl font-bangers text-customBlack mb-6 italic">Ce este Learnity?</h2>

                <div className="w-32 h-2 bg-customOrange rounded-full mb-6"></div>

                <div className="space-y-4 text-lg text-customBlack mb-8">
                  <p>
                    Misiunea noastră este să ghidăm fiecare adolescent să devină un adult care se cunoaște pe el însuși, își urmează pasiunile și contribuie la o lume mai bună. Credem că orice schimbare începe din interior – odată ce se descoperă pe sine, poate apoi să creeze un impact real și în jurul lui.
                  </p>
                  <p>
                  Pentru asta, le oferim un spațiu sigur în care să se exploreze fără teama de a fi judecați, să își dezvolte gândirea critică și să capete încredere în cine sunt și în ce pot face.
                  </p>
                  <p>
                  Learnity este și despre comunitate – despre a întâlni oameni cu aceleași valori și principii, despre conexiuni autentice și sprijin reciproc. Încurajăm adolescenții să fie proactivi, să își exprime ideile și să ia inițiativă atunci când simt că pot face o diferență.
                  </p>
                  <p>
                  Mai mult decât un loc de învățare, Learnity este un mediu în care adolescenții cresc, își descoperă vocea și găsesc inspirația de a contribui la o lume mai bună. Aici învață să trăiască autentic, cu încredere și curaj, transformând fiecare experiență într-un pas spre un viitor cu impact.
                  </p>
                </div>

                <Link
                  to="/despre-noi"
                  className="inline-flex items-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg group"
                >
                  Descoperă mai mult
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

