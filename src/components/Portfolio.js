import React from "react";

import { Grid } from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import NavBar from "./Navbar";

import facebook_pic from "../images/facebook.png";
import ecommerce from "../images/ecommerce.png";
import "../Portfolio.css";
import Project from "./Project";
import movie_search from "../images/movie_search.png";

const Portfolio = () => {
  return (
    <div>
      <NavBar />

      <Grid container container direction="row" className="grid__container">
        <Project
          project_image={project1}
          title="Personal Portfolio Website"
          description="Built my personal website with React, Javascript, HTML, and
         CSS. Material ui was used for some stlying and React router
         for handling page changes. Deployed the website with firebase."
          github_link="https://github.com/joseg253/personal_portfolio"
          demo_link="https://jgarcia-portfolio.web.app/"
        ></Project>

        <Project
          project_image={ecommerce}
          title="Ecommerce Site"
          description="Built ecommerce website with login page, homepage, checkout,
        and payment processing. Frontend was built with React, JS,
        CSS, and HTML. React Context API was uesed to handle data
        passed around in application. Backend used Stripe to handle
        payment processing, Express, Firebase's cloud functions, and
        Firebase to deploy."
          github_link="https://github.com/joseg253/Ecommerce"
          demo_link="https://e-commerce-56b0d.web.app"
        ></Project>

        <Project
          project_image={facebook_pic}
          title="Facebook Clone"
          description="Facebook clone website. Login in page with Google
        authentication. Live feed that pushes messages to firebase
        database and pulls from the databse to post. Built the
        frontend with React,Javascript,CSS,HTML. Handled data with
        React Context API. Backend is handled with firebase. Deployed
        the web application with firebase."
          github_link="https://github.com/joseg253/Facebook-clone"
          demo_link="https://fb-clone-d3966.web.app/"
        ></Project>

        <Project
          project_image={movie_search}
          title="Movie Search with Alan AI"
          description="Search for movies, tv shows, actors/actresses with Alan AI voice recognition. Alan Ai used on backend for
          doing voice commands on webpage and fetching data from movie db. React, Javascript, CSS, HTML, Material ui used for frontend"
          github_link="https://github.com/joseg253/Movie-Search-Alan-Ai"
          demo_link="https://alan-ai-movie-search.web.app/"
        ></Project>
      </Grid>
    </div>
  );
};

export default Portfolio;
