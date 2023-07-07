import {
  useMediaQuery,
  IconButton,
} from "@mui/material";

import {
  Menu,
  Close,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
   <>
    <nav className="Navbar" >
        <Link>
          <h1 className="logo">
            JFDiaku.dev
          </h1>
        </Link>
    
        {/* Desktop Nav */}
        {isnonMobileScreens ? (
          <div className='Navlinks'>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            
          </div>

        ): (
            <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu sx={{color:"white", fontSize: 40, ":hover":{color: "#a3d6f1"}}} />
          </IconButton>
        )}

      {/*Mobile Nav*/ }  
      <div className={!isMobileMenuToggled ? 'Mobilenav' : 'Mobilenav-open'}>
        <div>
          <div className="closeBtn">
            <IconButton
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close sx={{color:'white', fontSize:'1.5em', ":hover":{color:"#a3d6f1"}}} />
            </IconButton>
          </div>

          <div className='MobileNavlinks'>
            <ul>
              <li>
                <a onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                 href="#Home">Home</a>
              </li>
              <li>
                <a onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                href="#About">About</a>
              </li>
              <li>
                <a onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                 href="#Projects">Projects</a>
              </li>
              <li>
                <a onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
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
