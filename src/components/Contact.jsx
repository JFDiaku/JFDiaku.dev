import {
  useMediaQuery,
} from "@mui/material";


function Contact() {
  const isnonMobileScreens = useMediaQuery("(min-width: 1100px)");
  return (
    <>
      <section  id="Contact" style={{backgroundColor:"#1e1e1e"}}>
        <div className="container">
          <div className={isnonMobileScreens ? 'contact' : 'mobContact'}>
            <div className="contactTop">
              <h1><u>CONTACT</u></h1>

              <p>Dont be shy! Hit me up! 👇</p>
            </div>
            
            <div className="contactBottom">

              <div className="contactCard">
                <p style={{fontSize:"2em"}}>🗺️</p>
                <div className="contactDetails">
                  <p><b>Location</b></p>
                  <p>Austin, Texas</p>
                </div>
              </div>

              
              <div className="contactCard">
                <p style={{fontSize:"2em"}}>📧</p>
                <div className="contactDetails">
                  <p><b>Mail</b></p>
                  <a href="mailto:Jeff.fdiaku@gmail.com">Jeff.fdiaku@gmail.com</a>
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