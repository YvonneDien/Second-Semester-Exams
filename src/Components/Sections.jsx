import { NavLink, Outlet, Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";


function Sections () {
return (
  <>
<Helmet>
  <title>Home</title>
    <meta name="description" content="Rock Solid Academy offers the best educational services" /> 
      <link rel="canonical" href="https://second-semester-exams.yvonnedien.repl.co/About/Sections" />
      <meta data-react-helmet="true" />
  </Helmet>

    
  <section className = "Classes-Page">
  <h1 className= "Heading">OUR CLASSES</h1>
    <p>Our classes range from Pre-nursery, Nursery, and Primary School sections</p>
  
    <Link to = "/" className="Navigate"> Home </Link>
  </section>
  </>
)  
}

export default Sections;