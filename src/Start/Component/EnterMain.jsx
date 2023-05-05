import React from 'react'
import "../EnterMain.css"
import Rabbit from '../../Image/rabbit.png';


const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
   <div>
     <FormInput description="User Name" placeholder="ex) 홍길동" type="text" />
     <FormInput description="Phone Number" placeholder="ex) 01012345678" type="password"/>
     <FormButton title="미팅 참여" description="동물상"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
    <button>{props.description}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const RabbitImage = props => (
  <div id="alternativeLogin">
     <img className='enter-image' height={"150px"} src={Rabbit} alt='토끼사진' />
  </div>
);

function EnterMain() {
    return (
        <div id="loginform">
            <FormHeader title="동물상 미팅"/>
            <RabbitImage/>
            <Form/>
        </div>
    )
}

export default EnterMain





