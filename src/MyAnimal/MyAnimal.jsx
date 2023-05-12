import React from 'react'
import "./MyAnimal.css"
import animal3 from "../Image/자산 3.png"
function MyAnimal() {
  return (
    <div id='myanimalform'>
        <div className='myanimal-title'>
            나의 동물상
        </div>
        <div className='myanimal-image'>
            <img src={animal3}></img>
        </div>
    </div>
  )
}

export default MyAnimal