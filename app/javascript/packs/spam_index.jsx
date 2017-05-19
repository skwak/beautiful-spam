import React from 'react'
import ReactDOM from 'react-dom'

import SpamsContainer from '../components/spams_container'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SpamsContainer />,
    document.getElementsByTagName('main')[0]
  )
})
