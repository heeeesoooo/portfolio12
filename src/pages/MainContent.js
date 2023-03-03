import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
padding: 100px 0;
`

const Inner = styled.div`
display: flex;
gap: 30px;
margin: 0 auto;
width: 1200px;

`

const Itm = styled.div`
.img {
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px;
}
.img img {
    width: 100%;
    transition: 0.5s;
}

.img:hover img {
    transform: scale(1.2);
}

.txt strong {
    font-size: 22px;
    font-weight: 700;
    line-height: 40px;
}
.txt p {
    font-size: 16px;
}
`



const MainContent = () => {
    return (
        <Section>
            <Inner>
                <Itm>
                    <div className='img'>
                        <img src="/assets/mainContent01.jpg" alt="" />
                    </div>
                    <div className='txt'>
                        <strong>채소가 쏟아지는 베란다 텃밭 만들기</strong>
                        <p>모종/흙&영양제/화분/가드닝 도구까지</p>
                    </div>
                </Itm>
                <Itm>
                    <div className='img'>
                        <img src="/assets/mainContent02.jpg" alt="" />
                    </div>
                    <div className='txt'>
                        <strong>새학기 알림장</strong>
                        <p>초등 학부모님! 이건 꼭 준비해 주세요</p>
                    </div>
                </Itm>
                <Itm>
                    <div className='img'>
                        <img src="/assets/mainContent01.jpg" alt="" />
                    </div>
                    <div className='txt'>
                        <strong>[화이트데이 스페셜] 사랑꾼 패키지</strong>
                        <p>작고 반짝임+달콤함+감동까지! 모두 준비해봤어♥</p>
                    </div>
                </Itm>
            </Inner>
        </Section>
    )
}

export default MainContent