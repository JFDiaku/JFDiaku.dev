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

import {useState}  from "react";
import { IconButton } from '@mui/material';
import {Close} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 
const ProjectModal = ({open, handleClose, handleOpen}) => {

  const [openNav, setOpen] = useState(false);     
  
  
  const goplayPages = [
      {
        "name" : "Homepage",
        "path" : goPlayHome,
        "details" : `<h1 class='detailName'><u>Homepage</u></h1>
                    <p class='detailText'  style='margin-top:1rem'>
                      The homepage features 3 main sections. On the very top of the page is a navigation bar that features the website logo and links leading to the login and registration page.
                    The first section quickly describes a GoPlay and has a “join” now button with an embedded link leading to the registration page. Under the first section is the about section that describes in detail what GoPlay is.
                    Finally, Below the about section is the “how it works” section which describes how the website uses geolocation to locate other users.
                    <p/>`
      },
      {
        "name" : "Register",
        "path" : goplayRegister,
        "details" : `<h1 class='detailName'><u>Register</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      The registration page has a single form with input fields for the First name, last name, username, email, a short description, profile picture, passwords, city, state, and a checkbox asking users for permission to save their location coordinates in the database.<br><br/>		
                    Within the form, there are 2 hidden text fields, one each for the longitude and latitude. When the user agrees to the permissions by marking the checkbox, the longitude and latitude values are set in their designated input fields using a javascript function that utilizes the HTML5 
                    GeoLocation API. Some users might feel uncomfortable with their approximate location being stored so the city and state input fields are required in order to register.
                    <br><br/>
                    For validation, there are error messages for each required input field left blank, invalid email addresses, and mismatched passwords. each password is hashed before being stored in the database. 
                    The images uploaded by the users for the profile pictures are stored in the database in a  string format of the file path where the images are physically stored in the internal file system. Each image is given a unique id before being stored and uploaded to avoid matching the wrong image to the wrong profile.
                    If there are no errors in the form, the contents of the input fields are put into their corresponding columns in the database and the user is redirected to the login page.
                    <p/>`,
      },
      {
        "name" : "Login",
        "path" : goplayLogin,
        "details" : ` <h1 class='detailName'><u>Login</u></h1>
                      <p class='detailText' style='margin-top:1rem'>
                        The login page features one form similar to the registration page except there are only 2 input fields. The first input field takes the users’ email or username and the second one takes their password. The form has error messages for wrong credentials, invalid users, and blank input fields. 
                        <br><br/>
                        The login system authenticates the user by first performing a query that checks if the entered username or email is present in the database. If a matching user is found, the entered password is compared to the matched user's hashed password in the database using the password-verify function
                      <p/>`,
      },
      {
        "name" : "Message",
        "path" : goplayMessage,
        "details" : ` <h1 class='detailName'><u>Messages</u></h1>
                      <p class='detailText' style='margin-top:1rem'>
                        Users can chat with others by typing their usernames into the “to:” input field or by clicking on a profile on the search page. 
                      If an unknown username is entered into the input field, the user is shown a message that the entered username does not exist . 
                      <br><br/>
                      Anytime a message is sent, it is added to the messages table. Rendering the chat for each specific interaction works similarly to the search. 
                      I achieved this by using the setInterval method to repeatedly execute a loadChat function which executes the query in a PHP file every 500 milliseconds. 
                      This way, the chatbox is almost instantly updated when a message is sent.
                      <br><br/>
                        The specific message thread between users is extracted from the database by performing a query that joins the users and messages table and binding the id column on the user's table to the outgoing and incoming ID column on the messages table.
                      The query then searches for any occurrence of the senders' ID being either the outgoing or incoming ID in the messages table. 
                      If a match is found, the resulting table is ordered by the message ID, else a message is displayed telling the sender that they don't currently have a message thread with the receiving user.
                      After, conditional statements are used to determine if the senders' ID was incoming or outgoing on each row.  
                      The incoming messages are put in a div with the incoming class tag while outgoing messages are put in a div with the outgoing class tag. Messages in the outgoing div are green and are aligned to the left side of the chat box while incoming messages are blue and are aligned to the right using CSS.
                      <br><br/>
                      Once the user sends a message, a div with receiving users’ profile picture, name,
                      and username is created in the active chat box. Next time they want to chat with that person, the user can click the profile box and the chat thread is loaded.                      
                      <p/>`,
        
      },
      {
        "name" : "Dashboard",
        "path" : goplayDash,
        "details" : `<h1 class='detailName'><u>Dashboard</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      The dashboard page is where the user is sent when they successfully log in. The dashboard page features a navigation bar with a logout button and links to the messages page, search page, 
                      and account page. In the middle of the page are 4 divs with embedded links like the navbar.  
                    <p/>
                    `,
      },
      {
        "name" : "Search",
        "path" : goplaySearch,
        "details" : `<h1 class='detailName'><u>Search</u></h1>
                      <p class='detailText' style='margin-top:1rem'>
                      The search page is where users can find other people on the site. The page includes the navigation bar seen on the dashboard page and below it, is the search bar. 
                      The search bar works by taking the text in the input field as a query and searching the database for any occurrences of it.
                      The search results are rendered into the browser by using AJAX to send a request off to the PHP file that contains the query to the SQL database.
                      The result of the query is a user's profile picture, name, and username, a short description or Bio, and a map showing their last general location. 
                      <br><br/>
                      The locations shown on the map are not the exact locations stored in the database, instead, a random value is added to the longitude and latitude 
                      values on every page load to help obfuscate the users locations, while still keeping the marker in their general location. For users who opted out of 
                      sharing their location, the city and state they entered upon registration are shown instead. Users can click anywhere on the resulting profile div 
                      and they are redirected to the message page with the username of the selected profile set in the “to:” input field.
                      <p/>
                    `,
      },
      {
        "name" : "Account",
        "path" : goplayAcc,
        "details" : `<h1 class='detailName'><u>Account</u></h1>
                      <p class='detailText' style='margin-top:1rem'>
                      After making an account users can update their profile data on the account page. Users can update their profile picture, password, email, and location. 
                      The description and email fields already have the default values set by the user when they initially register. This way if they click the update button without making any changes, none of their data is altered. 
                      <br><br/>
                      The location is updated similarly to how it is first taken. There are 2 hidden fields for the longitude and latitude like the registration form. The longitude and latitude values are set when the user clicks the 
                      checkbox, they can then click the yellow arrow to update their location. After every successful update, the user is given a success message. If there are any errors in the form the user is also notified. 
                      <p/>
                    `,
      },
      {
        "name" : "Overview",
        "path" : goPlayHome,
        "details" : `<h1 class='detailName'><u>Overview</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      With this being my first full stack application I wanted to create 
                      something that I could find myself actually using. I train in combat sports, 
                      primarily wrestling and kickboxing. Outside of a mixed martial arts gym, 
                      it is hard to find people with the same level of skill and experience to spar with. 
                      Without an already established social circle, some people can find it difficult to find 
                      a partner or a teammate when it comes to things like running, lifting, or in my case, sparing.
                      <br><br/>
                      With GOPLAY users can create unique profiles that reflect their sport(s) of interest, These profiles 
                      then be seen by other athletes with similar interests to make finding new team-mates and friends easier.
                    <p/>`
      },
      {
        "name" : "Tools",
        "path" : goPlayHome,
        "details" : `<h1 class='detailName'><u>Tools</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      The front end of the website was created using HTML and the Bootstrap CSS framework
                       while the back end was run primarily through PHP, SQL, JavaScript, and Ajax.
                       Other tools include the HTML5 geolocation API to aquire the users location, and 
                      XAMMP to run my application on localhost while providing me with a graphical interface to 
                      manage my database through PHPmyAdmin.
                      <br><br/>
                      The database in this implementation stores information in two table. The users are stored in the “users” table 
                      which is made up of 10 columns that hold the user id, first name, last name, username, description, image, email, 
                      password, longitude, and latitude. The second table is the messages table which is made up of 4 columns that hold 
                      the message id, the incoming message id which represents the receiving users' id, the outgoing message id or the sender 
                      user id, and the message itself.  

                    <p/>`
      },
      {
        "name" : "Roadblocks",
        "path" : goPlayHome,
        "details" : `<h1 class='detailName'><u>Roadblocks</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      The bulk of my frustration during development came from learning how to switch back and forth from
                      writing PHP and SQL to JavaScript and HTML. One particalar Issue is faced was being unable to call a JavaScript function to 
                      calculate the distance between 2 users within the response object that is rendered after making a search. This way, the general location section on the
                      resulting users would show their distance from the logged in user, instead of a map with a marker on it. 
                      <br><br/>
                      After trying and failing multiple times in finally decided on rendering a map in the general location section and adding a small random value to the 
                      longitude and latitude values to help conceal the users locations.

                    <p/>`
      },
      {
        "name" : "Further development",
        "path" : goPlayHome,
        "details" : `<h1 class='detailName'><u>Further development</u></h1>
                    <p class='detailText' style='margin-top:1rem'>
                      Due to a lack of time and only honeslty only having a basic understanding of the tools and technologies i was using, I was unable to 
                      add some of the features i initially wanted in the original application these Features included group chats, Teams, a friend system, and a map page showing the closest parks and recreational centers in the area.
                      <br><br/>
                      I plan on remaking GOPLAY in React as a single page application(SPA). This new version will feature a redesigned landing page,
                      A more comprehensive registration form with fields for experience, and checkboxes for each sport. Collecting this data will help in managing 
                      which users are generated by the search by being able to add more filters to the search options. The messaging system is also getting 
                      redesigned with additional features like read reciepts and time stamps for each message.
                      <br><br/>
                      Overall This was great learning experience and i'm excited to see how far i can take this idea.
                    <p/>`
      },
    
    ];

  

  
  // Function to change the image source
  function changeImageSource(pageName) {
    const imageElement = document.querySelector(".pageImg");
    const details = document.querySelector(".goPlaydetails");
    const page = goplayPages.find(obj => obj.name === pageName);
    
    if (page) {
      imageElement.src = page.path;
      details.innerHTML = page.details;
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
        <div className="modal">
            <button className='close-btn' onClick={() => handleClose()}>
              <Close sx={{fontSize:"1.5em"}}/>
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
                  <img className='pageImg' src={goPlayHome}/>
                </div>  
             </div>  
            </div>
            
            <div class="modalDetails" >
              
              <div className='pageButtons'>
                <button className='pageButton' onClick={() => changeImageSource("Overview")}>Overview</button>
                <button className='pageButton' onClick={() => changeImageSource("Tools")}>Tools</button>
                <button className='pageButton' onClick={() => changeImageSource("Roadblocks")}>Roadblocks</button>
                <button className='pageButton' onClick={() => changeImageSource("Further development")}>Further development</button>
              </div>
              
              
              <div className='goPlaydetails'>
              <h1 className='detailName'><u>Overview</u></h1>
              <p style={{marginTop:"1rem"}}>
                With this being my first full stack application I wanted to create 
                something that I could find myself actually using. I train in combat sports, 
                primarily wrestling and kickboxing. Outside of a mixed martial arts gym, 
                it is hard to find people with the same level of skill and experience to spar with. 
                Without an already established social circle, some people can find it difficult to find 
                a partner or a teammate when it comes to things like running, lifting, or in my case, sparing.
                <br></br>
                <br></br>
                With GOPLAY users can create unique profiles that reflect their sport(s) of interest, These profiles 
                then be seen by other athletes with similar interests to make finding new team-mates and friends easier.
                
              </p>
 
              </div>
               
            </div>
          </div>

      </Dialog>

    </>
    
    
  )
}

export default ProjectModal;
