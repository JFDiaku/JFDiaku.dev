import Reactlogo from "../imgs/React.svg" ;
import HTMLlogo from "../imgs/html.svg" ;
import CSSlogo from "../imgs/CSS.svg" ;
import Nodelogo from "../imgs/Node.svg" ;
import Mongologo from "../imgs/mongodb.svg" ;
import sqllogo from "../imgs/sql.svg" ;
import JSlogo from "../imgs/JS.svg" ;
import php from "../imgs/php.svg";

import {
  useMediaQuery,
} from "@mui/material";


function Tech() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section>
          <div className="container">
            <div className={isnonMobileScreens ? "tech" : "Mobiletech"}>
              {isnonMobileScreens ? 
              (<p className="techText">
                Tech Stack&nbsp;&nbsp;&nbsp;&nbsp;|
              </p>):
              (<p className="mobTechText">
                <u>Tech Stack</u>
              </p>)}
              
              <div className={isnonMobileScreens ? "techIcons" : "mobTechIcons"}>
                <ul>
                  <li>
                    <img className="techIcon" src={HTMLlogo} alt="HTML"/>
                  </li>
                  <li>
                    <img className="techIcon" src={CSSlogo}/>
                  </li>
                  <li>
                    <img className="techIcon" src={JSlogo}/>
                  </li>
                  <li>
                    <img className="techIcon" src={php}/>
                  </li>
                  <li>
                    <img className="techIcon" src={sqllogo}/>
                  </li>
                  <li>
                    <img className="techIcon" src={Reactlogo}/>
                  </li>
                  <li>
                    <img className="techIcon" src={Mongologo}/>
                  </li>
                  <li>
                    <img className="techIcon" src={Nodelogo}/>
                  </li>
                </ul>
              </div>
            </div>    
          </div>
      
      </section>
    </>
  )
}

export default Tech
