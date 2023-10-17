import React from 'react'
import PropTypes from 'prop-types'

function MessageBar(props) {
    return (
        <form style={{ width: "100%" }}>
            <input type='text' placeholder='Type a message' />
            <button type='submit'> Icon </button>
        </form>
    )
}

MessageBar.propTypes = {

}

export default MessageBar

