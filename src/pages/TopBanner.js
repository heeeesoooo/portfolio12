import styled from "styled-components";
import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

const TopBannerWrapper = styled.div`
position: relative;
display: flex;
align-items: center;

background: #f71334;
color: #fff;

overflow: hidden;
transition: height 0.5s;

&.on {
    height: 0;
}

.title {
font-size: 20px;
font-weight: 700;
margin-bottom:5px;
}

.text {
    font-size: 20px;
}

`

const Inner = styled.div`
position: relative;

width: 1200px;
margin: 0 auto;
padding: 10px 0;

.x {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}
`

const BTN = styled.button`
background: transparent;
padding: 5px 20px;
border: 1px solid #fff;
font-size: 12px;
margin: 0 0 0 40px;
`

const TopBanner = () => {
    const [on, setOn] = useState(false);
    return (
        <TopBannerWrapper className={on ? 'on' : ''}>
            <Inner>
                <div className="title">
                    POOM에서 무제한 10% 할인 받는 법
                </div>
                <div className="text">
                    프리미엄 멤버십 서비스 품 플러스 <BTN>한 달 무료 이용해보기</BTN>
                </div>
                <BsXCircleFill className="x" onClick={() => setOn(true)}/>
            </Inner>
        </TopBannerWrapper>
    )
}

export default TopBanner