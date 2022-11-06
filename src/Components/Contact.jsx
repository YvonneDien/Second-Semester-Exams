import { NavLink, Outlet, Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";

function Contact () {
return (
  <>
<Helmet>
  <title>Home</title>
    <meta name="description" content="Rock Solid Academy offers the best educational services" /> 
      <link rel="canonical" href="https://second-semester-exams.yvonnedien.repl.co/About/Contact" />
      <meta data-react-helmet="true" />
  </Helmet>
    
  <section className = "Contact-Container">
  <h1 className= "Heading">CONTACT US</h1>
    <p>Email: rocksolidacademy@naijamail.com </p>
    <p>Telephone: 08000000000 </p>
    <p>Office Address: Plot 8, Altschool Avenue</p>
     <Link to = "/" className="Navigate"> Home </Link>
     <Link to = "/About" className="Navigate"> About </Link>
  </section>
  </>
)  
}

export default Contact;