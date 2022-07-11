import React from 'react'

const CompleteMessageDisplay = (props) => {

    const handleDelete = (idxToDelete) => {
        const filteredList = props.messages.filter((element, i) => {
            return i !== idxToDelete
        })
        // console.log(filteredList)
        props.onListUpdate(filteredList)
    }

    const handleImportant = (e, idx) => {
        const arrayCopy = [...props.messages]
        arrayCopy[idx].isImportant = e.target.checked
        props.onListUpdate(arrayCopy)
    }

    return (
        <fieldset>
            <legend>CompleteMessageDisplay</legend>
            {
                props.messages.map((eachMessage, i)=>{
                    return(
                        <pre key={i} 
                        style={eachMessage.isImportant?{color:"red"}:{color:"blue"}
                    }>To {eachMessage.receiver}: {eachMessage.content} 
                    <input type="checkbox" checked={eachMessage.isImportant} onChange={e=>handleImportant(e, i)}/>
                    <button onClick={(e)=>handleDelete(i)}>Delete</button>
                    </pre>
                    )
                })
            }
        </fieldset>
    )
}

export default CompleteMessageDisplay