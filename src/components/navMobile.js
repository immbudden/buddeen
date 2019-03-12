import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import media from "styled-media-query";
import Img from 'gatsby-image'
import Today from '@material-ui/icons/Today';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Favorite from '@material-ui/icons/Favorite';

const NavWrapperMobile = styled.div `
    background: #FFF;
    height: 8.5vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 500;
    box-shadow: 0px -2px 15px -2px rgba(17,17,17,0.1);

    // ${media.greaterThan("medium")`
    //     display: none;
    // `}
`

const NavContainer = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    width: 90%;
`

const NavLinkContainer = styled.div `
    display: flex;
    flex: 3 1 0%;
    align-items: center;
    height: 100%;
    justify-content: space-between;    
`

const NavLink = styled(Link) `
    display: flex;
    flex-direction: column;
    color: #BEBEC3;
    font-size: 2.4rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 2.4rem;
    padding-top: 0.8rem;
    letter-spacing: 0.04rem;
    // margin-right: 8.5rem;

    &:last-child {
        margin-right: 0;
    }

    ${media.lessThan("huge")`
        // font-size: 1.8rem;
    `}

    ${media.lessThan("large")`
        font-size: 1.25rem;
        // margin-right: 2rem;
    `}
`

const NavLinkIcon = styled.div `
    margin: 0 auto;
    text-align: center;
    margin-bottom: 0.4rem;
    max-height: 2.2rem;
    max-width: 2.2rem;
`

const NavMobile = () => (
    <NavWrapperMobile>
        <NavContainer>
            <NavLinkContainer>
                <NavLink to="/schedule/" activeStyle={{ color: "#64D2C8" }}>
                <NavLinkIcon><Today /> </NavLinkIcon>
                    Schedule
                </NavLink>
                <NavLink to="/travel/" activeStyle={{ color: "#64D2C8" }}>
                    <NavLinkIcon><AirplanemodeActive /> </NavLinkIcon>
                    Travel
                </NavLink>
                <NavLink to="/faq/" activeStyle={{ color: "#64D2C8" }}>
                    <NavLinkIcon><QuestionAnswer /> </NavLinkIcon>
                    FAQ
                </NavLink>
                <NavLink to="/registry/" activeStyle={{ color: "#64D2C8" }}>
                    <NavLinkIcon><CardGiftcard /> </NavLinkIcon>
                    Registry
                </NavLink>
                <NavLink to="/rsvp/" activeStyle={{ color: "#64D2C8" }}>
                    <NavLinkIcon><Favorite /> </NavLinkIcon>
                    RSVP
                </NavLink>
            </NavLinkContainer>
        </NavContainer>
    </NavWrapperMobile>
)

export default NavMobile