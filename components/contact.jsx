import './contact.css'
import {Link} from 'react-router-dom'
const Contact = ()=>{
    return (
    <section id="skill">
      <h1 style={{ textAlign: "center", color: "#646cff" }}>Contact</h1>
{/* Input for first name */}
      <form id="ffp">
        <label htmlFor="myFName"> *First Name: </label>
        <input
          type="text"
          id="myFName"
          name="myFName"
          required="required"
          autoFocus
        />
{/* Intro for last name */}
        <label htmlFor="myLName"> *Last Name: </label>
        <input type="text" id="myLName" name="myLName" required="required" />

        <label htmlFor="myEmail"> *Email: </label>
        <input type="email" id="myEmail" name="myEmail" required="required" />

        <Link to="/"><input type="submit" className="submit" value="Submit" /></Link>
      </form>
{/* The contact info right here */}
      <div className="contact-info">
        <p>
          <i>
            Call me on: <strong>888.555.5555</strong>
          </i>
        </p>
        <p>facebook: www.Zlatan.facebook.com</p>
        <p>email: Zlantan@yahoo.com</p>
      </div>
    </section>
  );
}

export default Contact;