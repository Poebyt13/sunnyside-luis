import React from 'react'

function Photos({ img }) {
  return (
    <div className={img + " bg-center bg-cover h-[30rem] bg-no-repeat max-md:h-[20rem]"}></div>
  )
}

export default Photos
