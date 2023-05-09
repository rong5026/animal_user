import React from 'react'
import { useState, useEffect } from 'react';
import "../Login.css"
import Rabbit from '../../Image/rabbit.png';
import {db} from '../../Firebase/FirebaseConfig';
import {collection, getDocs} from "firebase/firestore";

const FormHeader = props => (<h2 id="headerTitle">{props.title}</h2>);

const Form = props => (
    <div>
        <FormInput description="User Name" placeholder="ex) 홍길동" type="text"/>
        <FormInput
            description="Phone Number"
            placeholder="ex) 01012345678"
            type="password"/>
        <FormButton title="미팅 참여" description="동물상"/>
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button>{props.title}</button>
        <button>{props.description}</button>
    </div>
);

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);

const RabbitImage = props => (
    <div id="enter-login">
        <img className='enter-image' height={"150px"} src={Rabbit} alt='토끼사진'/>
    </div>
);
const usersCollectionRef = collection(db, "animal-database");

function EnterMain() {

    
    useEffect(() => {
        // 비동기로 데이터 받을준비
        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            console.log(data);
        }

        getUsers();
        console.log(process.env.REACT_APP_FIREBASE_APIKEY)
    }, [])

    return (
        <div id="loginform">
            <FormHeader title="동물상 미팅"/>
            <RabbitImage/>
            <Form/>
        </div>
    )
}

export default EnterMain
