import React from 'react'

function Video() {
  return (
    <>
    {/* <div className="bg-white p-3 rounded-xl flex flex-col justify-center items-center">
    <p className="text-gray-400 mb-2">Daily Recommended Video</p> */}

    <iframe width="400" height="210" className='rounded-xl' src="https://www.youtube.com/embed/doVVs4dhjxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>         

    {/* </div> */}
    </>
  )
}

export default Video