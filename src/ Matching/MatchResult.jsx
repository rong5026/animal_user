import React from 'react'
import "./MatchResult.css"
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useState, useEffect} from 'react';
import {db} from '../Firebase/FirebaseConfig';

function MatchResult() {

    const usersCollectionRef = collection(db, "animal-database");

    useEffect(() => {

        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);

            data.forEach((doc)=>{
                console.log(doc.data())
            })
        }

        


    }, [])
    
    return (
        <div id='matchform'>
            <div className='match-title'>
                매칭 결과
            </div>
            <div className='match-result'>
                <div className='match-my-gender'>
                    sdf
                </div>
                <div className='match-opponent-gender'>
                    df
                </div>
            </div>

        </div>
    )
}

export default MatchResult