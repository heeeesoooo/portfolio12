import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
padding: 100px 0;
`

const Inner = styled.div`
margin: 0 auto;
width: 1200px;

h2 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
}
`

const RouterTab = styled.div`
display: flex;
gap: 50px;

.conwrap {
    display: flex;
    gap: 30px;
    text-align: center;
}

.conwrap figure img {
    width: 290px;
    height: 290px;
    margin: 0 0 10px 0;
    border-radius: 50%;
    box-shadow: 10px 5px 5px #ddd;
}

.conwrap figure strong {
    font-size: 20px;
    line-height: 1.2;
}

`

const UL = styled.ul`
width: 30%;
`

const LI = styled.li`
font-size: 30px;
font-weight: 700;
color: #fff;

padding: 10px 0 10px 20px;
margin-bottom: 10px;
background: #333;
border-radius: 30px;
`


const MainTab = () => {
    return (
        <Section>
            <Inner>
                <h2>HOT KEYWORD</h2>
                <RouterTab>
                    <UL>
                        <LI><Link to='tab01'>&#35;도시락</Link></LI>
                        <LI><Link to='tab02'>&#35;노트</Link></LI>
                        <LI><Link to='tab03'>&#35;신학기가방</Link></LI>
                    </UL>
                    <Outlet />
                    <Routes>
                        <Route path='/' element={
                            <div className="conwrap">
                                <figure>
                                    <img src="/assets/con01_01.jpg" alt="" />
                                    <strong>스누피<br />원형 2단 도시락</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con01_02.jpg" alt="" />
                                    <strong>푸 입체 슬림<br />1단 도시락</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con01_03.jpg" alt="" />
                                    <strong>모슈 라떼<br />런치박스 화이트</strong>
                                </figure>
                            </div>
                        }></Route>
                        <Route path='tab01' element={
                            <div className="conwrap">
                                <figure>
                                    <img src="/assets/con01_01.jpg" alt="" />
                                    <strong>스누피<br />원형 2단 도시락</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con01_02.jpg" alt="" />
                                    <strong>푸 입체 슬림<br />1단 도시락</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con01_03.jpg" alt="" />
                                    <strong>모슈 라떼<br />런치박스 화이트</strong>
                                </figure>
                            </div>
                        }></Route>
                        <Route path='tab02' element={
                            <div className="conwrap">
                                <figure>
                                    <img src="/assets/con02_01.png" alt="" />
                                    <strong>신학기노트<br />멍뭉이</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con02_02.png" alt="" />
                                    <strong>마이 A5<br />스프링노트</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con02_03.png" alt="" />
                                    <strong>옐로<br />브라운 베어 노트</strong>
                                </figure>
                            </div>
                        }></Route>
                        <Route path='tab03' element={
                            <div className="conwrap">
                                <figure>
                                    <img src="/assets/con03_01.png" alt="" />
                                    <strong>Everyday<br />캐쥬얼 백팩</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con03_02.png" alt="" />
                                    <strong>3D POINT<br />BACKPACK</strong>
                                </figure>
                                <figure>
                                    <img src="/assets/con03_03.png" alt="" />
                                    <strong>메신저백<br />블랙</strong>
                                </figure>
                            </div>
                        }></Route>
                    </Routes>
                </RouterTab>
            </Inner>
        </Section>
    )
}

export default MainTab