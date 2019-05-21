import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { css } from "@emotion/core"
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import HeaderContainer from '../components/headerContainer'
import NavMobile from '../components/navMobile'
import media from "styled-media-query";
import { Helmet } from "react-helmet"
import Hi from '../images/hi2.gif'
import Engagement from '../images/engagement.gif'

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

    ${media.greaterThan("medium")`
        max-width: 50%;
    `}
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
    width: 100%;
`

const ImageHeight = styled("img") `
    margin-bottom: 0;
    height: 100%;
`

const ImgContainer = styled.div `
    display: flex;
    flex: 0 1 100%;
    height: 25rem;
    position: relative;
    margin: 0 auto;
    max-width: 100%;
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


// OLD CODE

const SectionTitle = styled.h2 `
    font-size: 5.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
`

const SectionIntro = styled.p `
    font-size: 2.5rem;
    color: #FFF;
    font-family: GillSansMTPro;
    font-weight: 100;
    justify-content: flex-center;
`

const LogoContainer = styled.div `
    margin: 0 auto;
    max-width: 12rem;
    margin-bottom: 3rem;

    ${media.lessThan("large")`
        max-width: 7.5rem;
    `}
`

const ServiceIcon = styled.div `
    max-height: 20rem;
`

const ServiceTitle = styled.h3 `
    font-size: 3.5rem;
    color: #004655;
    font-family: Didot;
    font-weight: 100;
    margin: 0 auto;
    margin-bottom: 7.5rem;
`




const IndexPage = (props) => (

    <div>
        <Helmet >
            <meta charSet="utf-8" />
            <title>Buddeen - 4th July 2019</title>
            <link rel="canonical" href="https://buddeen.com" />
        </Helmet>
        <FontFace />
        <HeaderWrapper>
            <Img style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: '100%',
                zIndex: -1,
            }}
                fluid={props.data.homeHeroImg.childImageSharp.fluid} />
            <HeaderContainer>
                <HeadingTextContainer>
                <LogoContainer>
                        <Img style={{
                            maxHeight: '200px',
                            display: 'block',
                            margin: '0 auto',
                        }}
                            fluid={props.data.logo.childImageSharp.fluid} />
                    </LogoContainer>
                    <HeadingOne>Kilmore House, Ballymena, Northern Ireland</HeadingOne>
                </HeadingTextContainer>
            </HeaderContainer>
        </HeaderWrapper>
        <SectionLight>
            <Container>
                <StoryTextDark>
                    Once upon a time a Belfast boy was Portland bound and went in search of some local knowledge for his trip, when a beautiful Dr caught his eye.
                </StoryTextDark>
                <ImageContainer>
                        <Image src={Hi} alt="Hello" />
                </ImageContainer>
                <StoryTextDark>
                    Through the power of the internet and a mutual love of GIFs, the two swiped right and knew they had to meet.
                </StoryTextDark>
            </Container>
        </SectionLight>
        <SectionBlavy>
            <Container>
                <StoryTextLight>
                    Two weeks later the young Dr landed in Ireland, and armed with her local tour guide, she was shown the sights and sounds of the beautiful island. 
                </StoryTextLight>
                <ImgContainer>
                        <StoryImg fluid={props.data.RopeBridge.childImageSharp.fluid} />
                </ImgContainer>
                <StoryTextLight>
                    The following week the Dr returned the favour and the Belfast boy fell in love with the weird city of Portland and the people… particularly one of the natives
                </StoryTextLight>
            </Container>
        </SectionBlavy>
        <SectionGreen>
            <Container>
                <StoryTextLight>
                    The two knew this was something special, so the Dr returned to Belfast that summer, they declared their love for one another, and Buddeen was born.
                </StoryTextLight>
                <ImgContainerHeight>
                        <StoryImgHeight fluid={props.data.smileHeart.childImageSharp.fluid} />
                </ImgContainerHeight>
                <StoryTextLight>
                    Being 4000 miles apart from each other could prove difficult for most couples but not these two. With numerous trips between Belfast and Portland, the two continued to grow together.
                </StoryTextLight>
            </Container>
        </SectionGreen>
        <SectionBlue>
            <Container>
                <StoryTextLight>
                    He knew this girl was the girl for him, so in July 2018, Michael planned a romantic trip around Lough Erne. 
                </StoryTextLight>
                <ImgContainer>
                    <ImageHeight src={Engagement} alt="Engagement" />
                </ImgContainer>
                <StoryTextLight>
                    On White Island, Michael distracted Shereen with the faces of St. Patrick. When she turned around, he was on one knee. She said yes and the rest is history...
                </StoryTextLight>
            </Container>
        </SectionBlue>
        <NavMobile />
    </div>

)

export const query = graphql`
        query {
            homeHeroImg: file(relativePath: { eq: "Buddeen.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1500, quality: 65) {
                        ...GatsbyImageSharpFluid
                        }
                }
            }

        logo: file(relativePath: { eq: "BuddeenLogo.png" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        RopeBridge: file(relativePath: { eq: "RopeBridge_Edit.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 60, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        smileHeart: file(relativePath: { eq: "smileHeart-2.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 60, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage