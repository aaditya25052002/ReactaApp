import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top imgcls" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
            <NavLink to="#" className="btn btn-outline-danger hirebtn">
              Live Preview
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
