import React,{useContext} from 'react'
import { AppState } from "../context";


const Error = () => {
  const appData = useContext(AppState)
  console.log(appData)
  return (
    <div>Error 404 Not Found</div>
  )
}

export default Error