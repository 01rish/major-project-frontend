import React from 'react'

const Input = (props) => {
  return (
    <>
    <input type={`${props.type}`} style={props.styles} name={`${props.name}`} placeholder={`${props.placeholder}`} className={`px-5 rounded-lg focus:outline-none bg-slate-100   ${props.design}`} />
    </>
  )
}

export default Input    