import React from "react";
import SofaImg from "../assets/Sofa -img.svg";
import GodrejLogo from "../assets/Godrej-logo.svg";
import ProductCard from "../component/ProductCard";
import FindPorduct from "../assets/Find-Product.png";
import DLM from "../assets/DLM.png";
import CantFind from "../assets/CantFind.png";

const Brand = () => {
  return (
    <>
      <div className="container-fluid" style={{ width: "100vw" }}>
        <div className="container-fluid">
          <div
            className="row"
            style={{ border: "none", padding: "48px 100px 48px 76px" }}
          >
            <img
              className="object-fit-fill"
              src={SofaImg}
              style={{ width: "90%", marginLeft: "127px" }}
            />
            <div className="row" style={{ gap: "8px" }}>
              <div className="col-1 ">
                <img
                  src={GodrejLogo}
                  style={{
                    height: "122px",
                    width: "122px",
                    marginLeft: "192px",
                    marginTop: "-36px",
                  }}
                />
              </div>
              <div
                className="col-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                  marginTop: "10px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Times New Roman",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    fontSize: "36px",
                    lineHeight: "100%",
                    marginLeft: "152px",
                  }}
                >
                  {" "}
                  Godrej
                </h2>
                <h5
                  style={{
                    fontFamily: "Inter",
                    fontStyle: " normal",
                    fontWeight: "300",
                    fontSize: "18px",
                    lineHeight: "100%",
                    marginLeft: "152px",
                  }}
                >
                  152 Items to Choose From
                </h5>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "300px" }}>
              <h5>Choose Category</h5>
            </div>
            <div className="col">
              <select
                name=""
                id=""
                style={{
                  width: "300px",
                  height: "42px",
                  borderRadius: "3px",
                  borderColor: "#c0c0c0",
                }}
              >
                <optgroup>
                  <option value=""></option>
                  <option value=""></option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="row" style={{paddingLeft:"330px"}}>
            <div className="col">
              <div className="row" >
                <div className="col-2"  style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>

                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
              </div>
              <div className="row">
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
                <div className="col-2" style={{marginRight:"5.5rem"}}>
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img
                src={FindPorduct}
                style={{
                  width: "100%",
                  paddingTop: "105px",
                  paddingBottom: "80px",
                }}
              />
            </div>
          </div>
          <div className="row ms-3">
            <div className="col offset-1 ">
              <img src={DLM} />
              <img src={CantFind} className="ms-4" />
            </div>
          </div>
          <div className="row ms-3">
            {/* <div className="col-2"></div> */}
            <div className="col offset-1 ">
              <p style={{ fontSize: "28px", fontWeight: "600" }}>
                Delta Laminates
                <br />
                Magzine 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
