import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';
import Icon from '@material-ui/core/Icon';
import Place from '@material-ui/icons/Place';
// Typography

const HeadingOne = styled.h1 `
    font-size: 5rem;
    color: #144164;
    font-weight: 400;
    display: flex;
    text-align: center;
    margin: 0 auto;
    flex: 1 1 70%;

    ${media.lessThan("huge")`
    font-size: 4rem;
    `}

    ${media.lessThan("large")`
    font-size: 2.2rem;
    margin: 0;
    `}
`

const Paragraph = styled.p `
    font-size: 1.5rem;
    color: #144164;
    font-family: GillSansMTPro;
    font-weight: 100;
    margin: 0 auto;
    margin-top: 2.5rem;
`

// Typography End

const Container = styled.div `
    display: flex;
    flex: 1 1 100%;
    margin: 0 auto;
    width: 90%;
    flex-direction: column;
    position: relative;
    
    ${media.greaterThan("medium")`
        max-width: 50%;
    `}
`

const SectionContent = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
`

const ParagraphNoTop = styled.p `
    font-size: 1.5rem;
    color: #144164;
    font-family: GillSansMTPro;
    font-weight: 100;
    margin-top: 0.5rem;
`

const Bold = styled.span `
    font-weight: 400;
`

const DividerSmall = styled.div `
    flex 1 1 100%;
    width: 100%;
    margin: 2.5rem auto;
    border 1px solid #FFF;
    box-shadow: 0px 3px 6px 0px rgba(20,65,100,0.1);
`

const Button = styled.button `
    background: #64D2C3;
    color: #FFF;
    font-size: 1.5rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    border-radius: 0.4rem;
    margin: 0 auto;
    width: 45vw;
    max-width: 20rem;
    margin-top: 2.5rem;
`

const ButtonSmall = styled.button `
    background: #64D2C3;
    color: #FFF;
    font-size: 1.25rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    border-radius: 0.4rem;
    margin-top: 2.5rem;
    max-width: 30vw;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
`

const BannerContainer = styled.div `
    height: 25vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5.5rem;
    overflow: hidden;

    ${media.greaterThan("medium")`
        height: 35vh;
    `}
`

const BannerImg = styled(Img) `
    min-height: 25vh;
`

const TitleContainer = styled.div `
    display: flex;
    flex: 0 0 100%;
    flex-direction: row;
    justify-content: flex-between;
    align-items: center;
    margin-top: 2.5rem
`

const Area = styled.p `
    font-size: 1.5rem;
    color: #144164;
    font-family: GillSansMTPro;
    font-weight: 400;
    flex: 1 1 30%;
    margin-bottom: 0;
    text-align: right;
`

const StyledIcon = styled(Icon) `
    color: #E62645;
`

const StyledLink = styled(Link) `
    color: #3CAAA0;
    font-weight: 500;
`


export default () => (
    
    <StaticQuery
      query={graphql`
        query RopeBridgeQuery {

            RopeBridgeImg: file(relativePath: { eq: "places/sights/RopeBridge.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
      `}

        render={data => (
            <div>
                <BannerContainer>
                        <BannerImg fluid={data.RopeBridgeImg.childImageSharp.fluid} />
                </BannerContainer>
            
                <Container>
                    <SectionContent>
                        <TitleContainer>
                            <HeadingOne>Carrick-a-Rede</HeadingOne>
                            <Area><StyledIcon><Place /></StyledIcon>North Coast</Area>
                        </TitleContainer>
                        <Paragraph>
                            Suspended 100ft above the sea, the rope bridge was erected by salmon fisherman 350 years ago. The only structure on the tiny island is a fisherman’s cottage.  Tickets are £7 but as it's busy so book ahead at <StyledLink href="carrickaredetickets.com">carrickaredetickets.com</StyledLink>!
                        </Paragraph>
                        <DividerSmall />
                        <ParagraphNoTop>
                            <Bold>Browse more sights…</Bold>
                        </ParagraphNoTop>
                    </SectionContent>
                </Container>
            </div>
        )}
      
    />
)   