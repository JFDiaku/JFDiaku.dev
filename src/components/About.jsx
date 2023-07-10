import {
  useMediaQuery,
} from "@mui/material";

import punch from "../imgs/punch.png" ;
import comic from "../imgs/comic.png" ;
import cook from "../imgs/cook.png" ;
import food from "../imgs/food.png" ;
import music from "../imgs/music.png" ;
import lift from "../imgs/lift.png" ;


function About({mode}) {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  const issmallScreens = useMediaQuery("(max-width: 500px)");
  return (
    <>
      <section id="About">
        <div className="container">
      
          <div className={isnonMobileScreens ? "about" : "mobAbout"}>
              
              <div className="circleBack">
                <div  className={issmallScreens ? "mobCircle" : "circle"}>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}} 
                  alt="Cooking" title="I make a MEAN bolognese sauce." src={cook} className="circleIcon"/>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}} 
                  alt="Lifting" title="I pick up heavy thingss...then i put them down." src={lift} className="circleIcon"/>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}
                  alt="Music" title="I like every genre of music....except country, lets not forget kpop 🤮." src={music} className="circleIcon"/>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}}
                  alt="Martial-Arts" title="I'm basically bruce lee. Dont tell anyone 🤫" src={punch} className="circleIcon"/>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}} 
                  alt="Comics" title="I can only comprehend books with pretty pictures." src={comic} className="circleIcon"/>

                  <img style={mode === 'dark' ? {backgroundColor:"#1e1e1e", boxShadow:"2px 2px 12px #1d1d1d"} 
                  : {backgroundColor:"white", boxShadow:"2px 2px 12px #DEDEDE"}} 
                  alt="FOOOOD" title="FOOOOD!!!!" src={food} className="circleIcon"/>

                </div>
              </div>
       
            

            <div className="aboutLeft">

                <h1 className="aboutTitle"><u>ABOUT ME</u></h1>

                <h1 style={mode === 'dark' ? {color:"white"} : {color:"#353535"}} className="aboutDescrip">A dedicated Full-stack developer based in Austin, Texas 📍</h1>

                <p style={mode === 'dark' ? {color:"#7cc9f3"} : {color:"#23556f"}} className="AboutText">
                  Hi, Im jeff. I'm a Full Stack Developer skilled in HTML, CSS, JavaScript, PHP, SQL, MongoDB, React.js,
                  and Node.js. I specialize in creating intuitive web applications with exceptional user experiences. 
                  From front-end development to back-end systems, I have a solid understanding of building responsive 
                  interfaces and scalable server-side solutions. With a passion for continuous learning and collaboration, 
                  I'm always ready to take on new challenges and contribute to cutting-edge projects.

                  In my free time I enjoy 
                </p>
            </div>
          </div>
        </div>
          
      </section> 
    </>
  )
}

export default About
