import React from "react";
import Navbar from "./Navbar";
import web from "../images/akatsuki.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center  not-found-container"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft">
                  {/* //Your dream websites and instant apps awaits ! */}
                  <h1 className="animate__animated animate__bounce">
                    Your dream<strong className="brandname">Website</strong> and
                    instant apps are waiting for you!!
                  </h1>
                  <h5 className="my-2 small-text">
                    Welcome to our fresh collection of themes. Hope you find
                    your dream website and instant apps here. Start your journey
                    with our themes.
                  </h5>
                  <div className="mt-3">
                    <NavLink
                      exact
                      to="/Services"
                      className=" btn btn-outline-danger makebtn  "
                    >
                      Collections
                    </NavLink>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img animate__animated animate__fadeInUp">
                  <img
                    src="http://optad360.com/wp-content/uploads/2022/07/wykop-main.png"
                    className="img-fluid-animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
