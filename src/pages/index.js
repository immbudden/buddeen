import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { css } from "@emotion/core"
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image'
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import HeaderWrapper from '../components/headerWrapper'
import HeaderContainer from '../components/headerContainer'
import media from "styled-media-query";
import { Helmet } from "react-helmet"
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

const Section = styled.div `
    background: #FFF;
`

const Container = styled.div `
    display: flex;
    flex: 12 1 0%;
    margin: 0 auto;
    max-width: 90%;
    position: relative;
    z-index: 2;
`

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
            <link rel="canonical" href="http://buddeen.com" />
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
    </div>

)

export const query = graphql`
        query {
            homeHeroImg: file(relativePath: { eq: "Buddeen.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
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


        }
        `

export default IndexPage