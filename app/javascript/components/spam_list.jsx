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
                <button className="spam--send"
                  onClick={(e) => {
                    e.preventDefault()
                    props.toggleSend()
                  }
                }>send</button>
                {props.sendVisibility ? (
                    <div className="spam--send-interface">
                      <form>
                        to:
                        <input type="text" name="to-email" />
                        from:
                        <input type="text" name="from-email" />
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
