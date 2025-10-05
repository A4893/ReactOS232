import Reactm, {useState} from "react";
import "./services.css";
import embedImg from '../src/assets/Embedded.jpg';
import cppImg from '../src/assets/cpp.jpg';
import linuxImg from '../src/assets/linux.jpg';


const LoginForm=()=>{

    return(
    <section id="skill"> 
      <h1 className="servicesTitle">My Services</h1>
      {/* starting intro */}
      <p className="servicesDesc">
        Here are some of the technical services I can provide, based on my skills
        in programming, embedded systems, and server management.
      </p>

{/* //The Programming container using the class service container and service card css. */}
      <div className="servicesContainer">
        <div className="serviceCard">
          <img src={cppImg} alt="Programming" className="serviceImg" />
          <h2>Programming</h2>
          <p>
            Skilled in C, C++, Java, and C# for developing efficient software
            solutions across different platforms.
          </p>
        </div>
{/* Second card */}
        <div className="serviceCard">
          <img src={embedImg} alt="Embedded Boards" className="serviceImg" />
          <h2>Embedded Systems</h2>
          <p>
            Experience working with embedded boards, microcontrollers, and
            hardware-software integration projects.
          </p>
        </div>
        
{/* Third card */}
        <div className="serviceCard">
          <img src={linuxImg} alt="Linux Servers" className="serviceImg" />
          <h2>Linux Server Setup</h2>
          <p>
            Skilled in setting up and maintaining servers on Linux systems,
            including OpenSUSE and other distributions.
          </p>
        </div>
      </div>

      
    </section>
  );
}

export default LoginForm;