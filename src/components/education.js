import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  rightColumn: {
    padding: "2rem",
    background: "#27221F",
    color: "white",
  },
  leftColumn: {
    background: "white",
  },
}));

class Education extends Component {
  render() {
    return (
      <Grid container direction="row">
        <Grid item xs={4}>
          <p>{this.props.year}</p>
        </Grid>

        <Grid item xs={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.degreeInfo}</h4>
          <h4 style={{ marginTop: "0px", fontStyle: "italic" }}>
            {this.props.schoolName}
          </h4>
        </Grid>
      </Grid>
    );
  }
}

export default Education;
