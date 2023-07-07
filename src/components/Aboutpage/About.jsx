import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className="col-md-6">
            <div className="profile-head">
              <br />
              <h2> OUR WEB DEVELOPERS</h2>
              <br />
              <br />
              <hr />
              <h5>Geetanjali Chauhan (1900820100047)</h5>
              <hr />
              <p>B tech, CSE</p>
              <hr />
              <p>moradabad institute of technology</p>

              <p className="profile-rating mt-3 mb-5">
                RANKINGS <span>8/10</span>
              </p>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
