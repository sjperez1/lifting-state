import React from 'react'


const SiblingCounter = (props) => {

    const addCount = () => {
        // ask parent to check the count
        props.parentReceiveFunction()
    }

    return (
        <fieldset style={{backgroundColor: "powderblue"}}>
            <legend> SiblingCounter.jsx</legend>
            <button onClick={addCount}> Add Count!</button>
        </fieldset>
    )
}

export default SiblingCounter