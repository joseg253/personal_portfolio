import React from "react";
import NavBar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Grid, Button, Box, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import "../Contact.css";
const useStyles = makeStyles((them) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
}));

const Contact = () => {
  const classes = useStyles();

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

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            hire or contact me
          </Typography>
          <form onSubmit={sendEmail}>
            <div>
              <input
                className="text_style"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <br />
            <div>
              <input
                className="text_style"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <br />

            <div>
              <input
                className="text_style"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <br />

            <div>
              <textarea
                className="text_style"
                col="40"
                rows="10"
                name="message"
                placeholder="Message"
              />
            </div>
            <br />
            <div className="button_container">
              <input className="button" type="submit" value="Send Message" />
            </div>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
