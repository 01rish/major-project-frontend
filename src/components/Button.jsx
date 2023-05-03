import React from 'react'

const Button = (props) => {
  return (
    <>
   <button style={props.styles} onClick={()=>{console.log('clicked')}}  className={`px-10 py-3 font-bold rounded-lg ${props.design}`}>{props.title}</button>
    </>
  )
}

export default Button