import React from "react";
import "./EncourageCitizen.css";
import Mask from '../../../Assets/HomeImages/Mask.png'
import Mask2 from '../../../Assets/HomeImages/Mask2.png'
const EncourageCitizen = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <div className="d-flex">
                <img className="image-1" src={Mask2}></img>
                <img className="image-02" src={Mask}></img>
                </div>

            </div>
            <div className="col-lg-6">
                <div className="right-div">
                    <p>Encourage citizen developers</p>
<p>No-code app development empowers non-technical people to assume the role of citizen developers. as business users. they have the best understanding of the problem. Hence they can come up with the best solution. the only barrier that remains between them and the solutin is technical skills.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EncourageCitizen;
