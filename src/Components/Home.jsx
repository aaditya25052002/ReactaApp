import React from "react";
import Navbar from "./Navbar";
import web from '../images/akatsuki.png'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center  not-found-container">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Hire some of the erotic ninjas from <strong className="brandname">Akatsuki</strong></h1>
                    <h5 className="my-2">We provide the best rougue ninjas for each ranked missions</h5>
                    <div className="mt-3">
                        <NavLink exact to="/Services" className=" btn btn-outline-danger makebtn  ">Hire them!</NavLink>
                    </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid-animated" alt = "homeimg" />
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
