import AboutUsSection from "../components/Home/About";
import Camps from "../components/Home/Camps";
import DonateSection from "../components/Home/Doneaza";
import FAQSection from "../components/Home/FAQ";
import GuidedLearningSection from "../components/Home/Guided";
import GuidedExamples from "../components/Home/GuidedExamples";
import HeroSection from "../components/Home/HeroSection";
import PlaygroundSection from "../components/Home/Playground";
import PlaygroundExamples from "../components/Home/PlaygroundExamples";
import TestimonialsSection from "../components/Home/Testimonials";
import WhatTheFuture from "../components/Home/WhatTheFuture";

const HomePage = () => {
    return (  
        <main className="">
            <HeroSection />
            <AboutUsSection />
            <GuidedLearningSection />
            <GuidedExamples />
            <PlaygroundSection />
            <PlaygroundExamples />
            <WhatTheFuture />
            <Camps />
            <TestimonialsSection />
            <FAQSection />
            <DonateSection />
        </main>
    );
}
 
export default HomePage;