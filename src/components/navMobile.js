import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import media from "styled-media-query";
import Img from 'gatsby-image'

const NavWrapperMobile = styled.div `
    background: #FFF;
    height: 8.5vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 500;

    ${media.greaterThan("medium")`
        display: none;
    `}
`

const NavContainer = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    width: 90%;
`

const NavLinkContainer = styled.div `
    display: flex;
    flex: 3 1 0%;
    align-items: center;
    height: 100%;
    justify-content: space-between;    
`

const NavLink = styled(Link) `
    color: #144164;
    font-size: 2.4rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 2.4rem;
    padding-top: 0.8rem;
    letter-spacing: 0.04rem;
    // margin-right: 8.5rem;

    &:last-child {
        margin-right: 0;
    }

    ${media.lessThan("huge")`
        // font-size: 2rem;
    `}

    ${media.lessThan("large")`
        font-size: 1.35rem;
        // margin-right: 2rem;
    `}
`

const NavLinkIcon = styled(Img) `
    margin: 0 auto;
    text-align: center;
    margin-bottom: 0.75rem;
    max-height: 2.2rem;
    max-width: 2.2rem;
`

export default () => (
    <StaticQuery
        query={graphql`
            query IconQuery {

                calIcon: file(relativePath: { eq: "icons/cal.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
        
                planeIcon: file(relativePath: { eq: "icons/plane.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
        
                faqIcon: file(relativePath: { eq: "icons/faq.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
        
                giftIcon: file(relativePath: { eq: "icons/gift.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
        
                rsvpIcon: file(relativePath: { eq: "icons/rsvp.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}

      render={data => (
         <NavWrapperMobile>
            <NavContainer>
                <NavLinkContainer>
                    <NavLink to="/another-page/">
                        <NavLinkIcon fluid={data.calIcon.childImageSharp.fluid} />
                        Schedule
                    </NavLink>
                    <NavLink to="/another-page/">
                        <NavLinkIcon fluid={data.planeIcon.childImageSharp.fluid} />
                        Travel
                    </NavLink>
                    <NavLink to="/another-page/">
                        <NavLinkIcon fluid={data.faqIcon.childImageSharp.fluid} />
                        FAQ
                    </NavLink>
                    <NavLink to="/another-page/">
                        <NavLinkIcon fluid={data.giftIcon.childImageSharp.fluid} />
                        Registry
                    </NavLink>
                    <NavLink to="/another-page/">
                        <NavLinkIcon fluid={data.rsvpIcon.childImageSharp.fluid} />
                        RSVP
                    </NavLink>
                </NavLinkContainer>
                </NavContainer>
        </NavWrapperMobile>
      )}
    />
)