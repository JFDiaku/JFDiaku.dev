import {
  useMediaQuery,
} from "@mui/material";


function Contact({mode}) {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section style={mode === 'dark' ? {backgroundColor:"#212121"} 
      : {backgroundColor:"#F6F6F6"}}  id="Contact" >
        <div className="container">
          <div  className={isnonMobileScreens ? 'contact' : 'mobContact'}>
            <div className="contactTop">
              <h1 style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}}><u><b>CONTACT</b></u></h1>

              <p><b>Dont be shy! Hit me up! 👇</b></p>
            </div>
            
            <div className="contactBottom">

              <div className="contactCard">
                <p style={{fontSize:"2em"}}>🗺️</p>
                <div className="contactDetails">
                  <p style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}}><b>Location</b></p>
                  <p style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}}>Austin, Texas</p>
                </div>
              </div>

              
              <div className="contactCard" >
                <p style={{fontSize:"2em"}}>📧</p>
                <div className="contactDetails">
                  <p style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}}><b>Mail</b></p>
                  <a  style={mode === 'dark' ? {color:"white"} 
                    : {color:"#353535"}}href="mailto:Jeff.fdiaku@gmail.com">Jeff.fdiaku@gmail.com</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact;