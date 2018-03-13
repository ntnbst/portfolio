import React from 'react'
import Link from 'gatsby-link'
import '../../styles/styles.css'

const logoStyle = {
  zIndex: '1',
  fontFamily: 'consolas, monospace',
  fontWeight: '900px',
  height: '52px',
  width: '52px',
  padding: '15px 10px 10px 10px',
  background: '#fc1',
  textDecoration: 'none',
  color: '#111',
  fontSize: '29px',
  position: 'fixed',
  left: 0,
  top: 0,
}

const backgroundChangeHandler = color => {
  logoStyle.background = color
}

const Header = props => (
  <div
    id="navigation"
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4
        id="navigation"
        style={{ margin: 0, right: '0px', position: 'fixed' }}
      >
        <Link
          to="/"
          style={logoStyle}
          className="logo"
          onClick={backgroundChangeHandler.bind(null, '#fc1')}
        >
          NB
        </Link>
        <span id="logo-name">nitin bisht</span>
        <div id="nextLine">
          <Link
            to="/about/"
            onClick={backgroundChangeHandler.bind(null, '#1a8')}
          >
            ABOUT
          </Link>
          <Link
            to="/projects/"
            onClick={backgroundChangeHandler.bind(null, '#e54')}
          >
            PROJECTS
          </Link>
          <Link
            to="/contact/"
            onClick={backgroundChangeHandler.bind(null, '#38c')}
          >
            CONTACT
          </Link>
        </div>
      </h4>
    </div>
  </div>
)

export default Header
export { logoStyle }
