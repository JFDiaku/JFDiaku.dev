import {
  useMediaQuery,
} from "@mui/material";
import Button from '@mui/material/Button';
import gitlogo from "../imgs/git.svg" ;
import {useState}  from "react";
import goPlay from "../imgs/goplaypic.svg";
import ProjectModal from "./ProjectModal";
import laptop from "../imgs/laptop.png";
import argHome from "../imgs/argHome.svg";

function Projects({mode}) {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  
 
  return (
    <>
      <section style={mode === 'dark' ? {backgroundColor:"#212121"} : {backgroundColor:"#F6F6F6"}} id="Projects" >
        <div className="container">
          <div  className={isnonMobileScreens ? 'projects' : 'mobProjects'}>
            <h1 className="projectTitle" style={mode === 'dark' ? {color:"white"} 
            : {color:"#353535"}} ><u><b>Portfolio</b>  </u></h1>
            
            <div className="projectList">
              <div style={mode === 'dark' ? {backgroundColor:"#1e1e1e"} 
                : {backgroundColor:"#E5E5E5"}} className="projCard" >

            
                <img className="projPic" alt="GOPLAYDashboard" title="GOPLAYDashboard" src={goPlay}/>
              
                
                

                <div  className="projDecrip">

                  <hl style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}} className="projTitle">
                    <b>GOPLAY</b>
                  </hl>

                  <p style={mode === 'dark' ? {color:"#7cc9f3"} : {color:"#23556f"}} className="projdetail">
                  A social web application where local athletes with similar interest can connect and meet each other to play sports. .
                  </p>

                  <div className="stackList">
                    <p className="stackItem">HTML</p>
                    <p className="stackItem">CSS</p>
                    <p className="stackItem">JavaScript</p>
                    <p className="stackItem">PHP</p>
                    <p className="stackItem">SQL</p>
                    <p className="stackItem">Bootstrap</p>
                  </div>


                  <div className="projAcc-list">
                    <Button sx={isnonMobileScreens ? {maxWidth:"6rem", marginTop:"2rem"} : {maxWidth:"6rem"}} onClick={handleOpen} size="small" variant="contained">See More</Button>
                    
                    <div className="projAcc" >
                      Code:&nbsp; 
                      <a target="_blank" href={"https://github.com/JFDiaku/GoPlay"}>
                      <img className="projIcon" alt="gitHubLogo" src={gitlogo}/>
                      </a>
                      
                    </div>
                  </div>
                  
                  
                </div>

              </div>

              <div style={mode === 'dark' ? {backgroundColor:"#1e1e1e"} 
                : {backgroundColor:"#E5E5E5"}} className="projCard" >

            

              
              <img className="projPic arg-laptop" alt="GOPLAYDashboard" title="GOPLAYDashboard" src={argHome}/>
             
                

              

                

                <div  className="projDecrip">

                  <hl style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}} className="projTitle">
                    <b>ARG Integrated Energy Services</b>
                  </hl>

                  <p style={mode === 'dark' ? {color:"#7cc9f3"} : {color:"#23556f"}} className="projdetail">
                    ARG Integrated Energy services is An International Oil & Gas Company that provides Energy consultation and management services.
                  </p>

                  <div className="stackList">
                    <p className="stackItem">HTML</p>
                    <p className="stackItem">CSS</p>
                    <p className="stackItem">JavaScript</p>
                    <p className="stackItem">React + Vite</p>
                    <p className="stackItem">Framer</p>
                  </div>

                  

                  <div className="projAcc-list">
                    <div className="projAcc" >
                      Code:&nbsp; 
                      <a target="_blank" href={"https://github.com/JFDiaku/ARGIntegrated"}>
                      <img className="projIcon" alt="gitHubLogo" src={gitlogo}/>
                      </a>
                      
                    </div>

                    <div className="projAcc" >
                      <a target="_blank" href={"https://jfdiaku.github.io/ARGIntegrated/"}>
                       Demo
                      </a>
                      
                  </div>
                  </div>
                  
                  
                </div>

              </div>

              <p className="comingSoon"><b>More Projects coming soon....</b></p>


            </div>

            <ProjectModal open={open} handleClose={handleClose} handleOpen={handleOpen} mode={mode} />
  

          </div>

        </div>
      </section>
    </>
  )
}

export default Projects;
