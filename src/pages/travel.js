import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import HeaderContainer from '../components/headerContainer'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import { Helmet } from "react-helmet"
import TravelTabs from "../pages/tabs/travelTabs";
// import Layout from "../components/layout"

const HeadingOne = styled.h1 `
    font-size: 5rem;
    color: #3c4650;
    font-weight: 100;
    display: flex;
    margin-bottom: 5rem;
    text-align: center;

    ${media.lessThan("huge")`
    font-size: 4rem;
    `}

    ${media.lessThan("large")`
    font-size: 2.5rem;
    `}
`

const HeadingTwo = styled.h2 `
    font-size: 2.5rem;
    color: #FFF;
    font-family: GillSansMTPro;
    font-weight: 100;
    display: flex;
`

const HeadingTextContainer = styled.div `
    justify-content: center;
    margin-top: 10rem;

    ${media.lessThan("huge")`
        margin-top: 6rem;
    `}

    ${media.lessThan("large")`
        margin-top: 4rem;
    `}
`

const SectionLight = styled.div `
    background: #FFF;
    min-height: 100vh;
`

const SectionBlavy = styled.div `
    background: #3C4650;
    min-height: 100vh;
`

const SectionBlue = styled.div `
    background: #144164;
    min-height: 100vh;
`

const SectionGreen = styled.div `
    background: #3CAAA0;
    min-height: 100vh;
`

const Container = styled.div `
    display: flex;
    flex: 1 1 100%;
    margin: 0 auto;
    max-width: 90%;
    position: relative;
    z-index: 2;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100vh;
    padding-top: 5rem;
    padding-bottom: 5rem;
`

const StoryTextDark = styled.p `
    font-size: 2rem;
    color: #3C4650;
    font-family: Didot;
    font-style: italic;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5;
`

const StoryTextLight = styled.p `
    font-size: 2rem;
    color: #FFF;
    font-family: Didot;
    font-style: italic;
    font-weight: 100;
    margin: 0 auto;
    text-align: center;
`

const ImageContainer = styled.div `
    display: flex;
    margin: 0 auto;
    position: relative;
    flex-direction: column;
`

const Image = styled("img") `
    margin-bottom: 0;
`

const ImgContainer = styled.div `
    display: flex;
    flex: 0 0 100%;
    height: 25rem;
    position: relative;
`

const ImgContainerHeight = styled.div `
    display: flex;
    position: relative;
`

const StoryImg = styled(Img) `
    margin-bottom: 0;
    width: 50rem;
`

const StoryImgHeight = styled(Img) `
    margin-bottom: 0;
    margin: 0 auto;
    width: 24rem;
`



const TravelPage = () => (

    <div>
        <Helmet >
            <meta charSet="utf-8" />
            <title>Buddeen - 4th July 2019</title>
            <link rel="canonical" href="https://buddeen.com" />
        </Helmet>
        <FontFace />
        <TravelTabs />
        <NavMobile />
    </div>

)

export default TravelPage