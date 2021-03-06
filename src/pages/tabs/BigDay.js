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
    position: relative;
    
    ${media.greaterThan("medium")`
        max-width: 50%;
    `}
`

const ContainerMargin = styled.div `
    display: flex;
    flex: 1 1 100%;
    margin: 0 auto;
    width: 90%;
    flex-direction: column;
    position: relative;
    margin-top: 2.5rem;
    
    ${media.greaterThan("medium")`
        max-width: 50%;
    `}
`

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

const SectionImgContainer = styled.div `
    margin: 1rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-right: 0;
`


const SectionImg100 = styled(Img) `
    min-height: 4rem;
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

const CarouselStyled = styled (Carousel) `
    padding-left: 5vw;
    margin-top: 2.5rem;
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
`
const SlideImg = styled(Img) `
    min-height: 17.5vh;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
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

            busRouteImg: file(relativePath: { eq: "BusRoute.png" }) {
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
                            {/* <SectionBreakBackgroundImg style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                zIndex: -1,
                            }}
                            fluid={data.champagneImg.childImageSharp.fluid} /> */}
                            <HeadingOneLight>Wedding Night</HeadingOneLight>
                        </SectionBreakContent>
                </SectionBreakGreen>
            
                <Container>
                    <SectionContent>
                        <Paragraph>
                            Kilmore House is our wedding venue and hosts up to 35 guests for the wedding night. Room availability is limited so please book ahead as early as possible.
                            <br />
                            <br />
                            We also recommend one the Titanic Hotel, Belfast if people want to stay in the city.
                        </Paragraph>
                    </SectionContent>
                </Container>

                <CarouselStyled slidesToShow={1.5} cellSpacing={25} slidesToScroll={0.5} renderBottomCenterControls={null} renderCenterLeftControls={null} renderCenterRightControls={null} wrapAround={true}>
                    <Url href="mailto:slseyal11@gmail.com">
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
                    <Url href="https://www.titanichotelbelfast.com/luxury-rooms-belfast/standard-room/53-9/">
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
                                    <ButtonSmall>Book for £130</ButtonSmall>
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

                <ContainerMargin>
                    <SectionContent>
                        <SectionImgContainer>
                            <SectionImg100 
                            fluid={data.busRouteImg.childImageSharp.fluid} />
                        </SectionImgContainer>
                        <Paragraph>
                            At the end of the night, there will be a bus for our fine guests, stopping off at the two hotels (Marine Hotel and Titanic hotel) as well as a stop in Glengormley.
                            <br /><br />
                            If you are staying nearby or don't want to get the bus, we recommend using the following taxi firm and booking ahead.
                        </Paragraph>
                        <Button><Url href="tel:+442890365365">Call 365 Taxis</Url></Button>
                    </SectionContent>
                </ContainerMargin>
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