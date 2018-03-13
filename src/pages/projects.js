import React from 'react'
import Link from 'gatsby-link'
import { Footer } from './index'
import '../styles/styles.css'

//     #e54
const headingStyle = {
  textTransform: 'uppercase',
  fontFamily: 'consolas',
  color: '#e54',
  letterSpacing: '2px',
}

const linkStyle = {
  color: '#e54',
  textDecoration: 'none',
}
const ProjectPage = () => (
  <div className="pageStyle">
    <h1>PROJECTS</h1>
    <br />
    <h3>
      <p>
        I've worked on many types of projects as Personal and side projects.
        Here are some projects I've developed/created.
      </p>
      <br />
      {/****** Projet 1 ******/}
      <a
        href="https://github.com/ntnbst/keymapper"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>KeyMapper</h1>
      </a>
      Designed and Developed a web app which Logs the dynamic generated
      keystrokes in the screen. Implementation of React state, props and event
      handlers.
      <p>Built With: React, CSS Loader</p>
      <br />
      {/****** Projet 2 ******/}
      <Link to="/" style={linkStyle}>
        {' '}
        <h1 style={headingStyle}>My PortFolio site</h1>
      </Link>
      Developed this Fast Portfolio site. Inspired by{' '}
      <a href="https://twitter.com/stolinski" target="_blank" style={linkStyle}>
        Scott Tolinski
      </a>.
      <p>Built With: React, Gatsby</p>
      <br />
      {/****** Projet 3 ******/}
      <a
        href="https://github.com/ntnbst/DevBlogg"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>DevBlogg</h1>
      </a>
      Designed and Developed a fully functional Blog posting site, Where user
      can Post, Edit and then, can delete the created Post.
      <p>Built With: Semantic UI, NodeJS, ExpressJS, MongoDB</p>
      <br />
      {/****** Project 4 ******/}
      <a
        href="https://image.ibb.co/nmAziS/gridbuz_pro.jpg"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>Responsive Website Template</h1>
      </a>
      Built a website template using CSS Grid and FlexBox, These are great tools
      to design almost any kind of Grid System also used CSS variables for clean
      CSS code. RIP Bootstrap which has really terrible class names.
      <br />
      <br />
      <br />
      <img
        src="https://image.ibb.co/hDqziS/gridbuz_full.jpg"
        alt="Picture of a website template"
      />
      <p>Built With: CSS Grid, CSS FlexBox, HTML5</p>
      <br />
      {/****** Project 5 ******/}
      <a
        href="https://github.com/ntnbst/patatap-clone"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>Patatap clone</h1>
      </a>
      Clone of the famous Patatap app, which lets you play some sounds on
      different Key-press. Clone and play with it.
      <p>Built With: PaperJS, HTML Canvas, CSS 3</p>
      <br />
      {/****** Project 6 ******/}
      <a
        href="https://github.com/ntnbst/switch-ToDo"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>Switch to-do</h1>
      </a>
      A Simple ToDo app which lets you add delete and remove Tasks.
      <p>Built With: HTML 5, CSS 3, Bootstrap 4</p>
      <br />
      {/****** Project 7 ******/}
      <a
        href="https://github.com/ntnbst/Color-Picker-Game"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>Color picker game</h1>
      </a>
      A simple game where a random color is displays on the top which has to be
      guessed by the player. Easy and Hard Difficulty Mode New Color option Can
      be added more difficulty modes
      <p>Built With: HTML 5, CSS 3, Bootstrap 4</p>
    </h3>
    <Footer />
  </div>
)

export default ProjectPage
