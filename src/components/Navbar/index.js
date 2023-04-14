// Write your code here

import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBgColor = isDarkTheme ? 'nav-dark-bg' : 'nav-light-bg'

      const listItemsColor = isDarkTheme
        ? 'list-items-color-dark-nav'
        : 'list-items-color-light-nav'

      return (
        <nav className={`navbar-bg-main-container ${navBgColor}`}>
          <div className="navbar-items-container">
            <img
              src={websiteLogo}
              alt="website logo"
              className="navbar-website-logo"
            />
            <ul className="list-items-container">
              <Link to="/" className="link-item-navbar-home">
                <li className={`home-navbar-text ${listItemsColor}`}>Home</li>
              </Link>
              <Link to="/about" className="link-item-navbar-about">
                <li className={`about-navbar-text ${listItemsColor}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="theme-image-button-navbar"
              onClick={changeTheTheme}
            >
              <img
                src={themeImage}
                alt="theme"
                className="theme-image-navbar"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
