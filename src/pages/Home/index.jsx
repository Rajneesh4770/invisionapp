import React from "react";
import "./Home.css";
import starimage from '../../Assets/HomeImages/star.png';
const Home = () => {
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <div>
                    <img className="starimage" src={starimage} alt=''></img>
                </div>
            <div className="content mt-5">
                <p > A New way to Create Your Artworks.</p>
            </div>
            <div className="content2">
                <p>
                    Find the most attractive and rarest NFTs to be your Collection
                </p>
                <button className="btn rounded btn-outline-primary explorebtn">Explore</button>

            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
