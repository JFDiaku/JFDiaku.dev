import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import Slide from '@mui/material/Slide';
import goPlayHome from "../imgs/goplayHome.svg";
import goplayRegister from "../imgs/goplayRegister.svg";
import goplayLogin from "../imgs/goplayLogin.svg"
import goplayMessage from "../imgs/goplayMessage.svg";
import goplayDash from "../imgs/goplayDash.png";
import goplaySearch from "../imgs/goplaySearch.svg";
import goplayAcc from "../imgs/goplayAcc.svg";
import {Close} from "@mui/icons-material";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


 
const ProjectModal = ({open, handleClose, handleOpen, mode}) => {



  
  
  
  const goplayPages = [
      {
        "name" : "Homepage",
        "path" : goPlayHome,

      },
      {
        "name" : "Register",
        "path" : goplayRegister,

      },
      {
        "name" : "Login",
        "path" : goplayLogin,

      },
      {
        "name" : "Message",
        "path" : goplayMessage,

        
      },
      {
        "name" : "Dashboard",
        "path" : goplayDash,

      },
      {
        "name" : "Search",
        "path" : goplaySearch,

      },
      {
        "name" : "Account",
        "path" : goplayAcc,
      },
      {
        "name" : "Overview",
        "path" : goPlayHome,

      },
      {
        "name" : "Tools",
        "path" : goPlayHome,

      },
      {
        "name" : "Roadblocks",
        "path" : goPlayHome,

      },
      {
        "name" : "Further development",
        "path" : goPlayHome,

      },
    
    ];

    


  
  // Function to change the image source
  function changeImageSource(pageName) {
    const imageElement = document.querySelector(".pageImg");
    const page = goplayPages.find(obj => obj.name === pageName);
    
    if (page) {
      imageElement.src = page.path;
    } else {
      console.log("Page not found in the array.");
    }
  }

  return (
    <> 
      <Dialog
        PaperProps={{
        style: {
          margin:'0',
          padding:'0',
          backgroundColor:'Transparent',
          maxWidth:'none',
        }}}
        
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={mode === 'dark' ? {backgroundColor:"#131313"} 
                : {backgroundColor:"#E5E5E5"}} className="modal">
            <button className={mode === "dark" ? 'close-btn-dark' : 'close-btn-light' } onClick={() => handleClose()}>
              <Close sx={mode === "dark" ? {color:"white", fontSize:"1.5em"} : {color:"black", fontSize:"1.5em"} }/>
            </button>
         
            <div className="goPlayPgs">
              <div className='pageButtons'>
                <button className='pageButton' onClick={() => changeImageSource("Homepage")}>Homepage</button>
                <button className='pageButton' onClick={() => changeImageSource("Register")}>Register</button>
                <button className='pageButton' onClick={() => changeImageSource("Login")}>login</button>
                <button className='pageButton' onClick={() => changeImageSource("Dashboard")}>Dashboard</button>
                <button className='pageButton' onClick={() => changeImageSource("Search")}>Search</button>
                <button className='pageButton' onClick={() => changeImageSource("Message")}>Messages</button>
                <button className='pageButton' onClick={() => changeImageSource("Account")}>Account</button>
              </div> 
              
             <div className='page'>
                <div className='pageDiv'>
                  <img className='pageImg' alt="pageImages" src={goPlayHome}/>
                </div>  
             </div>  
            </div>
            
            <div class="modalDetails" >
            
              
              
              <div className='goPlaydetails'>

                <h1 style={mode === 'dark' ? {color:"white"} 
                  : {color:"#353535"}} className='detailName'><u>Overview</u>
                </h1>

                <p style={{color: mode==='dark'?'white' :'black', marginTop:"1rem"}} className='detailText' >
                    <b>
                      GOPLAY addresses the challenge many face in finding compatible training partners or teammates for team sports or partner 
                      activities like running and lifting. Users can create profiles reflecting their interests, making it easier to connect with 
                      like-minded individuals seeking partners for various activities. Whether it's team sports, running, lifting, or other pursuits, 
                      GOPLAY facilitates the formation of new friendships and teams outside of established social circles.      
                    </b>
                </p>

                <div style={{marginTop:'2rem'}}>
                  <h1 style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}} className='detailName'><u>Front-end </u>
                  </h1>

                  <p style={{color: mode==='dark'?'white' :'black', marginTop:"1rem"}} className='detailText' >
                      <b>
                      the front end of the project employed <b style={{color:"#7cc9f3"}}>HTML</b> and <b  style={{color:"#7cc9f3"}}>CSS</b> to structure and style the interface. <b  style={{color:"#7cc9f3"}}>Bootstrap</b>, a CSS framework,
                       was utilized to expedite design by offering pre-defined classes for styling elements and ensuring responsiveness.  The HTML5 <b style={{color:"#7cc9f3"}}>Geolocation API</b> was utilized to detect latitude and longitude, providing location-based functionalities. 
                    <b  style={{color:"#7cc9f3"}}> JavaScript</b> enhanced interactivity, enabling features like form validation and DOM manipulation, while <b style={{color:"#7cc9f3"}}>AJAX </b>facilitated
                        asynchronous data exchange. 
                      </b>
                  </p>

                </div>

                <div style={{marginTop:'2rem'}}>
                  <h1 style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}} className='detailName'><u>Back-end </u>
                  </h1>

                  <p style={{color: mode==='dark'?'white' :'black', marginTop:"1rem"}} className='detailText' >
                      <b>
                      The back end of the project handled data management, security, and application logic. <b style={{color:"#7cc9f3"}}>PHP </b> executed server-side scripts to generate dynamic content and 
                      interact with databases, while <b style={{color:"#7cc9f3"}}>SQL</b> managed relational databases efficiently. JavaScript, with <b style={{color:"#7cc9f3"}}>Node.js</b>, supported server-side scripting and facilitated 
                      smooth communication between client and server. Additionally, APIs enabled seamless interaction between different software components, enhancing overall functionality.    
                      </b>
                  </p>

                </div>


              
 
              </div>
               
            </div>
          </div>

      </Dialog>

    </>
    
    
  )
}

export default ProjectModal;
