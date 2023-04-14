// Write your code here

import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const darkModeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const backGroundHome = isDarkTheme ? 'dark-bg-home' : 'light-bg-home'

      const headingFontColor = isDarkTheme
        ? 'dark-heading-color'
        : 'light-heading-color'

      return (
        <div className={`home-main-container ${backGroundHome}`}>
          <Navbar />
          <div className="home-items-container">
            <img src={darkModeImage} alt="home" className="home-image" />
            <h1 className={`home-heading ${headingFontColor} `}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
