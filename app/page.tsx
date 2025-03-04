import { MainSection } from "@/components/mainSection";
import About from "@/components/about";
import Dock from "@/components/docking";
import { Projects } from "@/components/projects";
function Home(){
    return(
        <>
         <MainSection/>
         <About/>
         <Dock/>
         <Projects/>
        </>
    );
}
export default Home;