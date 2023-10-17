import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

function Header(props) {
    return (
        <div class="header">
            {props.title}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;

