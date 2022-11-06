import {Routes, Route, Link} from "react-router-dom";
import {useState} from 'react';
import {Helmet} from "react-helmet-async";

function Home() {
    const [count, setCount] = useState(0)

  
 function handleCount() {
  setCount(prev => prev + 1)

}
    if(count > 3) {
    throw new Error("Error Boundary. Checked.");
  }

return (
<>
    <Helmet>
  <title>Home</title>
    <meta name="description" content="Rock Solid Academy offers the best educational services" /> 
      <link rel="canonical" href="https://second-semester-exams.yvonnedien.repl.co/" />
      <meta data-react-helmet="true" />
  </Helmet>
  <section className= "Home-Container" >
    
  <h1 className= "Heading">Welcome to the Home Page of ROCK SOLID ACADEMY</h1>
    <img className="Image" alt="reading children"  width="400px" height="400px" src="https://cdn.vectorstock.com/i/1000x1000/40/30/cute-children-reading-books-vector-15934030.webp" />
  
  <p> We are so glad to have you visit us here!!! We hope you have a pleasant time.</p>
   
    <Link to = "/About" className="Navigate"> About Page </Link>
   <h2>Count:  {count}</h2>
    <p>To check error boundary, increase to count to be greater than 3</p>
     <button onClick={handleCount}>INCREASE</button>
  </section>
  </>
)  
}
export default Home;