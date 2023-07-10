import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tech from "./components/Tech";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = mode === "dark" ? () => setMode("light") : () => setMode("dark");

  const body = document.body;
  useEffect(() =>{
    if(mode === 'dark'){
       body.style.background = '#272727';
    }
    else{
      body.style.background = 'white';
    }
  })
  

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Home mode={mode}/>
    <Tech mode={mode}/> 
    <About mode={mode}/>
    <Projects mode={mode}/>
    <Contact mode={mode} />
    <Footer mode={mode}/>
    </>
  );
}

export default App;
