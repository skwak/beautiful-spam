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
    return (
      <div className="spam-container">
        <ul className="categories">
          {this.state.categories.map((category, index) => {
            return (
              <Category key={index}
                name={category.name}
                onClick={() =>  {
                  store.dispatch({
                    type: 'GET_SPAM_BY_CATEGORY',
                    name: category.name
                  })
                }}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
//

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     getSpam,
     getCategories,
     onCategoryClick: (categoryName) => {
       dispatch(getSpamByCategory(categoryName))
     }
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(SpamList);
