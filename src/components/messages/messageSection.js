import React, { Component } from 'react'
import MessageList from './messageList'
import MessageForm from './messageForm'

class MessageSection extends Component {

  render() {
    let {activeChannel} = this.props
    return (
      <div className="messages-container card card-default">
        <div className='card-header'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className="card-body messages">
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }

}

// MessageSection.propTypes = {
//   messages: React.PropTypes.array.isRequired,
//   activeChannel: React.PropTypes.object.isRequired,
//   addMessage: React.PropTypes.func.isRequired
// }

export default MessageSection
