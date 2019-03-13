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
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-136167902-1');
    ReactGA.pageview('/registry');
}

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

const SectionBreakImgXL = styled(Img) `
    width: 7.5rem;
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

const SectionImgContainerNoPad = styled.div `
    display: flex;
    flex 1 1 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 0rem;
    overflow: hidden;
    position: relative;
`

const SectionImg = styled(Img) `
    width: 17.5rem;
`

const SectionImgXS = styled(Img) `
    width: 7.5rem;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Url = styled.a `
    flex: 0 0 90%;
    text-decoration: none;
    width: 100%;
    color: #FFF;
    display: flex;
    margin: 0 auto;
`

const Bullet = styled.li `
    padding-top: 1rem;
`

const LogoContainer = styled.div `
    flex 0 0 55%;
    justify-content: flex-end;
`

const MacysLogo = styled(Img) `
    width: 100%;
`

const ButtonText = styled.div `
    flex 0 0 40%;
    justify-content: flex-start;
`

const ButtonContent = styled.div `
    flex 0 0 100%;
    margin: 0 auto;
    justify-content: space-between;
`


export default () => (
    
    <StaticQuery
      query={graphql`
        query registryQuery {

            presentImg: file(relativePath: { eq: "illustrations/presentPop.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            macysImg: file(relativePath: { eq: "macysLogo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            palmImg: file(relativePath: { eq: "illustrations/palm.png" }) {
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
                                        <SectionBreakImgXL fluid={data.presentImg.childImageSharp.fluid} />
                                    </SectionBreakImgContainer>
                                    <HeadingOneLight>Gift Registry</HeadingOneLight>
                            </SectionBreakContent>
                    </SectionBreakBlue>
                
                    <Container>
                        <SectionContent>
                            <Paragraph>
                                As with any wedding, we've set up a registry to give people an idea of what we'll be buying for ourselves!
                                <br /><br />
                                We don't expect anyone to buy us anything - your presence is enough! However if you do feel the need to get us a gift, we have a registry set up at Macy’s.
                            </Paragraph>
                            <Button>
                                <ButtonContent>
                                    <Url href="https://mcys.co/2Tx5h6E">
                                    <ButtonText>Buy at</ButtonText>
                                        <LogoContainer>
                                            <MacysLogo fluid={data.macysImg.childImageSharp.fluid} />
                                        </LogoContainer>
                                    </Url>
                                </ButtonContent>
                            </Button>
                        </SectionContent>
                    </Container>

                    <Divider />

                    <Container>
                        <SectionContent>
                            <SectionImgContainerNoPad>
                                <SectionImgXS fluid={data.palmImg.childImageSharp.fluid} />
                            </SectionImgContainerNoPad>
                            <Paragraph>
                                We don’t plan on going on honeymoon this year but we are planning to do so in 2020. 
                                If you feel that you need to gift us something we would appreciate any contribution to that fund, no matter how small.
                                <br /><br />
                                More information on how to donate will be added here soon.
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