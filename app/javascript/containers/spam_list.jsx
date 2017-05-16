import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSpam, getCategories, getSpamByCategory } from '../actions/index';
import Spam from '../components/spam';
import Category from '../components/category';

class SpamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spam: [], categories: [] };
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  componentDidMount() {
    // this.props.getSpam().payload.then((result) => { this.setState({ spam: result.data }) });
    this.props.getCategories().payload.then((result) => { this.setState({ categories: result.data }) });
  }

  onCategoryClick(category) {
    this.props.getSpamByCategory(category).payload.then((result) => { this.setState({ spam: result.data }) });
  }

  render() {
    return (
      <div className="spam-container">
        <ul className="categories">
          {this.state.categories.map((category, index) => {
            return (
              <Category key={index}
                name={category.name}
                onCategoryClick={this.onCategoryClick}
              />
            )
          })}
        </ul>

        {this.state.visible ? (
          <h2>BLAH</h2>
        ) : null}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     getSpam,
     getCategories,
     getSpamByCategory
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(SpamList);
