import { NavLink, Outlet, Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";


function About () {
return (
  <>
<Helmet>
  <title>Home</title>
    <meta name="description" content="Rock Solid Academy offers the best educational services" /> 
      <link rel="canonical" href="https://second-semester-exams.yvonnedien.repl.co/About" />
      <meta data-react-helmet="true" />
  </Helmet>
    
  <section className = "About-Page">
  <h1 className= "Heading">About Us</h1>
    <p>Rock Solid Academy is an early years institution which caters for the cognitive, Affective and Psychomotor needs of learners within the ages of 0-12 years of age from near and far</p>
    <p>Click on the link below to see some of our sections and also our online and offline contact details</p>
    <Link to = "/" className="Navigate"> Home </Link>
     <Link to = "/About/Contact" className="Navigate"> Contact </Link>
     <Link to = "/About/Sections" className="Navigate"> Sections </Link>
  </section>
  </>
)  
}

export default About;