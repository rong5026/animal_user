import React from 'react'
import "./MatchResult.css"
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import {db} from '../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import ggobokImage from '../Image/icon/ggobok.png'
import catImage from '../Image/icon/cat.png'
import dogImage from '../Image/icon/dog.png'
import deerImage from '../Image/icon/deer.png'

const userMatchForm = props => (<div></div>);

function matchImage(name) {
    switch (name) {
        case "사슴상":
            return (<img className='match-icon' src={deerImage}></img>)
        case "고양이상":
            return (<img className='match-icon' src={catImage}></img>)
        case "강아지상":
            return (<img className='match-icon' src={dogImage}></img>)
        default:
            return (<img className='match-icon' src={ggobokImage}></img>)

    }
}
function MatchResult() {

    const usersCollectionRef = collection(
        db,
        process.env.REACT_APP_FIREBASE_USER_DATABASE
    );

    const [userData, setUserData] = useState([])

    useEffect(() => {

        if (sessionStorage.getItem('user_id') === null) {
            console.log("result page 세션업승ㅁ")

        }
        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);

            //users안 데이터 전부
            data.forEach((doc) => {
                const data = doc.data()
                // console.log(doc.data().phone)
                const newData = {
                    name: data.name,
                    phone: data.phone,
                    gender: data.gender,
                    icon: data.icon
                }

                setUserData(userData => [
                    ...userData,
                    newData
                ]);
            })
        }
        getUsers()
    }, [])

    return (
        <div id='matchform'>
            <div className='match-title'>
                매칭 결과
            </div>

            <div className='match-result'>
                <div className='match-my-gender'>
                    {
                        userData.map((list, index) => {
                            return (
                                <div className='match-user-form'>
                                    <div className='match-icon-container'>
                                        {matchImage(list.icon)}
                                        {/* <img className='match-icon' src={animal1}></img> */}
                                    </div>
                                    <div className='match-animal-name'>
                                        {
                                            list.name == sessionStorage.getItem('user_id')
                                                ? "본인"
                                                : list.icon
                                        }

                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
                <div className='empty-line'></div>
                <div className='match-opponent-gender'>
                    {
                        userData.map((list, index) => {
                            return (
                                <div className='match-user-form'>
                                    <div className='match-icon-container'>
                                        {matchImage(list.icon)}
                                        {/* <img className='match-icon' src={animal2}></img> */}
                                    </div>
                                    <div className='match-animal-name'>
                                        {
                                            list.name == sessionStorage.getItem('user_id')
                                                ? "본인"
                                                : list.icon
                                        }
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
            </div>
            <div className="kakao-button-container">
                <Link className='button-link' to={`https://open.kakao.com/o/gX0q1mkf`} target='_blank'>
                    <button className='kakao-button'>오픈채팅 참여</button>
                </Link>
            </div>
        </div>
    )
}

export default MatchResult