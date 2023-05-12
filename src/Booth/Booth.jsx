import React from 'react'
import "./Booth.css"
import booth from "../Image/booth.png"

function Booth() {
  return (
    <div id="boothform">
        <div className='booth-title'>
            동물상 미팅
        </div>
        <div className='booth-image-container'>
            <img className='booth-image' src={booth}></img>
        </div>
        <div className='booth-content-container'>
            <div className='booth-content'>
                sdfsd
            </div>
        </div>
    </div>
  )
}

export default Booth