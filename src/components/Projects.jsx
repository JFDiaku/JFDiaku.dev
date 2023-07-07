import {
  useMediaQuery,
} from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import gitlogo from "../imgs/git.svg" ;
import {useState}  from "react";
import goPlay from "../imgs/goplaypic.svg";
import ProjectModal from "./ProjectModal";


function Projects() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
 
  return (
    <>
      <section  id="Projects" style={{backgroundColor:"#1e1e1e"}} >
        <div className="container">
          <div className={isnonMobileScreens ? 'projects' : 'mobProjects'}>
            <h1 className="projectTitle"><u> PROJECTS </u></h1>
            
            <div className="projectList">
              <div className="projCard" >

            
                <img className="projPic" src={goPlay}/>
              
                
                

                <div className="projDecrip">

                  <hl className="projTitle">
                    GOPLAY
                  </hl>

                  <p className="projdetail">
                  a social web application where local athletes can connect and meet each other to play sports. 
                  Users can create unique profiles that reflect their sport(s) of interest. Profiles are stored in a SQL databasse that 
                  is then accessed and used to match users with athletes with similar interests.
                  </p>

                  <div className="stackList">
                    <p className="stackItem">HTML</p>
                    <p className="stackItem">CSS</p>
                    <p className="stackItem">JavaScript</p>
                    <p className="stackItem">PHP</p>
                    <p className="stackItem">SQL</p>
                    <p className="stackItem">Bootstrap</p>
                  </div>


                  <Button sx={{marginTop:"2rem"}} onClick={handleOpen} size="small" variant="contained">See More</Button>
                  
                  <div className="projAcc">
                    <Link>
                      Code:&nbsp;
                      <img className="projIcon" src={gitlogo}/>
                    </Link>
                    
                  </div>
                  
                </div>

              </div>


              <p className="comingSoon">More Projects coming soon....</p>


            </div>

            <ProjectModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
  

          </div>

        </div>
      </section>
    </>
  )
}

export default Projects;
