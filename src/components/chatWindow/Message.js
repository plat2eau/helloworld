import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {

    var { selfSent, content, status, timeStamp } = props
    selfSent = true
    return (
        <div style={{ padding: "20px", backgroundColor: `${selfSent ? "blue" : "white"}`, width: "100px", display: "absolute" }}>
            Message
        </div>
    )
}

Message.propTypes = {
    selfSent: PropTypes.bool,
    content: PropTypes.string,
    status: PropTypes.string,
    timeStamp: PropTypes.number
}

export default Message

