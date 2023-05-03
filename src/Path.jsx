import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Protected from './components/Protected'
import CreateRoom from './pages/CreateRoom'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Job from './pages/Job'
import JoinRoom from './pages/JoinRoom'
import Login from './pages/Login'
import MockInterview from './pages/MockInterview'
import Profile from './pages/Profile'
import Register from './pages/Register'


const Path = () => {
  return (
    <>

        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Protected Component={Dashboard}/>} />
                <Route path="/job" element={<Protected Component={Job}/>} />
                <Route path="/profile" element={<Protected Component={Profile}/>} />
                <Route path="/mock-interview" element={<Protected Component={MockInterview}/>} />
                {/* <Route path="/create-room" element={<Protected Component={CreateRoom}/>} /> */}
                <Route path="/create-room/:roomId" element={<Protected Component={CreateRoom}/>} />
                <Route path="/join-room" element={<Protected Component={JoinRoom}/>} />

                {/* <Protected  /> */}


                <Route path="/*" element={<Error />} />

            </Routes>
        </Router>
    </>
  )
}

export default Path