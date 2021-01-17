import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/headshot.jpg";
import Typed from "react-typed";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    alignItems: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginbottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    wdith: "100vw",
    testAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Jose Garcia" />
      </Grid>
      <Typography variant="h4">
        <Typed strings={["Jose Garcia"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5" style={{}}>
        <Typed
          strings={["CS Major", "EWU Alumni", "Web Design", "Full Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
