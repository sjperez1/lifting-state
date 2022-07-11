import React, {useState} from 'react'
import MessageForm from '../components/messageBoard/MessageForm'
import MessageDisplay from '../components/messageBoard/MessageDisplay'
import MessageHistoryDisplay from '../components/messageBoard/MessageHistoryDisplay'
const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const [messageArray, setMessageArray] = useState([])

    const receiveNewMessage = (newMessage) => {
        setCurrentMsg(newMessage)
        setMessageArray([...messageArray, newMessage])

    }

    return (
        <div>
            <h1>messageboard.jsx</h1>
            <MessageForm onNewMessage = {receiveNewMessage}/>
            <MessageDisplay message={currentMsg}/>
            <MessageHistoryDisplay messageArray = {messageArray} />
            <h1>currentMsg: {currentMsg}</h1>
        </div>
    )
}

export default MessageBoard