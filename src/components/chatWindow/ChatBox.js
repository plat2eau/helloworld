import React from 'react'
import PropTypes from 'prop-types'
import Message from "./Message"

function ChatBox(props) {
    return (
        <div style={{ backgroundColor: "gray", height: "100%" }}>
            <Message />
        </div>
    )
}

ChatBox.propTypes = {

}

export default ChatBox

