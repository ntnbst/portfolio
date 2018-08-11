import React from 'react'
import Link from 'gatsby-link'
import '../../styles/styles.css'

const socialLinks = [
  { name: 'Twitter', src: 'https://twitter.com/ntnbst' },
  { name: 'Medium', src: 'https://medium.com/@ntnbst' },
  { name: 'Github', src: 'https://github.com/ntnbst' },
  { name: 'Codepen', src: 'https://codepen.io/ni7in/' },
]

class Footer extends React.Component {
    render () {
      return (
        <footer id="find-me">
          <h3>where to find me ...</h3>
          {socialLinks.map((link, i) => {
            return (
                <a key={i} className="shakebottom" href={link.src} target="_blank"> {link.name} </a>
            )
          })}
        </footer>
      );
    }
}

export default Footer
