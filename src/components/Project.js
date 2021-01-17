import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  mainContainer: {
    backgroud: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 350,

    boxSizing: "border-box",
    margin: "3rem",
    margin: "5rem atuo",
    paddingBottom: "10px",
    boxShadow: "0px 10px 33px 0px rgba(0, 0, 0, 0.75)",
  },
  gridItem: {
    paddingBottom: "40px",
    paddingTop: "10px",
  },
});

function Project({
  project_image,
  title,
  description,
  github_link,
  demo_link,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} className={classes.gridItem}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project1"
            height="150"
            image={project_image}
          />
          <CardContent>
            <Typography gutterbutton variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={github_link}
              target="_blank"
            >
              <GitHub />
            </Button>
            <Button
              size="small"
              color="primary"
              href={demo_link}
              target="_blank"
            >
              Live Demo
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Project;
