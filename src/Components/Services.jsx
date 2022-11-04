import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Data from "./Data";


const Services = () => {
  return (
    <>
      <div className="my-5 text-center">
        <h1>Hire the Bests..</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

                 {
                    Data.map((val,ind) => {
                        return (<Card
                        imgsrc = {val.img}
                        title = {val.title}
                        />);
                    })
                 }
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Services;
