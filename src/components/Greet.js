import React from 'react'

const Greet = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greet
