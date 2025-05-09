import GuidedCourses from "../components/Guided/Courses";
import GuidedHero from "../components/Guided/GuidedHero";
import TeachersShowcase from "../components/Guided/Teachers";

const GuidedLearning = () => {
    return (  
        <main>
            <GuidedHero />
            <GuidedCourses />
            <TeachersShowcase />
        </main>
    );
}
 
export default GuidedLearning;