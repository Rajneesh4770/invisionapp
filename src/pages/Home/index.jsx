import React from "react";
import "./Home.css";
import monkeyimage from "../../Assets/HomeImages/monkey.png";
import ExploreIcon from "@mui/icons-material/Explore";
import Howitwork from "../../components/HomeComponents/HowItworks";
import firstsectionimage from '../../Assets/HomeImages/Group4.png'
import Popularcollection from "../../components/HomeComponents/Popularcollection";
const Home = () => {
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
              <div className="content mt-5">
                <p> A New way to Create Your Artworks.</p>
              </div>
              <div className="content2">
                <p>
                  Find the most attractive and rarest NFTs to be your Collection
                </p>
                <button className="btn rounded btn-outline-primary explorebtn">
                  <ExploreIcon /> Explore
                </button>
              </div>
            </div>
            <div className="col-lg-6">
                <div>
                    <img className="firstsectionimage" src={firstsectionimage} alt=''></img>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5">
              <div className="monkeyimagediv">
                <img className="monkeyimage" src={monkeyimage} alt=""></img>
                <img className="image2" alt=""></img>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="monkeycontent">
                <h2 className="h2">The most flexible no-code NFT Generator</h2>
                <p>
                  Forget about the unbearably long waiting times and the
                  unaffordable quotes you received for softwar development. try
                  Appy Pie for easy quick. and affordable no-code solutions.
                </p>
                <p>
                  Super east to use. Our no-code development platform's drag and
                  drop functionality lets you unify and simplify all your data
                  into a single source. Appy Pie breaks all barriers and
                  boundaries when it comes to no-code development. offering you
                  seamless integrations with other data sources. even
                  applications.{" "}
                </p>
                <button className="btn btn-outline-secondary rounded ">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <Howitwork/>
      </section>
      <section className="section4">
        <Popularcollection/>
      </section>
    </>
  );
};

export default Home;
