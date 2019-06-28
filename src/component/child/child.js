import React from 'react'

function Test(props) {
    const con = []
    return (
        <div>
            {con.map(item => <div>{item.name}</div>)}
            1111111
            {props.children}
        </div>
    )
}

export default Test