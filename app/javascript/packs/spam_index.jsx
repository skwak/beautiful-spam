import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SpamList from '../containers/spam_list'
import appReducer from '../reducers/index'

let store = createStore(appReducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <SpamList />
    </Provider>,
    document.getElementsByTagName('main')[0]
  )
})
