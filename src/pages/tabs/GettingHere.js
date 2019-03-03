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
    overflow: hidden;
    position: relative;
`

const SectionImg = styled(Img) `
    width: 17.5rem;
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

const CarouselStyled = styled (Carousel) `
    padding-left: 5vw;
    margin-top: 2.5rem;
`

const Slide = styled.div `
    height: 20vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
        query GettingHereQuery {

            passportImg: file(relativePath: { eq: "illustrations/Passport.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            flightImg: file(relativePath: { eq: "illustrations/flight.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            busImg: file(relativePath: { eq: "illustrations/bus.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            carImg: file(relativePath: { eq: "illustrations/car.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            baseCampImg: file(relativePath: { eq: "illustrations/baseCamp.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BelfastImg: file(relativePath: { eq: "Belfast.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CaveHillImg: file(relativePath: { eq: "places/Cavehill.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CarrickImg: file(relativePath: { eq: "places/Carrick.jpg" }) {
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
                                <SectionBreakImgContainer>
                                    <SectionBreakImg fluid={data.passportImg.childImageSharp.fluid} />
                                </SectionBreakImgContainer>
                                <HeadingOneLight>Getting to Northern Ireland</HeadingOneLight>
                        </SectionBreakContent>
                </SectionBreakGreen>
            
                <Container>
                    <SectionContent>
                        <SectionImgContainer>
                            <SectionImg fluid={data.flightImg.childImageSharp.fluid} />
                        </SectionImgContainer>
                        <Paragraph>If you are travelling from the USA we advise that you fly into Dublin rather than Belfast - this will save you around £300!</Paragraph>
                        
                        <Divider />

                        <HeadingOne>The Bus</HeadingOne>
                        <SectionImgContainer>
                            <SectionImg fluid={data.busImg.childImageSharp.fluid} />
                        </SectionImgContainer>
                        <Paragraph>If you don't plan on driving, the easiest way to get to Belfast would be to book a return Bus with Translink - this will drop you directly into Belfast city center and only costs £17 for the return if you book it online.</Paragraph>
                        <Button>Book a Bus</Button>

                        <Divider />

                        <HeadingOne>Car Rental</HeadingOne>
                        <SectionImgContainer>
                            <SectionImg fluid={data.carImg.childImageSharp.fluid} />
                        </SectionImgContainer>
                        <Paragraph>The easiest way to explore our beautiful Island would be to rent a car. We advise booking with Sixt at Dublin Airport, where you can get a car from as little as $10 a day (VW Polo). <br /><br />If you use the code XXX at the checkout, we have arranged a special 15% discount.</Paragraph>
                        <Button>Book a Car</Button>
                    </SectionContent>
                </Container>
                
                <SectionBreakGreen>
                    <SectionBreakContent>
                            <SectionBreakImgContainer>
                                <SectionBreakImg fluid={data.baseCampImg.childImageSharp.fluid} />
                            </SectionBreakImgContainer>
                            <HeadingOneLight>Setup Basecamp</HeadingOneLight>
                    </SectionBreakContent>
                </SectionBreakGreen>

                <Container>
                    <SectionContent>
                        <Paragraph>
                            Some information in here about the availability of hotels and B&amp;Bs, we recommend setting a base in and around Belfast 
                            so that you can easily explore the city and the rest of the island.
                            <br />
                            <br />
                            <Bold>We recommend staying in these locations</Bold>
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
                            fluid={data.BelfastImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Belfast</LocationTitle>
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
                            fluid={data.CaveHillImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Newtownabbey</LocationTitle>
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
                            fluid={data.CarrickImg.childImageSharp.fluid} />
                            <SlideContainer>
                                    <LocationTitle>Carrickfergus</LocationTitle>
                            </SlideContainer>
                        </Slide>
                    </Url>
                </CarouselStyled>
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