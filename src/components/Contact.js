import React, { useState } from "react";
import NavBar from "./Navbar";

import emailjs from "emailjs-com";

import "../contact.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const field = event.target.name;
    switch (field) {
      case "first_name":
        setFirstName(event.target.value);
        break;
      case "last_name":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
    }
  };
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validate = () => {
    if (!validateEmail(email)) {
      setEmailError("invalid email");
      return false;
    }
    if (!firstName) {
      setFirstNameError("name field required");
      return false;
    }
    if (!lastName) {
      setLastNameError("last name field required");
      return false;
    }

    return true;
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qy01fpd",
        "template_wgn3xqr",
        e.target,
        "user_KI0McpDm6XeDGBjQiqtXP"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      setFirstNameError("");
      setLastName("");
      setFirstName("");
      setLastNameError("");
      setEmailError("");
      setEmail("");
      setOpen(true);
      console.log("The submission was succesful");

      sendEmail(event);
    }

    return true;
  };

  return (
    <>
      <NavBar />

      <div className="contact_page">
        <h1>Contact Me</h1>
        <p className="sub_title">Any questions you can leave a message</p>
        <div id="contact_container">
          <div className="contact_info">
            <h4>Contact Information</h4>
            <p>Fill up the form and then click send</p>
            <div className="icon_text">
              <PhoneIcon className="fa" />
              <span>253-445-9999</span>
            </div>
            <div className="icon_text">
              <EmailIcon className="fa" />
              <span>admin@gmail.com</span>
            </div>

            <div className="icon_text">
              <RoomIcon className="fa" />
              <span>1880 W Perry Seattle,WA</span>
            </div>

            <div className="social_media">
              <a href="#" className="icon_circle">
                <FacebookIcon className="fa" />
              </a>
              <a href="#" className="icon_circle">
                <TwitterIcon className="fa" />
              </a>
              <a href="#" className="icon_circle">
                <InstagramIcon />
              </a>
              <a href="#" className="icon_circle">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <form onSubmit={handleSumbit}>
            <div className="col">
              <div className="form_group">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  value={firstName}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: "10",
                  }}
                >
                  {firstNameError}
                </div>
              </div>
              <div className="form_group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  value={lastName}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: "10",
                  }}
                >
                  {lastNameError}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form_group">
                <label>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: "10",
                  }}
                >
                  {emailError}
                </div>
              </div>
              <div className="form_group">
                <label>Subject</label>
                <input type="text" name="subject" />
              </div>
            </div>

            <div className="col2">
              <div className="form_group">
                <label>Message</label>
                <textarea name="message"></textarea>
              </div>
            </div>

            <div className="col2">
              <div className="form_group right">
                <button className="submit_button" type="submit">
                  Send Message
                </button>
                <div className="alert_container">
                  <Collapse in={open}>
                    <Alert
                      className="alert"
                      action={
                        <IconButton
                          className="icon_button"
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      Message was sent!
                    </Alert>
                  </Collapse>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div />
      </div>
    </>
  );
};

export default Contact;
