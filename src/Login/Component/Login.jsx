import React from 'react'
import {useState, useEffect} from 'react';
import "../Login.css"
import Rabbit from '../../Image/rabbit.png';
import {db} from '../../Firebase/FirebaseConfig';
import {addDoc, collection, getDocs} from "firebase/firestore";
import {Link} from "react-router-dom";

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

    const onClickLogin = (e) => {
        console.log("clicked")
        // console.log(inputId) console.log(inputPw)
    }

    useEffect(() => {

        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);

            // 문서이름
            const datalist = data.docs.map(item => item.id)

            // users안 데이터 전부 가져오기
            // data.forEach((doc)=>{
            //     console.log(doc.data())
            // })
           
        }

        const addUsers = async () => {
            await addDoc(usersCollectionRef, {
                name: "tong",
                phone: "12341111",
                gender: "male"
            })
        }

        getUsers();
    }, [])

    return (
        <div id="loginform">
            <FormHeader title="동물상 미팅"/>
            <RabbitImage/>
            <div>
                <div className="row">
                    <label>User Name</label>
                    <input
                        type="text"
                        placeholder="ex) 홍길동"
                        value={inputId}
                        onChange={handleInputId}/>
                </div>
                <div className="row">
                    <label>Phone Number</label>
                    <input
                        type="password"
                        placeholder="ex) 01012345678"
                        value={inputPw}
                        onChange={handleInputPw}/>
                </div>
                <div id="login-button" className="row">
                    <Link className='button-link' to={`/main`}>
                        <button className='login-button' onClick={onClickLogin}>미팅 참여</button>
                    </Link>
                    <button className='login-button'>부스소개</button>
                </div>
            </div>
        </div>
    )
}

export default EnterMain
