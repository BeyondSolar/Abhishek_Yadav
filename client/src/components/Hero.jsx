import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Resume from "./Resume";

const Hero = ()=>{
    return (
        <div className="bg-white flex flex-col">
            <div className="border-b">
                <About/>
            </div>
            <div className="border-b">
                <Education />
            </div>
            <div className="border-b">
                <Skills />
            </div>
            <div className="border-b">
                <Resume />
            </div>
        </div>
    )
}

export default Hero;