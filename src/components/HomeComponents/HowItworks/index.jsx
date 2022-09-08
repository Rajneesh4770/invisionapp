import React from "react";
import "./Howitworks.css";
import nft from "../../../Assets/HomeImages/icon.png";
import nft2 from "../../../Assets/HomeImages/icon2.png";
const Howitworks = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="heading">How it work</h1>

          <div className="row">
            <div className="col-lg-6">
              <div className="leftdiv">
                <div className="contentdiv">
                  <img src={nft} alt=""></img>
                  <div className="contents">
                    <p>Create Your NFTs</p>
                    <p>Create different NFTs with our NFT Generator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contentdiv">
                <img src={nft2} alt=""></img>
                <div className="contents">
                  <p>Publish NFT for Miniting</p>
                  <p>If you are a creator/designer.you can add your NFTs to the display </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
