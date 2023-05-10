import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom";

function Main() {
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
                            <div>12</div>
                        </div>
                        <div className='main-gender-space'></div>
                        <div className='main-female-title'>
                            <div id='femal-text'>여</div>
                            <div>12</div>
                        </div>
                    </div>
                </div>

                <div id="main-button" className="row">
                    <Link className='button-link' to={`/result`}>
                        <button className='login-button'>매칭 결과</button>
                    </Link>
                    <button className='login-button'>나의 동물상</button>
                </div>

            </div>
        </div>

    )
}

export default Main