import { Link } from "react-router-dom";
import {
  useMediaQuery,
} from "@mui/material";

import linkedlogo from "../imgs/linked.svg" ;
import gitlogo from "../imgs/git.svg" ;

function Home({mode}) {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");

  
  
  return (
    <>
      <section id="Home" style={mode === 'dark' ? {backgroundColor:"#212121"} : {backgroundColor:"#F6F6F6"}} >

        <div className="container">

          <div className={isnonMobileScreens ? "Home" : "Mobilehome"}>
          
            <div >
                
                <h1 className="Hometitle"  style={mode === 'dark' ? {color:"white"} : {color:"#353535"}}>Full-stack Developer 👋</h1>
                
                <p style={mode === 'dark' ? {color:"#7cc9f3"} : {color:"#23556f"}}
                 className="Hometext">Hello, I'm Jeff Diaku. 
                  I develop creative and interactive web applications.
                </p>

                <div className="homeIcons">
                  <a target="_blank" href={"https://linkedin.com/in/jeff-francis-diaku-0693b6264"}>
                    <img className="homeIcon" src={linkedlogo}/>
                  </a>
                  <a target="_blank" href={"https://github.com/JFDiaku"}>
                    <img className="homeIcon" src={gitlogo}/>
                  </a>
                </div>

            </div>

          <div className="blob" style={mode === 'dark' ? {border:"solid 4px white"} : {border:"solid 4px black"} }></div>

        </div>

        </div>

      </section>
    </>
  )
}

export default Home
