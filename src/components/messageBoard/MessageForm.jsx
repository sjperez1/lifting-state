import React, {useState} from 'react'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // what should we do with the message?
        props.onNewMessage(msg)
        setMsg("")
    };
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Set Message</h1>
                <textarea 
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={msg}
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    )
}

export default MessageForm