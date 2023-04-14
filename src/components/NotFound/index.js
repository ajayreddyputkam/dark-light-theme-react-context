// Write your code here

import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backGroundColor = isDarkTheme ? 'dark-bg' : 'light-bg'
      const fontColorHeading = isDarkTheme
        ? 'not-found-heading-dark'
        : 'not-found-heading-light'
      const fontColorText = isDarkTheme
        ? 'not-found-description-dark'
        : 'not-found-description-light'

      return (
        <div className={`not-found-main-bg-container ${backGroundColor} `}>
          <Navbar />
          <div className="not-found-main-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${fontColorHeading} `}>
              Lost Your Way?
            </h1>
            <p className={`not-found-description ${fontColorText} `}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
