import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

function Header(props) {
    const { imageUrl } = props
    return (
        <div class="headerContainer">
            <div className="imageContainer">
                <img src={imageUrl} className="image" />
            </div>
            <div className="title">Flipkart Support</div>
        </div>
    )
}

Header.propTypes = {
    imageUrl: PropTypes.string
}

export default Header

