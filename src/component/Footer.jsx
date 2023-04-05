import React from "react";
import Vector from "../assets/Vector.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FriklyPartner from '../assets/frikly-partner.svg'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

function Footer() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "440px",
        backgroundColor: "#22333B",
        paddingTop: "86px",
      }}
    >
      <div className="row">
        <div className="col-5">
          <div className="row footer-margin">
            <img src={FriklyPartner} style={{width:"262px",height:"35.17px",marginLeft:"214px"}}/>
          </div>
          <div
            className="row offset-3"
            style={{ color: "#EAE0D5", fontSize: "14px", width: "410px" }}
          >
            Frikly brings you closer to all of your top picks with a single tap.
            Now, enjoy the exceptional by making it easier to enhance the
            aesthetics of your indoor or outdoor settings by adding a modern,
            trendy, and one-of-a-kind collection.
          </div>
          <div className="row offset-3 mt-4">
            <div className="col-1">
              <FacebookOutlinedIcon
                fontSize="large"
                style={{ color: "#EAE0D5" }}
              />
            </div>
            <div className="col-1">
              <InstagramIcon fontSize="large" style={{ color: "#EAE0D5" }} />
            </div>
            <div className="col-1">
              <TwitterIcon fontSize="large" style={{ color: "#EAE0D5" }} />
            </div>
            <div className="col-1">
              <PinterestIcon fontSize="large" style={{ color: "#EAE0D5" }} />
            </div>
          </div>
        </div>
        {/* <div className='col-4 offset-2 footer-margin'>
          <span style={{fontSize:"24px",color:"white"}}>Get in touch with us!</span>
          <div className='row mt-2'>
            <span style={{color:"#EAE0D5"}}><EmailOutlinedIcon/> info@fikly.com</span>
            <span style={{color:"#EAE0D5"}}><LocalPhoneOutlinedIcon/>+91-8390288647 </span>
          </div>
        </div> */}
      </div>
      <div
        className="row offset-3 footer-margin"
        style={{ color: "#EAE0D5", fontSize: "14px", paddingTop: "106px" }}
      >
        © Copywright 2022 by Malu Technologies Pvt Ltd, 207, Jailaxmi Appts,
        Near Telephone Exchange Square, Nagpur, 440008
      </div>
    </div>
  );
}

export default Footer;
