import React from 'react';

const SpamList = (props) => {
  return (
    <div className="spam--list">
      {props.spams.map((spam, index) => {
        return (
          <div key={index} className="spam--content">
            <span className="spam--top"></span>
            <h2 className="spam--title">{spam.title}</h2>
            <p className="spam--body">{spam.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SpamList;
