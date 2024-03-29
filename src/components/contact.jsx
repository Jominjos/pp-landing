// import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   phone:"",
//   message: "",
// };
const handleButtonClick = (number) => {
  const telLink = "tel:" + number;
  console.log(telLink);
  window.location.href = telLink;
};
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, message);
  //   console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
  //   // replace below with your own Service ID, Template ID and Public Key from your EmailJS account

  //   emailjs
  //     .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //        e.target,
  //       process.env.REACT_APP_EMAILJS_USER_ID)
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      <div id="contact">
        <div className="container">
          {/* <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch </h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate={"true"} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="phone number"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Request Callback
                </button>
              </form>
            </div>
          </div> */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <div>{props.data ? props.data.address1 : "loading"}</div>
              </p>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <div>{props.data ? props.data.address2 : "loading"}</div>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <div>
                  {props.data ? props.data.phone1 : "loading"}
                  {"     "}
                  <button
                    className="   page-scroll"
                    style={{
                      fontSize: "10px",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "1px solid #007bff",
                    }}
                    onClick={() => handleButtonClick(props.data.phone1)}
                  >
                    📞 CALL
                  </button>
                </div>
                <div>{""}</div>
                <span></span>
                <div>
                  {props.data ? props.data.phone2 : "loading"}
                  {"     "}
                  <button
                    className="   page-scroll"
                    style={{
                      fontSize: "10px",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "1px solid #007bff",
                    }}
                    onClick={() => handleButtonClick(props.data.phone2)}
                  >
                    📞 CALL
                  </button>
                </div>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i>For Franchise
                </span>{" "}
                <div>
                  {props.data ? props.data.phone3 : "loading"}
                  {"  "}
                  <button
                    className="   page-scroll"
                    style={{
                      fontSize: "10px",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "1px solid #007bff",
                    }}
                    onClick={() => handleButtonClick(props.data.phone3)}
                  >
                    📞 CALL
                  </button>
                </div>
              </p>
            </div>

            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div> */}
          </div>
          <div className="col-md-12">
            {/* <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2023 all rights reserved popular properties.</p>
        </div>
      </div>
    </div>
  );
};
