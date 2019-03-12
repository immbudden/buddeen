import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import FontFace from '../utils/font-face'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet"
import NavMobile from '../components/navMobile'

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

    ${media.greaterThan("medium")`
        max-width: 50%;
    `}
    
`

const SectionLight = styled.div `
    background: #FFF;
    min-height: 100vh;
    padding-bottom: 10rem;
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

const SectionBreakBlue = styled.div `
    background: #144164;
    height: 25vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5rem;

    &:first-of-type {
        margin-top: 0rem;
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
    width: 45vw;
    max-width: 20rem;
    margin-top: 2.5rem;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
`

const Bullet = styled.li `
    padding-top: 1rem;
`


export default () => (
    
    <StaticQuery
      query={graphql`
        query faqQuery {

            IrelandImg: file(relativePath: { eq: "illustrations/Ireland.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            phoneHandImg: file(relativePath: { eq: "illustrations/phoneHand.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            piggyImg: file(relativePath: { eq: "illustrations/piggy.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            statueImg: file(relativePath: { eq: "illustrations/statue.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

        }
      `}

        render={data => (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Buddeen - 4th July 2019</title>
                    <link rel="canonical" href="https://buddeen.com" />
                </Helmet>
                <FontFace />
                <SectionLight>
                    <SectionBreakBlue>
                            <SectionBreakContent>
                                    <SectionBreakImgContainer>
                                        <SectionBreakImg fluid={data.IrelandImg.childImageSharp.fluid} />
                                    </SectionBreakImgContainer>
                                    <HeadingOneLight>Wait! There are two Irelands?</HeadingOneLight>
                            </SectionBreakContent>
                    </SectionBreakBlue>
                
                    <Container>
                        <SectionContent>
                            <Paragraph>
                                Yes! You will fly to a tiny beautiful island that contains two completely separate “Irelands”.
                                <br /><br />
                                Northern Ireland is made up of 6 counties and the capital city is Belfast. Northern Ireland is part of the United Kingdom - a sovereign state that includes England, Scotland, Wales, and Northern Ireland.
                                <br /><br />
                                The Republic of Ireland is its own country with its own government. The country is made up of 26 counties and it’s capital city is Dublin. 
                            </Paragraph>
                        </SectionContent>
                    </Container>
{/* 
                    <HeadingOne>Car Rental</HeadingOne>
                    <SectionImgContainer>
                        <SectionImg fluid={data.carImg.childImageSharp.fluid} />
                    </SectionImgContainer>
                    <Paragraph>The easiest way to explore our beautiful Island would be to rent a car. We advise booking with Sixt at Dublin Airport, where you can get a car from as little as $10 a day (VW Polo). <br /><br />If you use the code XXX at the checkout, we have arranged a special 15% discount.</Paragraph>
                    <Button>Book a Car</Button> */}

                    <SectionBreakGreen>
                        <SectionBreakContent>
                                <SectionBreakImgContainer>
                                    <SectionBreakImg fluid={data.phoneHandImg.childImageSharp.fluid} />
                                </SectionBreakImgContainer>
                                <HeadingOneLight>What about my electronics?</HeadingOneLight>
                        </SectionBreakContent>
                    </SectionBreakGreen>
                    
                    <Container>
                        <SectionContent>
                            <Paragraph>
                                <ul>
                                    <Bullet>We strongly recommend bringing a converter so you can use your phone/computer charger, straightener/curling iron, blow dryer, etc.</Bullet>
                                </ul>
                                <ul>
                                    <Bullet>Many hotels will however have USB outlets.</Bullet>
                                </ul>
                                <ul>
                                    <Bullet>If you forget to bring a converter you can buy one at Tesco or Argos.</Bullet>
                                </ul> 
                            </Paragraph>
                            <Button><Url href="https://www.argos.co.uk/product/8556295">Reserve at Argos</Url></Button>
                        </SectionContent>
                    </Container>

                    <SectionBreakGreen>
                        <SectionBreakContent>
                                <SectionBreakImgContainer>
                                    <SectionBreakImg fluid={data.piggyImg.childImageSharp.fluid} />
                                </SectionBreakImgContainer>
                                <HeadingOneLight>How do I pay for things?  £ vs €</HeadingOneLight>
                        </SectionBreakContent>
                    </SectionBreakGreen>
                    
                    <Container>
                        <SectionContent>
                            <Paragraph>
                                <ul>
                                    <Bullet>The currency in Northern Ireland is the pound (£), also commonly known as called sterling or quid</Bullet>
                                </ul>
                                <ul>
                                    <Bullet>The currency in the Republic of Ireland is the Euro (€)</Bullet>
                                </ul>
                                <ul>
                                    <Bullet>We recommend getting a travel debit card which will allow you to pay in both currencies</Bullet>
                                </ul> 
                            </Paragraph>
                        </SectionContent>
                    </Container>

                    <SectionBreakBlue>
                        <SectionBreakContent>
                                <SectionBreakImgContainer>
                                    <SectionBreakImg fluid={data.statueImg.childImageSharp.fluid} />
                                </SectionBreakImgContainer>
                                <HeadingOneLight>How do I get back to the USA?</HeadingOneLight>
                        </SectionBreakContent>
                    </SectionBreakBlue>
                    
                    <Container>
                        <SectionContent>
                            <Paragraph>
                                <ul>
                                    <Bullet>
                                        When you fly from Dublin to the United States you will have to go through pre-clearance in the Dublin airport.  This means that you will check in as usual and go through the normal security, then you will follow signs downstairs to USA pre-clearance.
                                        You will then go through security again, USA style (removing shoes, taking out liquids, etc.).
                                        <br /><br />
                                        After you clear security, you will go through customs and finally you will walk to your gate.
                                    </Bullet>
                                </ul>
                                <ul>
                                    <Bullet>We recommend getting to Dublin Airport 30-60 minutes before you normally would if you have to go through pre-clearance.  There is no pre-clearance if you are flying on to another country in the EU. </Bullet>
                                </ul>
                                <ul>
                                    <Bullet>Food and drink choices in pre-clearance are pretty poor,  so make sure you grab something before you head down. Thankfully not all is lost, you can still get a decent pint of Guiness down there!</Bullet>
                                </ul> 
                            </Paragraph>
                        </SectionContent>
                    </Container>

                </SectionLight>
                <NavMobile />
            </div>
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