import React from 'react'
import "./MatchResult.css"
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useState, useEffect} from 'react';
import {db} from '../Firebase/FirebaseConfig';
import animal1 from '../Image/자산 1.png'
import animal2 from '../Image/자산 2.png'

const userMatchForm = props => (<div></div>);

function MatchResult() {

    const usersCollectionRef = collection(db, "animal-database");

    const [userData, setUserData] = useState([])

    useEffect(() => {

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
                    gender: data.gender
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
                                        <img className='match-icon' src={animal1}></img>
                                    </div>
                                    <div className='match-animal-name'>
                                        {list.name}
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
                                        <img className='match-icon' src={animal2}></img>
                                    </div>
                                    <div className='match-animal-name'>
                                        {list.name}
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MatchResult