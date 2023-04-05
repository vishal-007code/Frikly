import React from "react";
import "./header.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Frikly from "../../assets/Group.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "../../assets/search.svg"

function Header() {
  return (
    <div className="container-fluid">
      <div className="row r1">
        <div
          className="col-3 ms-5"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "80px",
            alignItems: "center",
            marginLeft:"40px !Important"
          }}
        >
          <LocalShippingIcon style={{ marginRight: "5px" ,marginLeft:"52px"}} />
          Enter Pincode &nbsp; &nbsp; &nbsp;{" "}
          <span style={{ color: "#22333B" }}>Change Pincode</span>
        </div>

        <div className="col-2 ma"></div>

        <div
          className="col-2"
          style={{
            minWidth: "max-content",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            gap:"12px",
            marginRight:"0px"
          }}
        >
          <LocationOnIcon style={{ marginRight: "5px" }} />
          Order Tracking
        </div>
        {/* <img src={TopBanner}/> */}
      </div>
      <div className="row r2" style={{ color: "#8A8A8A",display:"flex",alignItems:"center",gap:"135px" }}>
        <div
          className="col-1 "
          style={{
            display: "flex",
            paddingLeft:"280px",
            alignItems: "center",
            marginLeft:"-54px"

          }}
        >
            <img src={Frikly} />
        </div>
        <div className="col-1 " style={{textAlign:'right'}}>Home</div>
        <div className="col-1 ">About</div>
        <div className="col-4   " style={{display:'flex', border:'1px solid #000000', borderRadius:'6px',marginLeft:"-79px"}}>
          <img src={SearchIcon} />
          <input
            className=""
            style={{margin:'12px', border:'0px'}}
            type="search"
            placeholder="Search for products"
            aria-label="Search"
          />
        </div>

        <div className="col-2 mt-2" style={{ display: "flex", gap: "38px" ,alignItems:"center"}}>
          <PersonOutlineOutlinedIcon fontSize="large" style={{}} />
          <FavoriteBorderIcon fontSize="large" style={{}} />
          <ShoppingCartOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="" style={{display:"flex",flexDirection: "row",justifyContent: "center",gap: "106px",color: "#ffffff",padding: "4px 0px",backgroundColor: "#22333B",paddingLeft:"144px",width:"100vw"}}>
        {/* <div className=""></div> */}
        <div className="" style={{ minWidth: "max-content" }}>
          New Arrivals
        </div>
        <div className="">Chairs</div>
        <div className="">Sofas</div>
        <div className="">Tables</div>
        <div className="">Beds</div>
        <div className="">Storage</div>
        <div className="">Decor</div>
        <div className="">Kitchen</div>
        <div className="">Garden</div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Header;
