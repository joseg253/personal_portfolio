import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import ProgressBar from "@material-ui/core/LinearProgress";

class Skills extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item xs={2}>
          {this.props.skill}
        </Grid>
        <Grid item xs={10}>
          <ProgressBar
            style={{ margin: "auto", width: "100%", paddingBottom: ".5rem" }}
            value={this.props.value}
            variant="determinate"
          />
        </Grid>
      </Grid>
    );
  }
}
export default Skills;
