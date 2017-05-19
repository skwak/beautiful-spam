import React from 'react';
import axios from 'axios';

import Category from './category';
import SpamList from './spam_list';

class SpamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spams: [], categories: [], spamVisibility: false }

    this.categoryClick = this.categoryClick.bind(this);
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
        // console.log(result.data)
        this.setState({ spams: result.data });
        if (result.data) {
          this.setState({ spamVisibility: true });
        }
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="spams--container">
        <ul className="categories">
            {this.state.categories.map((category, index) => {
              return (
                <Category key={index} categoryName={category.name} categoryClick={this.categoryClick} />
              )
            })}
        </ul>

        {this.state.spamVisibility ? (
          <SpamList spams={this.state.spams} />
        ) : (
          <h2>WHA</h2>
        )}

      </div>
    )
  }
}


export default SpamsContainer;
