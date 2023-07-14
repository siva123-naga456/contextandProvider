// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-container">
              <h1>Left Navbar Menu</h1>
              <ul className="list">
                <li className="items">item 1</li>
                <li className="items">item 2</li>
                <li className="items">item 3</li>
                <li className="items">item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-header">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adislscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore madna allqua. ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-container">
              <div className="ad-box-container">
                <h1>Right Navbar</h1>
                <p className="add-box">Ad 1</p>
                <p className="add-box">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
