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
          <p>Don't worry, the general format and hard part is done, now I just have to style it.</p>
        </div>

        <div className="project-wrapper grid">
          <h1>projects</h1>
          <h2>a timeline and portfolio</h2>
          <br/>
          <br/>

          <div className="project">
            <h3>Who's Playin</h3>
            <p>Who's Playin is by far the largest collaborative project I have worked on to date. We created a webapp to dynamically find upcoming local artists based on a user's geolocation. It utilizes Spring MVC to it's fullest extent, required complex AJAX promises from 4 APIs, and we wanted it to be pretty. Not a small job for 2 weeks.</p>
            <img className="projects grid-item" src="https://unsplash.it/300/300/?random"/>
            <a href="https://github.com/WhosPlayin/WhosPlayin"><i class="fa fa-github" aria-hidden="true"></i></a>
          </div>
          <div className="project">
            <h3>WTF is my Fallout Character</h3>
            <p>This was my first webapp with backend collaboration. We asked the question "What do I do when I want to play Fallout, but don't know what type of character I want to be?" This webapp was the answer.</p>
            <img className="projects grid-item" src="https://unsplash.it/300/300/?random"/>
            <a href="https://github.com/mikeplott/WhoTheFuckIsMyFalloutCharacter"><i class="fa fa-github" aria-hidden="true"></i></a>
          </div>
          <div className="project">
            <h3>Talk to the Void</h3>
            <p>using websockets (socket.io technology), I created a chat app where messages are sent to all users and then quickly disappear</p>
            <img className="projects grid-item" src="https://unsplash.it/300/300/?random"/>
            <a href="https://github.com/jordanledford/talk-to-the-void"><i class="fa fa-github" aria-hidden="true"></i></a>
          </div>
          <div className="project">
           <h3>Is Half Life 3 Out Yet?</h3>
           <p>a long running joke in the videogame industry, I decided to create a webapp to respond with a list of negative responses to the question <b>"Is Half Life 3 out yet?"</b></p>
           <img className="projects grid-item" src="https://unsplash.it/300/300/?random"/>
           <a href="https://github.com/jordanledford/hl3"><i class="fa fa-github" aria-hidden="true"></i></a>
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
