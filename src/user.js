import React from 'react'

const User = (props) => {
    const data = props.data
    return (
    <div>
    <h1>User Component</h1>
    <p>My name is {data.name} and my age is {data.age} </p>
    </div>
  )
}

export default User