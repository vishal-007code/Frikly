import React from "react";
import Card from "../assets/card.png";
import Truck from "../assets/truck.svg";
import GetFree from "../assets/Get-FREE.svg";
import Plus from "../assets/Plus.svg";

function ProductCard() {
  return (
    <div
      className="card mt-5 ml-0 shadow p-3  bg-white rounded"
      style={{ width: "22rem", marginLeft: "0px !important" }}
    >
      <img src={Card} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <b>Ainsley Rolled Arm Sofa 74.01” by Steelside</b>
        </h5>
        <span style={{ color: "#868686", fontSize: "14.6px" }}>
          MRP : <strike>₹17,999</strike>{" "}
          <span className="text-white bg-dark ps-1 pe-1"> 11% off </span>
        </span>{" "}
        <br />
        <span style={{ color: "#C6AC8F", fontSize: "30px" }}>₹15,999</span>
        <span style={{ fontSize: "14.4px" }}>/ piece</span>
        <br />
        <img src={Truck} />
        <span style={{ marginLeft: "6px" }}>
          <img src={GetFree} />
        </span>
        <br />
        <hr />
        <br />
        <div className="" style={{display:"flex",justifyContent:"center",gap:"10px"}}>
          <img src={Plus} style={{paddingBottom:"8px"}} />
          <span>
            <h3>Compare</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
