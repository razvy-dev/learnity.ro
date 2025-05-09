import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Clock } from 'lucide-react';

const Bubble = ({ color, size, position }) => (
    <div 
      className="absolute rounded-full opacity-20 transition-all duration-[3000ms] ease-in-out"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
    />
  );
  
  const BubblesDesign = () => {
    const [bubbles, setBubbles] = useState([]);
  
    useEffect(() => {
      const colors = ['#F8A12E', '#05be9e', '#2f2f27'];
      const createBubble = () => ({
        id: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: `${Math.random() * 100 + 50}px`,
        position: {
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        },
      });
  
      // Initialize bubbles
      setBubbles(Array(15).fill().map(createBubble));
  
      const interval = setInterval(() => {
        setBubbles(prevBubbles => 
          prevBubbles.map(bubble => ({
            ...bubble,
            position: {
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            },
          }))
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {bubbles.map((bubble) => (
            <Bubble 
              key={bubble.id} 
              color={bubble.color} 
              size={bubble.size} 
              position={bubble.position || { x: '0%', y: '0%' }} 
            />
            ))}
        </div>
    )
  }

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set launch date - change this to your actual launch date
  const launchDate = new Date('2023-12-31T00:00:00');
  
  // Calculate countdown
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = launchDate - now;
      
      if (difference <= 0) {
        // Launch date has passed
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately
    calculateCountdown();
    
    // Update every second
    const timer = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setEmail('');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  // Animated shapes for background
  
  return (
    <div className="min-h-screen bg-customWhite flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      <BubblesDesign />
      
      <div className="z-10 max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 bg-customOrange rounded-full flex items-center justify-center mx-auto">
            <span className="font-bangers text-4xl text-customBlack">L</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-customBlack bg-opacity-90 rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bangers text-customWhite mb-4">
            <span className="text-customOrange">Coming</span> Soon!
          </h1>
          
          <p className="text-xl text-customWhite mb-8 max-w-2xl mx-auto">
            We're working hard to bring you an amazing learning experience. 
            Our new platform is almost ready. Stay tuned!
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-customBlue bg-opacity-20 rounded-xl p-4">
              <div className="text-4xl md:text-5xl font-bangers text-customWhite">{countdown.days}</div>
              <div className="text-customWhite opacity-80">Days</div>
            </div>
            <div className="bg-customBlue bg-opacity-20 rounded-xl p-4">
              <div className="text-4xl md:text-5xl font-bangers text-customWhite">{countdown.hours}</div>
              <div className="text-customWhite opacity-80">Hours</div>
            </div>
            <div className="bg-customBlue bg-opacity-20 rounded-xl p-4">
              <div className="text-4xl md:text-5xl font-bangers text-customWhite">{countdown.minutes}</div>
              <div className="text-customWhite opacity-80">Minutes</div>
            </div>
            <div className="bg-customBlue bg-opacity-20 rounded-xl p-4">
              <div className="text-4xl md:text-5xl font-bangers text-customWhite">{countdown.seconds}</div>
              <div className="text-customWhite opacity-80">Seconds</div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bangers text-customWhite mb-4">
              Get Notified When We Launch
            </h2>
            
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customBlack opacity-70 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-customWhite text-customBlack placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-customOrange text-customBlack font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Notify Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              {/* Success message */}
              {isSubmitted && (
                <div className="absolute -bottom-10 left-0 right-0 text-customOrange text-sm">
                  Thanks for subscribing! We'll notify you when we launch.
                </div>
              )}
            </form>
          </div>
          
          {/* Back to Home Link */}
          <div className="mt-16">
            <Link to="/" className="text-customWhite hover:text-customOrange transition-colors inline-flex items-center">
              <ArrowRight className="mr-2 w-4 h-4 transform rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-customBlack opacity-70 text-sm">
          <p>© 2023 Learnity. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;