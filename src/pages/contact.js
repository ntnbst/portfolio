import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer/footer'
import '../styles/styles.css'

// #38c
const ContactPage = () => (
  <div className="pageStyle">
    <h1>CONTACT</h1>
    <br />
    <h3>
      Feel free to contact me through the email below, I'd love to chat.<br />
      <a
        href="mailto:nitin.bisht47@gmail.com"
        style={{ textDecoration: 'none', color: '#38c' }}
      >
        nitin.bisht47@gmail.com
      </a>
    </h3>
    <Footer />
  </div>
)

export default ContactPage
