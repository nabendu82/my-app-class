import React from 'react'

const btnStyle = {
    padding: '16px',
    backgroundColor: 'yellow',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '12px'
}

const ChildComponent = (props) => {
    return (
        <>
            <h1 style={{ backgroundColor: 'gray', color: 'brown' }}>Child Component</h1>
            <button style={btnStyle} onClick={() => props.greetHandler('Sodhi Singh Jr')}>Greet parent</button>
        </>
    )
}

export default ChildComponent
