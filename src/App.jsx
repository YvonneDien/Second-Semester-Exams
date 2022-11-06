import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React, { useState, useEffect,} from 'react';
//import {HelmetProvider} from 'react-helmet-async';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Sections from "./Components/Sections";
import NoPage from "./Components/NoPage";
//import Login from "./Components/Login";

class ErrorBoundary extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
 
  }
 
  render() {
    if (this.state.errorInfo) {
 
      return (
        <div>
          <h1>An Error Has Occurred</h1>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}



function App() {

  
    return (
    <ErrorBoundary>
    <div className="app" style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8azqgTqrx3X5Y4Yu14ZzDZsHpnfuwzD9Mw&usqp=CAU")` 
    }}>
      <BrowserRouter>
    <nav className="navbar">
       <Link className="home" to="/">Home</Link>
       <Link className="about" to='/About'>About</Link>
    </nav>
     
    <Routes className= "app-route">
     <Route path = "/" element = {<Home/>}/>
      <Route path = "/About" > 
        <Route  index element = {<About/>} />
        <Route path = "Sections" element = {<Sections/>}/>
        <Route path = "Contact" element = {<Contact/>}/>
      </Route>
       <Route path="*" element={<NoPage />} />
       </Routes>
    </BrowserRouter>
    </div>
     </ErrorBoundary>
   ) 
}
export default App;
