import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function ChatItem(props) {
    var { title, icon, date, preview, orderId } = props
    return (
        <>
            <hr width="100%" />
            <div className="itemMainContainer">
                <div className="imageContainer">
                    <img src={icon} className="image" />
                </div>
                <div className="itemContent">
                    <div className="itemTitle">
                        {title}
                    </div>
                    <div className="itemOrderId">
                        OrderId : {orderId}
                    </div>
                    <div className="itemPreview">
                        {preview}
                    </div>
                </div>
                <div className="itemDate">
                    {date}
                </div>
            </div>
        </>
    )
}

ChatItem.propTypes = {
    title: PropTypes.string.isRequired,
    orderId: PropTypes.string,
    icon: PropTypes.string,
    date: PropTypes.string,
    preview: PropTypes.string
}

export default ChatItem

