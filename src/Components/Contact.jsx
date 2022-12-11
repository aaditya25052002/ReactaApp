import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const change = (e) => {
    setName(e.target.value);
  };
  const formsubmit = (e) => {
    e.preventDefault();
    alert(`your issue with the email id ${name} has been updated with us`);
  };

  return (
    <div className="animate__animated animate__fadeInUpBig">
      <div className="my-5 text-center ">
        <h1>Reach to us in case of any issue</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formsubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        value={name}
                        onChange={change}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Isuue</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress2">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option selected>Konoha</option>
                        <option>Mist</option>
                        <option>Rain</option>
                        <option>Sound</option>
                        <option>Sand</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        you agree with all the terms and conditions of Akatsuki
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
