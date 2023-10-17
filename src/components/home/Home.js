import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index'
import ChatList from '../chatList/ChatList'
import Chatwindow from "../chatWindow/ChatWindow"
import "./home.css"

const Home = props => {
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
        <div className="mainContainer">
            <ChatList chats={chats} style={{ width: "50vw" }} />
            <Chatwindow style={{ width: "50vw" }} />
        </div>
    )
}

function mapStateToProps(state) {
    return { defaultText: state.appReducer.defaultText };
}

export default connect(mapStateToProps)(Home);
