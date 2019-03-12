import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
// import markerLanyon from "../images/mapPin.png";

// Typography

const HeadingTwo = styled.h2 `
    font-size: 5.5rem;
    color: #3C4650;
    font-weight: 400;
    display: flex;
    text-align: center;
    margin: 0 auto;
`

const HeadingThree = styled.h3 `
    font-size: 2.75rem;
    color: #3C4650;
    font-weight: 400;
    display: flex;
    text-align: center;
    margin: 0 auto;
`

const HeadingFour = styled.p `
    font-size: 1.75rem;
    color: #3C4650;
    font-weight: 400;
    display: flex;
    text-align: center;
    margin: 0 auto;
    line-height: 4.5rem;
`

const SuperScript = styled.sup `
    font-size: 1.55rem;
    padding-top: 2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
`


const EventTitle = styled.h2 `
    font-size: 2rem;
    color: #FFF;
    font-weight: 400;
    display: flex;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);
`

const EventSubTitle = styled.p `
    font-size: 1.25rem;
    color: #FFF;
    font-weight: 400;
    display: flex;
    text-align: left;
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
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
`

const SectionLight = styled.div `
    background: #FFF;
    // min-height: 100vh;
    width: 100vw;
`

const SectionBreakWhite = styled.div `
    background: #FFF;
    height: 25vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5rem;

    &:first-of-type {
        margin-top: 6rem; // Edited
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
    margin-bottom: 2.5rem;
`

const Slide = styled.div `
    height: 17.5vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
    margin-right: 0;
    width: 100%;

    &:first-of-type {
        margin-left: 5vw;
    }
`
const SlideImg = styled(Img) `
    min-height: 17.5vh;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    
`

// Map Styles

const exampleMapStyles = [
    
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c0e4f3"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }

] //Add some style 

const MapWrapper = styled.div `
    height: 62vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const MapContainer = styled.div `
    position: absolute;
    width: 100%;
    z-index: 0;
`

const ButtonLink = styled.a `
    text-decoration: none;
    color: inherit;
`

const FabContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1 1 100%;
    margin: 0 auto;
    margin: 2.5rem;
    margin-bottom: 5rem;
`

const FabLabel = styled.span `
    font-size: 1.35rem;
    margin-top: 0.75rem;
    margin-left: 1rem;
`


const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBYL3QlXrvdys93ouvBz1V5RqzFTpz0WUk",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `62vh` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
  )((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 54.58, lng: -5.90 }}
        defaultOptions={{ 
            styles: exampleMapStyles,
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false,
        }}
      
    >
    {/* <Marker 
        position={{ lat: 54.5869451, lng: -5.93 }} 
        // defaultIcon={'../images/mapPin.png'}
      /> */}
        {props.isMarkerShown && 

            <Marker 
                position={{ lat: 54.5967266, lng: -5.9322709 }} 
                // icon={markerLanyon}
            />
        }
    </GoogleMap>
  );


export default () => (
    
    <StaticQuery
      query={graphql`
        query RehersalDinnerQuery {

            BeerImg: file(relativePath: { eq: "beer.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            CeremonyImg: file(relativePath: { eq: "ceremony.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

            BBQImg: file(relativePath: { eq: "bbq.jpg" }) {
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
                <SectionBreakWhite>
                        <SectionBreakContent>
                            <HeadingTwo>3 <SuperScript>rd</SuperScript></HeadingTwo>
                            <HeadingThree>July</HeadingThree>
                            <HeadingFour>Venue TBC - Belfast</HeadingFour>
                        </SectionBreakContent>
                </SectionBreakWhite>
                <MapWrapper>
                    <MapContainer>
                        <MyMapComponent isMarkerShown />
                    </MapContainer>
                    <FabContainer>
                        {/* <Fab color="secondary" aria-label="Navigate" size="large">
                            <NavigationIcon /> <FabLabel>navigate</FabLabel>
                        </Fab> */}
                        <Url href="http://bit.ly/2J7llHO">
                            <Fab size ="large" variant="extended" color="secondary" aria-label="Navigate">
                                <NavigationIcon />
                                <FabLabel>Get Directions</FabLabel>
                            </Fab>
                        </Url>
                    </FabContainer>
                </MapWrapper>
            </SectionLight>
            
        )}
      
    />
)