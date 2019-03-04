import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';

// Typography

const HeadingOne = styled.h1 `
    font-size: 5rem;
    color: #3C4650;
    font-weight: 100;
    display: flex;
    text-align: center;
    margin: 0 auto;

    ${media.lessThan("huge")`
    font-size: 4rem;
    `}

    ${media.lessThan("large")`
    font-size: 2.5rem;
    `}
`

const HeadingOneLight = styled.h1 `
    font-size: 5rem;
    color: #FFF;
    font-weight: 100;
    display: flex;
    text-align: center;

    ${media.lessThan("huge")`
    font-size: 4rem;
    `}

    ${media.lessThan("large")`
    font-size: 2.5rem;
    `}
`

const LocationTitle = styled.h2 `
    font-size: 2rem;
    color: #FFF;
    font-weight: 100;
    display: flex;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);
`

// Typography End

const Container = styled.div `
    display: flex;
    flex: 1 1 100%;
    margin: 0 auto;
    width: 90%;
    flex-direction: column;
`

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
    min-height: 100vh;
`

const SectionBreakGreen = styled.div `
    background: #3CAAA0;
    height: 25vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5rem;

    &:first-of-type {
        margin-top: 5.5rem;
    }
`

const SectionBreakContent = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
`

const SectionBreakImgContainer = styled.div `
    display: flex;
    flex 1 1 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
`

const SectionBreakImg = styled(Img) `
    width: 4.5rem;
    margin-bottom: 0;
`

const SectionBreakBackgroundImg = styled(Img) `
    width: 4.5rem;
`

const SectionContent = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
`

const SectionImgContainer = styled.div `
    display: flex;
    flex 1 1 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 5rem;
`

const SectionImg100 = styled(Img) `
    width: 900vw;
    max-width: 90vw;
    margin-bottom: 0;
`

const Paragraph = styled.p `
    font-size: 1.5rem;
    color: #144164;
    font-family: GillSansMTPro;
    font-weight: 100;
    margin: 0 auto;
    margin-top: 2.5rem;
`

const Bold = styled.span `
    font-weight: 400;
`

const Divider = styled.div `
    flex 1 1 100%;
    width: 50vw;
    margin: 5rem auto;
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
    min-width: 45vw;
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

const CarouselStyled = styled (Carousel) `
    padding-left: 5vw;
    margin-top: 2.5rem;
    overflow-x: hidden;
    z-index: 10;
`

const Slide = styled.div `
    height: 20vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 1.5rem 0;
    margin-right: 0;
`
const SlideImg = styled(Img) `
    min-height: 20vh;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
`


export default () => (
    
    <StaticQuery
      query={graphql`
        query BigDayQuery {

            taxiImg: file(relativePath: { eq: "illustrations/taxi.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            busStopsImg: file(relativePath: { eq: "illustrations/busStops.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            champagneImg: file(relativePath: { eq: "illustrations/champagne.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            KilmoreImg: file(relativePath: { eq: "places/Kilmore.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            MarineHotelImg: file(relativePath: { eq: "places/MarineHotel.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            TitanicHotelImg: file(relativePath: { eq: "places/TitanicHotel.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
      `}

        render={data => (
            <SectionLight>
                <SectionBreakGreen>
                        <SectionBreakContent>
                            <SectionBreakBackgroundImg style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: -1,
                            }}
                            fluid={data.champagneImg.childImageSharp.fluid} />
                            <HeadingOneLight>Wedding Night</HeadingOneLight>
                        </SectionBreakContent>
                </SectionBreakGreen>
            
                <Container>
                    <SectionContent>
                        <Paragraph>
                            Some information in here about the availability of hotels and B&amp;Bs near the venue, mention Kilmore, hotels airbnb etc here if they want to stay outside of basecamp for that night.
                            <br />
                            <br />
                            <Bold>We recommend staying in these discounted locations</Bold>
                        </Paragraph>
                    </SectionContent>
                </Container>

                <CarouselStyled slidesToShow={1.5} cellSpacing={25} slidesToScroll={0.5} edgeEasing="easeQuadInOut" edgeEasing="easeQuadInOut" renderBottomCenterControls={false} renderCenterLeftControls={null} renderCenterRightControls={null} wrapAround={true}>
                    <Url href="http://bit.ly/2Tm0og4">
                        <Slide>
                            <SlideImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: -1,
                            }}
                            fluid={data.KilmoreImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Kilmore House</LocationTitle>
                                    <ButtonSmall>Book for £35</ButtonSmall>
                            </SlideContainer>
                        </Slide>
                    </Url>
                    <Url href="http://bit.ly/2SEXj6q">
                        <Slide>
                            <SlideImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: -1,
                            }}
                            fluid={data.MarineHotelImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Marine Hotel</LocationTitle>
                                    <ButtonSmall>Book for £130</ButtonSmall>
                            </SlideContainer>
                        </Slide>
                    </Url>
                    <Url href="http://bit.ly/2Uhjj91">
                        <Slide>
                            <SlideImg 
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: -1,
                            }}
                            fluid={data.TitanicHotelImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Titanic Belfast</LocationTitle>
                                    <ButtonSmall>Book for £120</ButtonSmall>
                            </SlideContainer>
                        </Slide>
                    </Url>
                </CarouselStyled>

                
                
                <SectionBreakGreen>
                    <SectionBreakContent>
                            <SectionBreakImgContainer>
                                <SectionBreakImg fluid={data.taxiImg.childImageSharp.fluid} />
                            </SectionBreakImgContainer>
                            <HeadingOneLight>Getting Home</HeadingOneLight>
                    </SectionBreakContent>
                </SectionBreakGreen>

                <Container>
                    <SectionContent>
                        <SectionImgContainer>
                            <SectionImg100 fluid={data.busStopsImg.childImageSharp.fluid} />
                        </SectionImgContainer>
                        <Paragraph>
                            Some information in here about the availability of taxis and buses on the night of the wedding, here 
                            we should mention that the bus will stop at 3 locations.
                        </Paragraph>
                    </SectionContent>
                </Container>
            </SectionLight>
        )}
      
    />
)

// const GettingHere = (data) => (

//     <SectionLight>
//         <SectionBreakGreen>
//             <SectionBreakContent>
//                 <SectionBreakImgContainer>
//                     <SectionBreakImg fluid={data.passportImg.childImageSharp.fluid}/>
//                 </SectionBreakImgContainer>
//                 <HeadingOneLight>Getting to Northern Ireland</HeadingOneLight>
//             </SectionBreakContent>
//         </SectionBreakGreen>
//     </SectionLight>

// )

// export const query = graphql`
//     query {
//         passportImg: file(relativePath: { eq: "illustrations/Passport.png" }) {
//             childImageSharp {
//                 fluid(maxWidth: 200) {
//                     ...GatsbyImageSharpFluid_tracedSVG
//                 }
//             }
//         }
//     }
// `

// export default GettingHere