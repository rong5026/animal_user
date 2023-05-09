import React from 'react'
import {useState, useEffect} from 'react';
import "../Login.css"
import Rabbit from '../../Image/rabbit.png';
import {db} from '../../Firebase/FirebaseConfig';
import {collection, getDocs} from "firebase/firestore";

const FormHeader = props => (<h2 id="headerTitle">{props.title}</h2>);

const RabbitImage = props => (
    <div id="enter-login">
        <img className='enter-image' height={"150px"} src={Rabbit} alt='토끼사진'/>
    </div>
);

const usersCollectionRef = collection(db, "animal-database");

function EnterMain() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    useEffect(() => {

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
            <div>
                <div className="row">
                    <label>User Name</label>
                    <input type="text" placeholder="ex) 홍길동"/>
                </div>
                <div className="row">
                    <label>Phone Number</label>
                    <input type="password" placeholder="ex) 01012345678"/>
                </div>
                <div id="button" className="row">
                    <button>미팅 참여</button>
                    <button>동물상</button>
                </div>
            </div>
        </div>
    )
}

export default EnterMain
