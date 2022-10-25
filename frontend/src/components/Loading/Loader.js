import React from 'react'
import "./Loader.css"

const Loader = (props) => {
  return (
    <>
    <div className="flex flex-col h-[36rem] w-4/6 justify-center items-center">
        <div style={{width: `${props.width || '120px'}`, height: `${props.height || '120px'}`}} className='loader'></div>
    </div>
    </>
  )
}

export default Loader