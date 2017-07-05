import React from 'react';
import axios from 'axios';

import Category from './category';
import SpamList from './spam_list';
import About from './about';

class SpamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spams: [], categories: [], spamVisibility: false, aboutVisibility: false, sendVisibility: false }

    this.categoryClick = this.categoryClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.onMinimizeClick = this.onMinimizeClick.bind(this);
    this.onAboutMinimizeClick = this.onAboutMinimizeClick.bind(this);
    this.toggleSend = this.toggleSend.bind(this);
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then((result) => {
        this.setState({ categories: result.data });
      });
  }

  categoryClick(categoryName) {
    axios.get(`/api/spam?category=${categoryName}`)
      .then((result) => {
        this.setState({ spams: result.data });
        if (result.data) {
          this.setState({ spamVisibility: true });
        }
      });
  }

  aboutClick() {
    this.setState({ aboutVisibility: true });
  }

  onAboutMinimizeClick() {
    this.setState({ aboutVisibility: false });
  }

  onMinimizeClick() {
    this.setState({ spamVisibility: false });
  }

  toggleSend() {
    if (this.state.sendVisibility) {
      this.setState({ sendVisibility: false})
    } else {
      this.setState({ sendVisibility: true });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="categories-spam-intro">
          <div className="header">
            <h1 className="header--title">beautiful spam</h1>
          </div>
          <ul className="categories">
              {this.state.categories.map((category, index) => {
                return (
                  <Category key={index} categoryName={category.name} categoryClick={this.categoryClick} />
                )
              })}
            </ul>

            <div className="site--intro">
              <p className="site--intro-first">
                I want to tell you something, but I want to wear a mask.
                Commodity made me this way, and I'm sorry.
                I'm jumbled up inside, and I want to express myself without known
                rules to constrain me.
              </p>
              <p className="site--intro-second">
                No gross people here.
                If you're gross, you're somewhere else.
                I don't even have to do that labor.
                You've already left!
              </p>
              <p className="site--intro-third">
                This is a Utopia.
                Your neurons join with my neurons if you are certified
                acceptable by the Center of Acceptability.
              </p>
            </div>

            {this.state.spamVisibility ? (
              <SpamList spams={this.state.spams} onMinimizeClick={this.onMinimizeClick} toggleSend={this.toggleSend} sendVisibility={this.state.sendVisibility} />
            ) : (
              <p></p>
            )}
          </div>

          <footer className="site--footer">
            <span className="site--footer-link" onClick={() => this.aboutClick()}>About</span>

            {this.state.aboutVisibility ? (
              <About onAboutMinimizeClick={this.onAboutMinimizeClick} />
            ) : (
              <p></p>
            )}
          </footer>
        </div>
    )
  }
}

export default SpamsContainer;
