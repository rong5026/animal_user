import React from 'react'
import {useState, useEffect} from 'react';
import "./Enter.css"
import MainImage from '../Image/rabbit.png';
import MainImage2 from "../Image/main2.png"
import MainImage3 from "../Image/main3.png"
import MainPuppy from "../Image/main_puppy.png"
import MainCat from "../Image/main_cat.png"

import {db} from '../Firebase/FirebaseConfig';
import {
    addDoc,
    collection,
    getDocs,
    query,
    queryEqual,
    where
} from "firebase/firestore";
import Main from '../Main/Main';
import { Link } from 'react-router-dom';

const FormHeader = props => (<h2 id="headerTitle">동물상 미팅</h2>);

const RabbitImage = props => (
    <div id="enter-login">
        <img className='enter-image' height={"150px"} src={MainPuppy} alt='토끼사진'/>
    </div>
);

const usersCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_USER_DATABASE);

function EnterMain() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = async (e) => {
        console.log("clicked")
        
        const q = query(
            usersCollectionRef,
            where("name", "==", inputId),
            where("phone", "==", inputPw)
        )
        const querySnapshot = await getDocs(q);

        // querySnapshot.forEach((doc) => {   console.log(doc);   console.log(doc.id, "
        // => ", doc.data()); });
        let data = null
        if (querySnapshot.docs[0] == undefined) {
            alert("로그인 정보가 틀렸습니다!")
            setInputId('')
            setInputPw('')
        } else {
            data = querySnapshot
                .docs[0]
                ._document
                .data
                .value
                .mapValue
                .fields;

            if (data.name.stringValue == inputId && data.phone.stringValue == inputPw) {
                console.log("로그인")
                sessionStorage.setItem('user_id', inputId)
                setIsLogin(true)
            } else {
                alert("비밀번호가 틀렸습니다!")
            }
        }

    }

   // getDocs로 컬렉션안에 데이터 가져오기 const data = await getDocs(usersCollectionRef); 문서이름
            // const datalist = data.docs.map(item => item.id) users안 데이터 전부 가져오기
            // data.forEach((doc)=>{     console.log(doc.data()) })

    useEffect(() => {

        // 페이지 전환
        const setPage = async () => {
            if (sessionStorage.getItem('user_id') === null) {
            } else {
                setIsLogin(true)
            }
        }

        const addUsers = async () => {
            await addDoc(usersCollectionRef, {
                name: "tong",
                phone: "12341111",
                gender: "male"
            })
        }

        setPage();
    }, [])

    return (
        <div>
            {
                isLogin
                    ? <Main isLogin={isLogin}/>
                    : <div id="loginform">
                            <FormHeader />
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

                                    <button className='login-button' onClick={onClickLogin}>미팅 참여</button>
                                    <Link className='button-link' to={`/booth`}>
                                        <button className='login-button'>부스소개</button>
                                    </Link>
                                    <Link className='button-link' target='_blank' to={`https://open.kakao.com/o/s3Dz8mkf`}>
                                        <button className='login-button'>문의하기</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
            }
        </div>

    )
}

export default EnterMain
