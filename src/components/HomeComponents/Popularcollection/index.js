import React from "react";
import "./popularcollection.css";
import image1 from "../../../Assets/HomeImages/placeholder.png";
import image2 from '../../../Assets/HomeImages/Mask Group.png';
const Popularcollection = () => {
  return (
    <>
      <section className="popular-section">
        <div className="container">
          <div className="popular-heading">
            <p>Popular Collections</p>
            <p>Explore More</p>
          </div>
          <div className="popular-heading2">
            <p>Here the popular Collections</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="image-div">
                <center>
                  {" "}
                  <img className="image-1" src={image1} alt=""></img>
                </center>
                <center>
                  <p>Cute Things</p>
                </center>
                <div className="d-flex createdby">
                  <span>Created By </span>
                  <span>Sera Cobalt</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-div">
                <center>
                  {" "}
                  <img className="image-2" src={image2} alt=""></img>
                </center>
                <center>
                  <p>Abstract Attractive</p>
                </center>
                <div className="d-flex createdby">
                  <span>Created By </span>
                  <span>Thomas cox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popularcollection;
