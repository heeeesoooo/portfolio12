import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";

const MainVisual = styled.div`
width: 1200px;
margin: 0 auto;
position: relative;

figure {
        position: relative;
    img {
        width: 100%;
        border-radius: 20px;
        }
    .txt {
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translate(0, -50%);
        strong {
            display: block;
            font-size: 50px;
            font-weight: 700;
            line-height: 1.3;
            margin: 0 0 30px 0;
        }
        p {
            font-size: 25px;
            font-weight: 500;
        }
        }
    }

/* 슬라이드 설정 */

.slick-dots {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom:-30px;
}

.slick-dots li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 3px;
    background: #ddd;
    border-radius: 10px;
}

.slick-dots li.slick-active {
    background: #f71334;
    width: 20px;
}

.slick-dots li button {
    display: none;
}
`
const Main = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slideToShow: 3,
        slideToScroll: 1,
    };
    return (
        <MainVisual>
            <MainSlide{...settings}>
                <figure>
                    <img src="/assets/mainslide01.jpg" alt="" />
                </figure>
                <figure>
                    <img src="/assets/mainslide02.jpg" alt="" />
                </figure>
                <figure>
                    <img src="/assets/mainslide03.jpg" alt="" />
                    <div className="txt white">
                        <strong>향기의<br />정원</strong>
                        <p>새봄, 기분 전환을 위한 프래그런스</p>
                    </div>
                </figure>
                <figure>
                    <img src="/assets/mainslide04.jpg" alt="" />
                    <div className="txt">
                        <strong>옷장 쏙!<br />일타정리법</strong>
                        <p>겨울옷 넣고 봄옷을 꺼낼 시간</p>
                    </div>
                </figure>
            </MainSlide>
        </MainVisual>
    )
}

export default Main