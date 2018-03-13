import React from 'react'
import Link from 'gatsby-link'
import '../styles/styles.css'

const videoStyle = {
  // position: 'fixed',
  // right: 0,
  // bottom: 0,
  // maxWidth: '100%',
  // minHeight: '100%',
  // zIndex: '-100',
  // objectFit: 'cover',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '100%',
  minHeight: '100%',
  width: '100%',
  height: '100%',
  zIndex: '-100',
  objectFit: 'cover',
}

const socialLinks = [
  { name: 'Twitter', src: 'https://twitter.com/ntnbst' },
  { name: 'Medium', src: 'https://medium.com/@ntnbst' },
  { name: 'Github', src: 'https://github.com/ntnbst' },
  { name: 'Codepen', src: 'https://codepen.io/ni7in/' },
]

const Footer = () => (
  <footer id="find-me">
    <h3>where to find me</h3>
    {socialLinks.map(link => {
      return (
        <a href={link.src} target="_blank">
          {link.name}
        </a>
      )
    })}
  </footer>
)

const IndexPage = () => (
  <div>
    <main id="main-desc">
      <h1 id="introStyle">I am Nitin Bisht</h1>
      <h3 id="small-heading">I make excellent, modern websites.</h3>
    </main>
    <video
      poster="https://image.ibb.co/eSzrf7/poster.png"
      preload="true"
      style={videoStyle}
      id="background-video"
      loop
      autoPlay
      muted
    >
      <source src="https://coverr.co/s3/mp4/Hello-World.mp4" type="video/mp4" />
      <source src="https://coverr.co/s3/mp4/Hello-World.ogg" type="video/ogg" />
    </video>
    <Footer />
  </div>
)

export default IndexPage
export { Footer }
