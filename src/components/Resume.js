import React from "react";
import NavBar from "./Navbar";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import avatar from "../images/headshot.jpg";
import Avatar from "@material-ui/core/Avatar";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: { paddingTop: "5px" },
  grid: {
    boxShadow: "0px 10px 33px 0px rgba(0, 0, 0, 0.75)",
    boxSizing: "border-box",
    width: "100%",
  },
  rightPaper: {
    background: "#27221F",
    color: "white",
    height: "100%",
    paddingRight: ".5rem",
    paddingLeft: ".5rem",
    paddingTop: ".5rem",
  },
  rightGrid: {},
  leftColumn: {
    height: "50%",
    paddingLeft: ".5rem",
    paddingRight: "5rem",
  },
  leftPaper: {
    background: "#e8e8e8",
    paddingRight: ".25rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const ColoredLine = ({ color, width }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
        width: width,
        textAlign: "left",
        margin: "0",
        border: "none",
        boxShadow: "0px 10px 33px 0px rgba(0, 0, 0, 0.75)",
      }}
    />
  );

  return (
    <>
      <NavBar />
      <Container fixed className={classes.container}>
        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="center"
          spacing={1}
        >
          <Grid item sm={12} md={3} className={classes.leftColumn}>
            <Paper className={classes.leftPaper}>
              <div
                style={{
                  textAlign: "right",
                  display: "block",
                  paddingLeft: ".5rem",
                  paddingTop: ".5rem",
                }}
              >
                <Avatar
                  alt="Jose Garcia"
                  src={avatar}
                  style={{
                    height: "175px",
                    width: "175px",
                  }}
                />
              </div>

              <div style={{ paddingLeft: ".5rem" }}>
                <h2 style={{ paddingTop: "2rem" }}>Jose Garcia</h2>
                <h4 style={{ color: "grey" }}>Programmer </h4>
                <ColoredLine color="#bf0606" width="50%" />
                <p>
                  I began my programming journey at Eastern Washington
                  University. I started off really enjoying math and the
                  challenges that came with solving problems. When I was
                  introduced to programming, it connected with the enjoyment I
                  recieve from challenging myself by thinking outside the box
                  and solving problems. Computer Science will continue to grow
                  and that's something keeps me motivated and excited to keep
                  learning.
                </p>
                <ColoredLine color="#bf0606" width="50%" />
                <h5>Address</h5>
                <p>811 Haskell Ct. DuPont, WA 98327</p>
                <h5>Phone</h5>
                <p>(253)777-5677</p>
                <h5>Email</h5>
                <p>joseg253@yahoo.com</p>
                <h5>Website</h5>
                <p>https://jgarcia-portfolio.web.app/</p>
                <ColoredLine color="#bf0606" width="50%" />
              </div>
            </Paper>
          </Grid>
          <Grid item sm={12} md={9} className={classes.rightGrid}>
            <Paper className={classes.rightPaper}>
              <h2>Education</h2>
              <Education
                year="June 2020"
                schoolName="Eastern Washington University, Cheney, WA"
                degreeInfo="Bachelor of Science in Computer Science GPA: 3.32/4.0"
              />
              <ColoredLine color="#bf0606" />
              <h2>Experience</h2>
              <Experience
                year="Summer 2014 and Summer 2015"
                jobName="Construction Laborer"
                companyName="Gary Merlino Construction, Seattle, WA"
                jobDescription="Laborer working with various trade disciplines on various construction job sites.
                Communication key in loud work environments to ensure safety.
                Team lead and coordinator for daily tasks.
            "
              />
              <Experience
                year="Summer 2017"
                jobName="Security"
                companyName="Crowd Mangement Services, Seattle, WA"
                jobDescription="Event security staff and crowd control at large events which included coordinating, monitoring and communicating with event guests.
                Security team coordination and communication."
              />
              <ColoredLine color="#bf0606" />

              <h2>Skills</h2>
              <Skills skill="Java" value={83} />
              <Skills skill="JavaScript" value={78} />
              <Skills skill="React" value={70} />
              <Skills skill="SQL" value={70} />
              <Skills skill="HTML/CSS" value={65} />
              <Skills skill="C#" value={60} />
              <Skills skill="Python" value={50} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Resume;
