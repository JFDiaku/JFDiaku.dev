import Reactlogo from "../imgs/React.svg" ;
import HTMLlogo from "../imgs/html.svg" ;
import CSSlogo from "../imgs/CSS.svg" ;
import Nodelogo from "../imgs/Node.svg" ;
import Mongologo from "../imgs/mongodb.svg" ;
import sqllogo from "../imgs/sql.svg" ;
import JSlogo from "../imgs/JS.svg" ;
import php from "../imgs/php.svg";
import muiLogo from "../imgs/muiLogo.png";

import {
  useMediaQuery,
} from "@mui/material";
import { MultilineChart } from "@mui/icons-material";


function Tech({mode}) {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section >
          <div className="container">
            <div  className={isnonMobileScreens ? "tech" : "Mobiletech"}>
              {isnonMobileScreens ? 
              (<p style={mode === 'dark' ? {color:"white"} : {color:"black"}} className="techText">
                Tech Stack&nbsp;&nbsp;&nbsp;&nbsp;|
              </p>):
              (<p style={mode === 'dark' ? {color:"white"} : {color:"black"}} className="mobTechText">
                <u>Tech Stack</u>
              </p>)}
              
              <div className={isnonMobileScreens ? "techIcons" : "mobTechIcons"}>
                <ul>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}} >
                    <img className="techIcon" src={HTMLlogo} alt="HTML" title="HTML"/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="CSS" title="CSS" src={CSSlogo}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"}
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="Material UI" title="Material UI" src={muiLogo}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="JavaScript" title="JavaScript" src={JSlogo}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="PHP" title="PHP" src={php}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="SQL" title="SQL" src={sqllogo}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="React" title="React" src={Reactlogo}/>
                  </li>
                  <li style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"}
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}>
                    <img className="techIcon" alt="NodeJS" title="NodeJS" src={Nodelogo}/>
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
