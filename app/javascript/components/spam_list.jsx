import React from 'react';

const SpamList = (props) => {
  return (
    <div className="spam--list">
      {props.spams.map((spam, index) => {
        return (
          <div key={index} className="spam--content">
            <div className="spam--close"
              onClick={(e) => {
                e.preventDefault()
                props.onMinimizeClick()
              }
            }>X</div>
            <div className="spam--middle">
              <h2 className="spam--title">{spam.title}</h2>
              <div className="spam--send">
                <button className="spam--send-button"
                  onClick={(e) => {
                    e.preventDefault()
                    props.toggleSend()
                  }
                }>send</button>
                {props.sendVisibility ? (
                    <div className="spam--send-interface">
                      <form action="/spam">
                        to:
                        <input className="spam--send-interface-input" type="text" name="from" />
                        from:
                        <input className="spam--send-interface-input" type="text" name="to" />
                        <input type="submit" />
                      </form>
                    </div>
                  ) : (
                    <p></p>
                  )}
              </div>
              <p className="spam--body">{spam.body}</p>
              <span className="spam--bottom"></span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SpamList;
