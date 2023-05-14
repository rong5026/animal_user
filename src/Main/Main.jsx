import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {db} from '../Firebase/FirebaseConfig';
import {
    addDoc,
    collection,
    getDocs,
    query,
    queryEqual,
    where
} from "firebase/firestore";

function Main({isLogin}) {

    const participantCollectionRef = collection(db, process.env.REACT_APP_FIREBASE_PARTICIPANT_DATABASE);
    const [maleNumber, setMaleNumber] = useState(0);
    const [femaleNumber, setFealeNumber] = useState(0)

    useEffect(() => {
        console.log("매칭인원 가져오기")
        const getParticipant = async () => {
            const getData = await getDocs(participantCollectionRef);
            const data = getData.docs[0]._document.data.value.mapValue.fields
            setMaleNumber(data.male.integerValue)
            setFealeNumber(data.female.integerValue)
        }
        getParticipant()
    }, [])

    const onClickLogout = async (e) => {
        console.log("로그아웃 버튼 눌림")
        isLogin = false
        sessionStorage.clear()
        window.location.replace("/")
    }
    
    return (
        <div>

            <div id='mainform'>
                <div className='row'>
                    <div className='mainform-title'>
                        참여 인원
                    </div>
                    <div className='mainform-title-content'>
                        <div className='main-male-title'>
                            <div id='male-text'>남</div>
                            <div id='male-number'>{maleNumber}</div>
                        </div>
                        <div className='main-gender-space'></div>
                        <div className='main-female-title'>
                            <div id='femal-text'>여</div>
                            <div id='female-number'>{femaleNumber}</div>
                        </div>
                    </div>
                </div>

                <div id="main-button" className="row">
                    <Link className='button-link' to={`/result`}>
                        <button className='login-button'>매칭 결과</button>
                    </Link>
                    <Link className='button-link' to={`/myanimal`}>
                        <button className='login-button'>나의 동물상</button>
                    </Link>
                    
                    <button className='logout-button' onClick={onClickLogout}>로그아웃</button>
                </div>

            </div>
        </div>

    )
}

export default Main