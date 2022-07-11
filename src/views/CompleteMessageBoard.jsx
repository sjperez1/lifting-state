import React, {useState} from 'react'
import CompleteMessageForm from '../components/completeMessageBoard/CompleteMessageForm'
import CompleteMessageDisplay from '../components/completeMessageBoard/CompleteMessageDisplay'

const CompleteMessageBoard = () => {
    const [messages, setMessages] = useState([])
    // messages: array of message objects

    const receiveNewMessage = (newMessageObject) => {
        setMessages([...messages, newMessageObject])
    }

    const updateList = (updatedList) => {
        setMessages(updatedList)
    }

    return (
        <fieldset>
            <legend>CompleteMessageBoard</legend>
            <CompleteMessageForm onNewMessage = {receiveNewMessage}/>
            <CompleteMessageDisplay messages={messages} onListUpdate={updateList}/>
        </fieldset>
    );
}

export default CompleteMessageBoard