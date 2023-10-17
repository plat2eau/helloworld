import React from 'react'
import PropTypes from 'prop-types'
import ChatBox from './ChatBox'
import MessageBar from './MessageBar'
import Header from './Header'
import "./style.css"

function ChatWindow(props) {

    let chats = [{
        title: "Chat1",
        icon: "https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/4/n/n/boat-stone-grenade-original-imafg96ffpnpgdv4.jpeg?q=90",
        date: "12/12/1222",
        preview: "nalsflsajdkfnskjdnfla",
        orderId: "orderId"
    }, {
        title: "Chat1",
        icon: "https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/4/n/n/boat-stone-grenade-original-imafg96ffpnpgdv4.jpeg?q=90",
        date: "12/12/1222",
        preview: "nalsflsajdkfnskjdnfla",
        orderId: "orderId"
    }]

    return (
        <div className="chatWindowMainContainer">
            <Header imageUrl={chats[0].icon} />
            <ChatBox />
            <MessageBar />
        </div>
    )
}

ChatWindow.propTypes = {

}

export default ChatWindow

