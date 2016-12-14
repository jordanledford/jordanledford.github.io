const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const $ = require('jquery')
const masonry = require('masonry-layout')

class HomeView extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="react-container">
        <div className="hero">
          <h1>Jordan Ledford</h1>
          <h2>Front End Developer</h2>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className="project-wrapper grid">
          <h1>projects</h1>
          <h2>a timeline and portfolio</h2>
          <br/>
          <br/>

          <div className="project">
            <h3>Example</h3>

            <img className="projects grid-item" src="https://unsplash.it/200/300/?random"/>
          </div>
          <div className="project">
            <h3>Example</h3>

            <img className="projects grid-item" src="https://unsplash.it/500/500/?random"/>
          </div>
          <div className="project">
            <h3>Example</h3>

            <img className="projects grid-item" src="https://unsplash.it/200/400/?random"/>
          </div>
          <div className="project">
            <h3>Example</h3>

           <img className="projects grid-item" src="https://unsplash.it/400/300/?random"/>
          </div>
        </div>
      </div>
    )
  }
}

class Projects extends React.Component{
  constructor(props) {
    super(props)
  }

}

// $('.grid').masonry({
//   // options...
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

ReactDOM.render(<HomeView/>, document.getElementById('app-container'))
// new AppRouter()
