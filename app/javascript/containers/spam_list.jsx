import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSpam, getCategories } from '../actions/index';
import Spam from '../components/spam';
import Category from '../components/category';

class SpamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spam: [], categories: [] };
  }

  componentDidMount() {
    this.props.getSpam().payload.then((result) => { this.setState({ spam: result.data }) });
    this.props.getCategories().payload.then((result) => { this.setState({ categories: result.data }) });
  }

  render() {
    console.log(this.state.categories);
    return (
      <div className="spam-container">
        <ul className="categories">
          {this.state.categories.map((category, index) => {
            return (
              <Category key={index} name={category.name} />
            )
          })}
        </ul>
        <div className="spams">
          {this.state.spam.map((tinyspam, index) => {
            return (
              <Spam key={index} title={tinyspam.title} />
            )
          })}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getSpam, getCategories }, dispatch );
}

export default connect(null, mapDispatchToProps)(SpamList);
