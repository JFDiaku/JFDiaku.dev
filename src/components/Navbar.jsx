import {
  useMediaQuery,
  IconButton,
} from "@mui/material";

import {
  Menu,
  Close,
} from "@mui/icons-material";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from "react";

function Navbar({mode, toggleMode}) {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
   <>
    <nav className="Navbar" 
      style={mode === 'dark' ? {backgroundColor:"#212121", boxShadow:"0 0 8px #1d1d1d"} 
      : {backgroundColor:"white", boxShadow:"0 0 8px #E9E9E9"}} >

        <a href="#">
          <h1 style={mode === 'dark' ? {color:"#7cc9f3"} : {color:"#23556f"}} className="logo">
            JFDiaku.dev
          </h1>
        </a>

        <button className="mode" onClick={() => toggleMode()}>
          {mode === 'dark' ? <Brightness7Icon sx={{fontSize:"2em", color:"white"}} /> : <Brightness4Icon sx={{fontSize:"2em"}} />}
        </button>
        
    
        {/* Desktop Nav */}
        {isnonMobileScreens ? (
          <div className='Navlinks'>
            <ul>
              <li>
                <a 
                style={mode === 'dark' ? {color:"white"} 
                : {color:"black"}} href="#Home">Home</a>
              </li>
              <li>
                <a 
                style={mode === 'dark' ? {color:"white"} 
                : {color:"black"}} href="#About">About</a>
              </li>
              <li>
                <a 
                style={mode === 'dark' ? {color:"white"} 
                : {color:"black"}} href="#Projects">Porfolio</a>
              </li>
              <li>
                <a 
                style={mode === 'dark' ? {color:"white"} 
                : {color:"black"}} href="#Contact">Contact</a>
              </li>
            </ul>
            
          </div>

        ): (
            <button className="navButton"
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu sx={mode === "dark" ? {color:'white', fontSize:'3em', ":hover":{color:"#a3d6f1"}} 
                : {color:'black', fontSize:'3em', ":hover":{color:"#a3d6f1"}} } />
          </button>
        )}

      {/*Mobile Nav*/ }  
      <div style={mode === 'dark' ? {backgroundColor:"#212121"} 
      : {backgroundColor:"white"}} className={!isMobileMenuToggled ? 'Mobilenav' : 'Mobilenav-open'}>
        <div>
          <div className="closeBtn">
            <button className="navButton"
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close sx={mode === "dark" ? {color:'white', fontSize:'2.3em', ":hover":{color:"#a3d6f1"}} 
                : {color:'black', fontSize:'2.3em', ":hover":{color:"#a3d6f1"}} } />
            </button>
          </div>

          <div className='MobileNavlinks'>
            <ul>
              <li>
                <a style={mode === 'dark' ? {color:"white", ":hover":{color:"#88ccf0"}} 
                : {color:"black", ":hover":{color:"#88ccf0"}}} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                 href="#Home">Home</a>
              </li>
              <li>
                <a style={mode === 'dark' ? {color:"white", ":hover":{color:"#88ccf0"}} 
                : {color:"black", ":hover":{color:"#88ccf0"}}} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                href="#About">About</a>
              </li>
              <li>
                <a style={mode === 'dark' ? {color:"white", ":hover":{color:"#88ccf0"}} 
                : {color:"black", ":hover":{color:"#88ccf0"}}} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                 href="#Projects">Projects</a>
              </li>
              <li>
                <a style={mode === 'dark' ? {color:"white", ":hover":{color:"#88ccf0"}} 
                : {color:"black", ":hover":{color:"#88ccf0"}}} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                 href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </nav>
   </>
  )
}

export default Navbar;
