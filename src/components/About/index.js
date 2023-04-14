// Write your code here

import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutBgColor = isDarkTheme ? 'dark-bg-about' : 'light-bg-about'

      const headingColorAbout = isDarkTheme
        ? 'dark-heading-color-about'
        : 'light-heading-color-about'

      return (
        <div className={`about-main-container ${aboutBgColor} `}>
          <Navbar />
          <div className="about-items-container">
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={`about-heading ${headingColorAbout}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
