import ux from './../src/assets/ux.png';
import web from './../src/assets/web.png';
import app from './../src/assets/app.png';
import { Link } from 'react-router-dom';
import './about.css';
import resume from'./../src/assets/ZlaanAhmedResume_IT.pdf';


export default function About() {
  return (
    // staring with an intro section
    <section id="skill">
      <h1 className="skillTitle">What I Do</h1>
      <p className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </p>
{/* using containers from the css here */}
      <div className="skillsContainer">
        <div className="skillBar">
          {/* Referncing images */}
          <img src={ux} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Medium Profecient in UI/UX desgin</p>
          </div>
        </div>

        <div className="skillBar">
          {/* Image */}
          <img src={web} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Able to make exceptional Web Design.</p>
          </div>
        </div>

        <div className="skillBar">
          {/* Image */}
          <img src={app} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Skilled in building enterprise level Mobile apps</p>
          </div>
        </div>
      </div>
      {/* Link to my pdf resume */}
      <p>You can view my resume here: </p>
      <a href={resume} target='_blank' className='pdfLink'>Download Resume (pdf)</a>
    </section>
  );
}
