import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ChatItem from './ChatItem'
import "./style.css"

function ChatList(props) {
    var { chats } = props;
    return (
        <div class="chatsMainContainer">
            <form>
                <Header title="Filter by Title / Order ID" />
                <input class="searchBar" type='text' placeholder='Start typing to search' />
                {chats.map(element => {
                    return <ChatItem
                        title={element.title}
                        orderId={element.orderId}
                        icon={element.icon}
                        date={element.date}
                        preview={element.preview} />
                })}
            </form>
        </div>
    )
}

ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.object)
}

export default ChatList

