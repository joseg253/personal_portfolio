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


const useStyles = makeStyles({
    mainContainer: {
      backgroud: "#233",
      height: "100%",
    },
    cardContainer: {
      maxWidth: 345,
      margin: "3rem",
      margin: "5rem atuo",
      paddingBottom: "10px",
    },
  });


function Project({project_image, title,description,github_link,demo_link}) {

  
      const classes = useStyles();


    return (
      
            <Grid item xs className="grid__item">
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
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
                  GitHub
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
       
    )
}

export default Project
