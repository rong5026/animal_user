import React from 'react'
import "../CSS/Top.css"
import Rabbit from '../../Image/rabbit.png';



function Top() {
    return (
        <div className='enter-top-container'>

          <div className='enter-top-title'>
            동물상 미팅
          </div>

          <div className='enter-top-image'>
            <img className='enter-top-image-content' src={Rabbit} alt='토끼사진' />
          </div>

        </div>
    )
}

export default Top