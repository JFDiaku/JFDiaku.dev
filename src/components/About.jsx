import {
  useMediaQuery,
} from "@mui/material";

import punch from "../imgs/punch.png" ;
import comic from "../imgs/comic.png" ;
import cook from "../imgs/cook.png" ;
import food from "../imgs/food.png" ;
import music from "../imgs/music.png" ;
import lift from "../imgs/lift.png" ;


function About() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  const issmallScreens = useMediaQuery("(max-width: 500px)");
  return (
    <>
      <section id="About">
        <div className="container">
      
          <div className={isnonMobileScreens ? "about" : "mobAbout"}>
              
              <div className="circleBack">
                <div className={issmallScreens ? "mobCircle" : "circle"}>
                  <img src={cook} className="circleIcon"/>
                  <img src={lift} className="circleIcon"/>
                  <img src={music} className="circleIcon"/>
                  <img src={punch} className="circleIcon"/>
                  <img src={comic} className="circleIcon"/>
                  <img src={food} className="circleIcon"/>
                </div>
              </div>
       
            

            <div className="aboutLeft">

                <h1 className="aboutTitle"><u>ABOUT ME</u></h1>

                <h1 className="aboutDescrip">A dedicated Full-stack developer based in Austin, Texas 📍</h1>

                <p className="AboutText">
                  Hi, Im jeff. I'm a Full Stack Developer skilled in HTML, CSS, JavaScript, PHP, SQL, MongoDB, React.js,
                  and Node.js. I specialize in creating intuitive web applications with exceptional user experiences. 
                  From front-end development to back-end systems, I have a solid understanding of building responsive 
                  interfaces and scalable server-side solutions. With a passion for continuous learning and collaboration, 
                  I'm always ready to take on new challenges and contribute to cutting-edge projects. Let's connect and 
                  create remarkable web experiences together!
                </p>
            </div>
          </div>
        </div>
          
      </section> 
    </>
  )
}

export default About
