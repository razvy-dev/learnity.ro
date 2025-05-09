import PlaygroundWorkshops from "../components/Playground/Examples";
import SpinningTopSection from "../components/Playground/Parts";
import PlaygroundHero from "../components/Playground/Playground";
import Titirez from "../components/Playground/TheTitirez";

const Playground = () => {
    return (  
        <main>
            <PlaygroundHero />
            <SpinningTopSection />
            <Titirez />
            <PlaygroundWorkshops />
        </main>
    );
}
 
export default Playground;