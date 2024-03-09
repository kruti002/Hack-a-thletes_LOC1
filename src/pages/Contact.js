import React from "react";
import "./Contact.css"; // Assuming you have a separate CSS file
import Button from "../components/3Dbutton";
import "animate.css";
const Contact = () => {
  function handleClick() {
    alert("Message sent!");
  }
  function handleCancelClick() {
    alert("Message Aborted!");
  }
  return (
    <div className="background">
      <div className="screen">
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span
                style={{
                  fontSize: "40px",
                  animation: "bounceInDown",
                  animationDuration: "1s",
                }}
              >
                CONTACT
              </span>
              <span
                style={{
                  fontSize: "40px",
                  animation: "bounceInDown",
                  animationDuration: "1.5s",
                }}
              >
                US
              </span>
            </div>
            {/* <div className="app-contact">CONTACT INFO : 9999999999</div> */}
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input className="app-form-control" placeholder="NAME" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="CONTACT NO" />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" placeholder="MESSAGE" />
              </div>
              <div
                className="app-form-group buttons"
                style={{ color: "rgb(62,62,62" }}
              >
                {/* <button className="app-form-button">SEND</button>
                <button className="app-form-button">CANCEL</button> */}
                <Button func={handleClick} message={"Send"} />
                {"___________"}
                <Button func={handleCancelClick} message={"Cancel"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
