import React, {useState} from 'react'

const CompleteMessageForm = (props) => {
    const [content, setContent] = useState("")
    const [receiver, setReceiver] = useState("")
    //can make the state have something for the dropdown when you go to the page using option hidden or coding in a default value
    const [isImportant, setIsImportant] = useState(true)
    const handleSubmit=(e)=> {
        // prevent default is only needed when submitting a form
        e.preventDefault()
        // the following will make a list of objects becasue this is an object going into a list in hte parrent
        props.onNewMessage({content, receiver, isImportant})
    }

    return (
        <fieldset>
            <legend>CompleteMessageForm</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Message Content</label>
                    <input type="text" name="content" value={content} onChange={e=>setContent(e.target.value)}/>
                </div>
                <div>
                    <label>Receiver</label>
                        <select name="receiver" value={receiver} onChange={e => setReceiver(e.target.value)}>
                            <option hidden>Choose a receiver</option>
                            <option value="Alex Miller">Alex Miller</option>
                            <option value="Martha Smith">Martha Smith</option>
                            <option value="Roger Anderson">Roger Anderson</option>
                        </select>
                </div>
                <div>
                    {/* checkbox only has e.target.checked and  */}
                    <label>Important?</label>
                    <input type="checkbox" name="isImportant" checked={isImportant} onChange={e=>setIsImportant(e.target.checked)}/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </fieldset>
    );
}

export default CompleteMessageForm