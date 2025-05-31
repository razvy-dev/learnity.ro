import {
  useRoutes,
  Outlet,
  BrowserRouter
} from "react-router-dom"

import HomePage from "./pages/Home"
import Footer from "./components/Footer/Footer"
import Login from "./components/Account/LogIn"
import Playground from "./pages/Playground"
import GuidedLearning from "./pages/GuidedLearning"
import NotFound from "./components/NotFound"
import About from "./pages/About"
import EventsSection from "./components/Events/Events"
import Navbar from "./components/Navbar/Navbar"
import ParticipateForm from "./components/Forms/ParticipateForm"
import DonatePage from "./components/Donate/Donate"
import Account from "./components/Account/Account"
import SignUp from "./components/Account/SignUp"
import ThankYou from "./components/Account/Wait"
import UnpluggedEducation from "./components/UnpluggedEducation/UnpluggedEducation"
import Contact from "./pages/Contact"
import NewsletterArchive from "./pages/Newsletter"
import WhatTheFuture from "./components/WTF/WTF"
import ChangemakersCamp from "./pages/Changemakers"
import DareYourself from "./pages/Dare"
import NextExperiences from "./pages/Next"
import ComingSoon from "./components/ComingSoon"
import SeeYouThere from "./pages/SeeYouThere"
import SomethingWentWrong from "./pages/SomethingWentWrong"
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/despre-noi', element: <About /> },
        { path: '/playground', element: <Playground /> },
        { path: '/guided-learning', element: <GuidedLearning /> },
        { path: '/donează', element: <DonatePage /> },
        { path: '/contact', element: <Contact /> },
        { path: '/upcoming-events', element: <EventsSection /> },
        { path: '/upcoming-events/:id', element: <ParticipateForm /> },
        { path: '/newsletter', element: <NewsletterArchive /> },
        { path: '/what-the-future', element: <WhatTheFuture /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/account', element: <Account /> },
        { path: '/thank-you', element: <ThankYou /> },
        { path: '/unplugged-education', element: <UnpluggedEducation /> },
        { path: '/changemakers-camp', element: <ChangemakersCamp /> },
        { path: '/dare-yourself', element: <DareYourself /> },
        { path: '/next-experiences', element: <NextExperiences />},
        { path: '/coming-soon', element: <ComingSoon /> },
        { path: '/see-you-there', element: <SeeYouThere /> },
        { path: '/something-went-wrong', element: <SomethingWentWrong />},
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return element
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
