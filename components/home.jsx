import BBG from './BBG.jfif';
import './../src/index.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="skill">
      <div className="introContent">
        {/* Refering to the css text blocks */}
        <div className="introTextBlock">
          <span className="hello">Hello,</span><br/>
          <span className="introText"> 
            {/* Using Link attribute to link the name to the about me page */}
            I am <Link to="/about" className="introName">Zlaan Ahmed</Link>
            <br/>Website Designer
          </span>
          {/* The intro para */}
          <p className="introPara">
            I am a skilled web designer with experience in creating visually appealing,
            user-friendly websites and am currently studying how to make client side websites with React.
          </p>
        </div>
{/* The image that should include my face but I did not due to privacy reasons */}
        <div className="introImage">
          <img src={BBG} alt="profile" className="bbg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
