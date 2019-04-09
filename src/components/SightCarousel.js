import React from 'react';
import { render } from 'react-dom'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';
import Icon from '@material-ui/core/Icon';
import Place from '@material-ui/icons/Place';
// Typography

const LocationTitle = styled.h2 `
    font-size: 1.7rem;
    color: #FFF;
    font-weight: 400;
    display: flex;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);

    ${media.greaterThan("medium")`
        font-size: 3.5rem;
    `}
`

// Typography End

// const Container = styled.div `
//     display: flex;
//     flex: 1 1 100%;
//     margin: 0 auto;
//     max-width: 90%;
//     position: relative;
//     z-index: 2;
//     flex-direction: column;
//     justify-content: space-evenly;
//     min-height: 100vh;
//     padding-top: 5rem;
//     padding-bottom: 5rem;

//     ${media.greaterThan("medium")`
//         max-width: 50%;
//     `}
// `

const SlideContainer = styled.div `
    display: flex;
    flex: 1 1 100%;
    margin: 0 auto;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
`

const SectionLight = styled.div `
    background: #FFF;
    min-height: 80vh;
`

// const SectionImgContainer = styled.div `
//     display: flex;
//     flex 1 1 100%;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;
//     margin-bottom: 1rem;
//     margin-top: 5rem;
//     overflow: hidden;
//     position: relative;
// `

// const SectionImg = styled(Img) `
//     width: 17.5rem;
// `


const Bold = styled.span `
    font-weight: 400;
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
    max-width: 50%;

    ${media.greaterThan("medium")`
        max-width: 25%;
    `}
`

const CarouselStyled = styled (Carousel) `
    padding-left: 5vw;
    margin-top: 0.5rem;
    overflow-x: hidden;
    z-index: 10;
`

const Slide = styled.div `
    height: 17.5vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1.5rem 0;
    margin-right: 0;

    ${media.greaterThan("medium")`
        height: 25vh;
        padding: 2.5rem;
    `}
`
const SlideImg = styled(Img) `
    min-height: 17.5vh;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
`


export default ({navigateToTab}) => (
    
    <StaticQuery
      query={graphql`
        query SightCarouselQuery {

            GiantsImg: file(relativePath: { eq: "places/sights/GiantsCauseway.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            DarkHedgesImg: file(relativePath: { eq: "places/sights/DarkHedges.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            RopeBridgeImg: file(relativePath: { eq: "places/sights/RopeBridge.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            GobbinsImg: file(relativePath: { eq: "places/sights/Gobbins.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            TorrHeadImg: file(relativePath: { eq: "places/sights/TorrHead.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BallintoyImg: file(relativePath: { eq: "places/sights/Ballintoy.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BushmillsImg: file(relativePath: { eq: "places/sights/Bushmills.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            DunluceImg: file(relativePath: { eq: "places/sights/Dunluce.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CarrickImg: file(relativePath: { eq: "places/sights/Carrick.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CavehillImg: file(relativePath: { eq: "places/sights/Cavehill.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            TitanicMuseumImg: file(relativePath: { eq: "places/sights/TitanicMuseum.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BusTourImg: file(relativePath: { eq: "places/sights/BusTour.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BelfastBarsImg: file(relativePath: { eq: "places/sights/DukeOfYork.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            GuinessImg: file(relativePath: { eq: "places/sights/Guiness.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            JamesonImg: file(relativePath: { eq: "places/sights/Jameson.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            TrinityImg: file(relativePath: { eq: "places/sights/Trinity.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            MoherImg: file(relativePath: { eq: "places/sights/CliffsMoher.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CastleLeslieImg: file(relativePath: { eq: "places/sights/CastleLeslie.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            SlieveLeagueImg: file(relativePath: { eq: "places/sights/SlieveLeague.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            WildImg: file(relativePath: { eq: "places/sights/WildAtlantic.jpg" }) {
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
                    <CarouselStyled slidesToShow={1.5} cellSpacing={25} slidesToScroll={0.5} renderBottomCenterControls={null} renderCenterLeftControls={null} renderCenterRightControls={null} wrapAround={true} edge="linear">
                        <Url onClick={e => navigateToTab(e, 'GiantsCauseway')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.GiantsImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Giants Causeway</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'DarkHedges')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.DarkHedgesImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Dark Hedges</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'RopeBridge')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.RopeBridgeImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Carrick-a-Rede</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Gobbins')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.GobbinsImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>The Gobbins</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'TorrHead')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.TorrHeadImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Torr Head</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Ballintoy')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.BallintoyImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Ballintoy Harbour</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Bushmills')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.BushmillsImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Bushmills Distillery</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Dunluce')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.DunluceImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Dunluce Castle</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Carrick')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.CarrickImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Carrickfergus Castle</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Cavehill')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.CavehillImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Cavehill</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'TitanicMuseum')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.TitanicMuseumImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Titanic Museum</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'BusTour')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.BusTourImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Belfast Bus Tour</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'BelfastBars')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.BelfastBarsImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Belfast Bars</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Guiness')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.GuinessImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Guiness Storehouse</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Jameson')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.JamesonImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Jameson Distillery</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Trinity')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.TrinityImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Trinity College</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'Moher')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.MoherImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Cliffs of Moher</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'CastleLeslie')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.CastleLeslieImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Castle Leslie</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'SlieveLeague')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.SlieveLeagueImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Slieve League</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                        <Url onClick={e => navigateToTab(e, 'WildAtlantic')}>
                            <Slide>
                                <SlideImg 
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    zIndex: -1,
                                }}
                                fluid={data.WildImg.childImageSharp.fluid} />
                                <SlideContainer>
                                        <LocationTitle>Wild Atlantic Way</LocationTitle>
                                        <ButtonSmall>View</ButtonSmall>
                                </SlideContainer>
                            </Slide>
                        </Url>
                    </CarouselStyled>
                </div>
        )}
      
    />
)