import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SlHeart, SlBasket, BiUser } from "react-icons/sl";


const HeaderWapper = styled.header`
background: #f9f9f9;
`

const Inner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 1200px;
margin: 0 auto;
`

const H1 = styled.h1`
`

const GroablNav = styled.nav`
ul {
    gap: 40px;
    font-size: 20px;
    font-weight: 600;
}
`

const UL = styled.ul`
display: flex;
`

const LI = styled.li``

const GroablNavLink = styled(Link)`
`

const Icon = styled.div``

const Header = () => {
    return (
        <HeaderWapper>
            <Inner>
                <H1>
                    <Link to='/'>
                        <img src="/assets/logo.png"/>
                    </Link>
                </H1>
                <GroablNav>
                    <UL>
                        <LI><GroablNavLink to='sub/sub01'>BEST</GroablNavLink></LI>
                        <LI><GroablNavLink to='sub/sub02'>NEW</GroablNavLink></LI>
                        <LI><GroablNavLink to='sub/sub03'>SALE</GroablNavLink></LI>
                        <LI><GroablNavLink to='sub/sub03'>BRAND</GroablNavLink></LI>
                    </UL>
                </GroablNav>
                {/* <Icon>
                    <UL>
                        <LI><SlHeart/></LI>
                        <LI><SlBasket/></LI>
                        <LI><BiUser/></LI>
                    </UL>
                </Icon> */}
            </Inner>
        </HeaderWapper>
    )
}

export default Header