import React from 'react'
import "./MyAnimal.css"
import {useState, useEffect} from 'react';
import animal3 from "../Image/자산 3.png"
import bearImage from '../Image/icon/bear.png';
import dinosuarImage from '../Image/icon/dinosaur.png'
import ggobokImage from '../Image/icon/ggobok.png'
import catImage from '../Image/icon/cat.png'
import dogImage from '../Image/icon/dog.png'
import deerImage from '../Image/icon/deer.png'
import foxImage from '../Image/icon/fox.png'
import rabbitImage from '../Image/icon/rabbit.png'


function matchImage(name) {
  switch (name) {
      case "사슴상":
          return (<img className='my-icon' src={deerImage}></img>)
      case "고양이상":
          return (<img className='my-icon' src={catImage}></img>)
      case "강아지상":
          return (<img className='my-icon' src={dogImage}></img>)
      case "곰상":
          return (<img className='my-icon' src={bearImage}></img>)
      case "공룡상":
          return (<img className='my-icon' src={dinosuarImage}></img>)
      case "꼬부기상":
          return (<img className='my-icon' src={ggobokImage}></img>)
      case "여우상":
          return (<img className='my-icon' src={foxImage}></img>)
      case "토끼상":
          return (<img className='my-icon' src={rabbitImage}></img>)
      default:
          return (<img className='my-icon' src={rabbitImage}></img>)

  }
}

function MyAnimal() {

  const [iconName, setIconName] = useState("");

  useEffect(() => {
    setIconName(sessionStorage.getItem('user_animal'))
  },[])
  
  return (
    <div id='myanimalform'>
        <div className='myanimal-title'>
            나의 동물상
        </div>
        <div className='myanimal-image'>
          {matchImage(iconName)}
        </div>
        <div className='myanimal-name'>
            {iconName}
        </div>
    </div>
  )
}

export default MyAnimal