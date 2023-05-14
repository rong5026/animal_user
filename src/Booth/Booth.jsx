import React from 'react'
import "./Booth.css"
import booth from "../Image/booth.png"

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
            <div className='booth-content'>
                <span className='booth-content-title'> 동물상 미팅 (조준희 부스) <br></br></span>
                <span className='booth-content-sub-title'> <br></br>&lt; 동물상 측정 체험 &gt;<br></br></span>
                <span>
                  비용 : 무료<br></br>
                  부스에서 자기와 닮은 동물상은 무엇인지 체험해보세요! <br></br>
                  체험을 통해서 스탬프를 받으실 수 있습니다 ~ <br/><br/>
                </span>
                <span className='booth-content-sub-title'>   &lt; 동물상 미팅 &gt; <br></br> </span>
                <span>
                  비용 : 2000원<br></br>
                  선호하는 동물상을 고른 후 동물상 미팅에 참여해보세요! <br></br>
                  미팅에 참여하시면 형광 팔찌를 받아가실 수 있습니다. <br></br>
                  1 : 1 미팅 <br></br> 2 : 2 미팅, <br></br> 3 : 3 미팅까지 <br/><br/>
                </span>

                
            </div>
            <div>
            </div>

        </div>
    </div>
  )
}

export default Booth