import { Link } from "react-router-dom";
import {
  useMediaQuery,
} from "@mui/material";

import linkedlogo from "../imgs/linked.svg" ;
import gitlogo from "../imgs/git.svg" ;

function Home() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section id="Home" style={{backgroundColor:"#212121"}}>

        <div className="container">

          <div className={isnonMobileScreens ? "Home" : "Mobilehome"}>
          
            <div >
                
                <h1 className="Hometitle">Full-stack Developer 👋</h1>
                
                <p className="Hometext">Hello, I'm Jeff Diaku. 
                  I develop creative and interactive web applications.
                </p>

                <div className="homeIcons">
                  <a target="_blank" href={"https://linkedin.com/in/jeff-francis-diaku-0693b6264"}>
                    <img className="homeIcon" src={linkedlogo}/>
                  </a>
                  <a>
                    <img className="homeIcon" src={gitlogo}/>
                  </a>
                </div>

            </div>

          <div className="blob"></div>

        </div>

        </div>

      </section>
    </>
  )
}

export default Home
