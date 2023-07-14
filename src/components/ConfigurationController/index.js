// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="main-container">
          <div className="responsive-control-container">
            <h1 className="layout-name">Layout</h1>
            <div className="checkbox-container">
              <div className="checkboxes">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label htmlFor="content" className="labels">
                  Content
                </label>
              </div>
              <div className="checkboxes">
                <input
                  type="checkbox"
                  id="left1"
                  checked={showLeftNavbar}
                  onChange={onChangeLeft}
                />
                <label htmlFor="left1" className="labels">
                  Left Navbar
                </label>
              </div>
              <div className="checkboxes">
                <input
                  type="checkbox"
                  id="right1"
                  checked={showRightNavbar}
                  onChange={onChangeRight}
                />
                <label htmlFor="right1" className="labels">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
