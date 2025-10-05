import serverImg from './../src/assets/server.png';
import ircImg from './../src/assets/irssi.png';
import webImg from './../src/assets/website.png';
import './project.css';

const Projects =()=>{
    return(
        // Introduction to all the projects
        <section id="projects">
      <h1 className="projectsTitle">My Projects</h1>
      <p className="projectsDesc">
        Here are a few of the projects I’ve worked on that showcase my skills in
        programming, networking, and web development.
      </p>
{/* The container from the css */}
      <div className="projectsContainer">
        <div className="projectCard">
          <img src={serverImg} alt="Linux Server" className="projectImg" />
          <h2>Linux Server Setup</h2>
          <p>
            Built and configured a server on <strong>OpenSUSE Linux</strong> with
            secure services and optimized performance.
          </p>
        </div>
{/* All the cards from css  */}
        <div className="projectCard">
          <img src={ircImg} alt="IRC Bridge" className="projectImg" />
          <h2>IRC Bridge Connection</h2>
          <p>
            Set up and connected to an <strong>IRC bridge</strong> for
            real-time communication and testing distributed chat systems.
          </p>
        </div>

        <div className="projectCard">
          <img src={webImg} alt="Portfolio Website" className="projectImg" />
          <h2>Portfolio Website</h2>
          <p>
            Designed and developed this portfolio website using{" "}
            <strong>React.js</strong>, showcasing my work and skills.
          </p>
        </div>
      </div>
    </section>
    );
}

export default Projects;