import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInicon from "@material-ui/icons/LinkedIn";
function Footer() {
  return (
    <div className="footer"> 
        <div className ="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInicon />
        </div>
        <p> &copy; 2023 EdwardZhang.com </p>
    </div>
  );
}
export default Footer