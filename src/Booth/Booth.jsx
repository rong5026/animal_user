import React from 'react'
import "./Booth.css"
import booth from "../Image/booth.jpg"

function Booth() {
    return (
        <div id="boothform">
            <div className='booth-title'>
                동물상 미팅
            </div>
            <div className='booth-image-container'>
                <img className='booth-image' src={booth}></img>
            </div>
            <div className='booth-content-container'>
                <div className='booth-content1'>
                    {/* <span className='booth-content-title'> 동물상 미팅 (조준희 부스) <br></br></span> */}
                    <span className='booth-content-sub-title'>&lt; 동물상 측정 체험 &gt;<br></br>
                    </span>
                    <span>
                        비용 : 무료<br></br>
                        나와 닮은 동물은 무엇일까?
                        <br></br>
                        부스에서 나의 동물상도 알아보고, 스탬프도 받아가자! <br></br>
                    </span>

                </div>
                <div className='booth-content2'>
                    <span className='booth-content-sub-title'>
                        &lt; 동물상 미팅 &gt;
                        <br></br>
                    </span>
                    <span>
                        비용 : 2000원<br></br>
                        우리 학교에 내가 선호하는 동물상의 이상형은 없을까?
                        <br></br>
                        선호하는 동물상을 고른 후 동물상 미팅에 참여해보세요!
                        <br></br>
                        미팅에 참여하시면 형광 팔찌를 받아가실 수 있습니다.
                        <br></br>
                        1:1, 2:2, 3:3으로 진행되는 미팅! 어떻게 미팅할지, 선택은 당신에게 달려있다! 
                        <br></br>단돈 2000원에 미팅 참여하면 팔찌는 덤!
                        <br></br> 
                        <br></br>
                        <span className='sub-notice'>
                        현장에서
                        접수해야 미팅 참여가 가능합니다. <br></br>미팅에 참여하지 않을 시, 팔찌는 별도 구매입니다.
                        </span>
                       

                    </span>
                </div>

            </div>
        </div>
    )
}

export default Booth