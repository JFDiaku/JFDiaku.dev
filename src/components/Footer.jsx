import {
  useMediaQuery,
} from "@mui/material";

import linkedlogo from "../imgs/linked.svg" ;
import gitlogo from "../imgs/git.svg" ;


function Footer() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section style={{backgroundColor:"333333"}}>
        <div className="container">
          <div className={isnonMobileScreens ? 'footer' : 'mobFooter'}>
            <h3 style={{fontSize:"1em", color:"white"}}><b>Copyright © 2023. All rights are reserved</b></h3>

            <span>
              <a target="_blank" href={"https://linkedin.com/in/jeff-francis-diaku-0693b6264"}>
                <img className="homeIcon" src={linkedlogo}/>
              </a>
  
              <a target="_blank" href={"https://github.com/JFDiaku"} style={{marginLeft:"1rem"}}>
                <img className="homeIcon" src={gitlogo}/>
              </a>
            </span>
              
            
           

          </div>

        </div>
      </section>
    </>
  )
}

export default Footer;