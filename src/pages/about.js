import React from 'react'
import Footer from '../components/Footer/footer'
import '../styles/styles.css'
import Link from 'gatsby-link'

//      #1a8
const linkStyle = {
  color: '#1a8',
  textDecoration: 'none',
}

const AboutPage = () => (
  <div className="pageStyle">
    <h1>ABOUT</h1>
    <br />
    <h3>
      Hi, I'm Nitin Bisht.<br />
      <br />
      <p>
        I'm an enthusiastic self taught Web developer. I love creating beautiful
        Web Applications. Comfortable in developing Web apps with HTML/CSS,
        ReactJS, JavaScript (ES 6), and Node + Express. I started web
        development in 2017 and since then I've been developing mini projects
        where I Implement almost everything whatever I learned. And yes I know
        how to teach myself stuff. I also do web design and development for
        projects that I find interesting, challenging or exciting.
      </p>
      <p>
        I love Adventure, specially trekking and exploring various places. Big
        fan of Fifa and Call of Duty. I'm inspired by a hot cup of Coffee,
        excellent EDM, TV seasons and{' '}
        <a
          href="https://twitter.com/stolinski"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          Scott Tolinski
        </a>.
      </p>
      Please
      <Link to="/contact/" style={linkStyle}>
        {' '}
        contact me{' '}
      </Link>
      if you would like to work on a project together, or just want to chat.
    </h3>

    <div className="resume-outside">
      <div className="resume-inside">
        <p id="small-heading">/* --Resume-- */</p>
        <br />
        <p className="comment-head">/* SUMMARY OF QUALIFICATIONS */ </p>
        <p>
          Received a Bachelors degree in the Computer Science and Engineering at
          DIT University, Dehradun, UK
        </p>
        <p>
          Excellent organization, self-motivation, and problem-solving skills.
        </p>
        <p>
          Creative, strong communication skills and consistently meets
          deadlines.
        </p>
        <p>Passionate about web development and new technologies.</p>

        {/*****Section Technical Skills*****/}
        <p className="comment-head">/* TECHNICAL SKILLS */</p>
        <p>
          <p className="min-heads"> Programming Languages: </p>JavaScript(ES 6),
          HTML/CSS, TypeScript, C and Java
        </p>
        <p>
          <p className="min-heads"> Frameworks & Libraries: </p>ReactJS,
          ExpressJS, jQuery, Bootstrap, Semantic UI
        </p>
        <p>
          <p className="min-heads">Database:</p> MongoDB
        </p>
        <p>
          <p className="min-heads">Version Control: </p> Git
        </p>
        <p>
          <p className="min-heads"> IDE & Photo Editing Tools: </p> VS Code,
          Photoshop
        </p>
        {/***** Section Ends *****/}

        <p className="comment-head">/* EXPERIENCE */</p>
        <p className="comment-head">
          //Training With Udemy.com{' '}
          <p style={{ fontSize: '0.7rem' }}>//JAN 2018 - PRESENT</p>{' '}
        </p>
        <p>Learning and Understanding of ReactJS Eco System.</p>
        <p>Understanding of ES 6 and Next Generation JavaScript Features.</p>
        <p>
          Utilized ReactJS to build components for various web applications.
        </p>
        <p>
          Worked with gatsbyJS A Blazing-fast static site generator for React,
          Powered by React and Webpack.
        </p>

        <p className="comment-head">
          //Training With FreeCodeCamp{' '}
          <p style={{ fontSize: '0.7rem' }}>//MAY 2017 - NOV 2017</p>{' '}
        </p>
        <p>Started From basics and acquired essential skills.</p>
        <p>
          Designed and Developed many Landing Pages with CSS Frameworks like
          Bootstrap.
        </p>
        <p>
          Utilized latest HTML5 and CSS3 technologies to build semantically
          correct and visually interesting responsive designs.
        </p>
        <p>
          Developed Todo App and Color game, Implemented Vanilla JS Event
          Listeners.
        </p>
        <p>Created interactive elements with custom JavaScript and Jquery.</p>
        <p>Learned about JavaScript Design Pattern and Modularity of Code.</p>
        <p>
          Build a fully functional Blog Posting Site, Worked on BackEnd with
          NodeJS, ExpressJS and MongoDB.
        </p>

        {/***** Section Ends *****/}
        <p className="comment-head">/* EDUCATION */ </p>
        <p>
          <p className="min-heads">DIT University, Dehradun - </p>
          B.Tech. Computer Science and Engneering 2017
        </p>

        {/* Inside Resume Ends*/}
      </div>
    </div>

    <Footer />
  </div>
)

export default AboutPage
