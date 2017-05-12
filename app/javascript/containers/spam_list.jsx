import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getSpam from '../actions/index';
import Spam from '../components/spam';

class SpamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spam: [] };
  }

  componentDidMount() {
    this.props.getSpam().payload.then((result) => { this.setState({ spam: result.data }) })
  }

  render() {
    return (
      <div class="spam-container">
        <h1>all the spams she said all the spams she said running through my head RUnNING THROUGH MY HEAD </h1>
        <div class="spams">
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
   return bindActionCreators({ getSpam }, dispatch );
}

export default connect(null, mapDispatchToProps)(SpamList);
