import React from 'react'
import "./MatchResult.css"
import {useNavigate} from "react-router-dom";
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
import { Link } from 'react-router-dom';
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
            return (<img className='match-icon' src={deerImage}></img>)
        case "고양이상":
            return (<img className='match-icon' src={catImage}></img>)
        case "강아지상":
            return (<img className='match-icon' src={dogImage}></img>)
        case "곰상":
            return (<img className='match-icon' src={bearImage}></img>)
        case "공룡상":
            return (<img className='match-icon' src={dinosuarImage}></img>)
        case "꼬부기상":
            return (<img className='match-icon' src={ggobokImage}></img>)
        case "여우상":
            return (<img className='match-icon' src={foxImage}></img>)
        case "토끼상":
            return (<img className='match-icon' src={rabbitImage}></img>)
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
    const [teamNumber, setTeamNumber] = useState("0")
    const [kakaoNumber, setKakaoNumver] = useState('')

    useEffect( () => {


        const getTeamNumber = async () => {
            const id = sessionStorage.getItem('user_id');
            const pw =sessionStorage.getItem('user_phone')
            const q = query(
                usersCollectionRef,
                where("name", "==", id),
                where("phone", "==", pw)
            )
            const querySnapshot = await getDocs(q);
            let data = querySnapshot
            .docs[0]
            ._document
            .data
            .value
            .mapValue
            .fields;

            if (data.team.stringValue == "0") {
               console.log("매칭이 되지 않았습니다!")
            } else {
                console.log("매칭이 되었습니다")
                setTeamNumber(data.team.stringValue);
                setKakaoNumver(data.kakao.stringValue);
            }
        }
        getTeamNumber()
       
       
    }, [])

    useEffect(()=> {

        const getUsers = async () => {
            
            if (teamNumber != "0" )
            {
                console.log(teamNumber)
                const q = query(
                    usersCollectionRef,
                    where("team", "==", teamNumber)
                )
                const querySnapshot = await getDocs(q);
                
                //users안 데이터 전부
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    // console.log(doc.data().phone)
                    const newData = {
                        name: data.name,
                        phone: data.phone,
                        gender: data.gender,
                        icon: data.icon,
                        kakao: data.kakao

                    }
    
                    setUserData(userData => [
                        ...userData,
                        newData
                    ]);
                })
            }

            
           
        }
        getUsers()

    },[teamNumber])

    return (
        <div id='matchform'>
            <div className='match-title'>
                매칭 결과
            </div>

            <div className='match-result'>
                <div className='match-my-gender'>
                    {
                        userData.map((list, index) => {
                            if (list.gender == "male")
                            {
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
                            }
                        })
                    }
                </div>
                <div className='empty-line'></div>
                <div className='match-opponent-gender'>
                    {
                        userData.map((list, index) => {
                            if (list.gender == "female") {
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
                            }
                        })
                    }
                </div>
            </div>
            <div className="kakao-button-container">
                <Link className='button-link' to={kakaoNumber} target='_blank'>
                    <button className='kakao-button'>오픈채팅 참여</button>
                </Link>
            </div> 
            
        </div>
    )
}

export default MatchResult