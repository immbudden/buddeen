import React, { useState } from 'react';
import { render } from 'react-dom'
import PropTypes from 'prop-types';
import media from "styled-media-query";
import styled from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel';
import SightCarousel from '../../components/SightCarousel'

import Ballintoy from './sights/Ballintoy'
import BelfastBars from './sights/BelfastBars'
import Bushmills from './sights/Bushmills'
import BusTour from './sights/BusTour'
import Carrick from './sights/Carrick'
import CastleLeslie from './sights/CastleLeslie'
import Cavehill from './sights/Cavehill'
import DarkHedges from './sights/DarkHedges'
import Dunluce from './sights/Dunluce'
import GiantsCauseway from './sights/GiantsCauseway'
import Gobbins from './sights/Gobbins'
import Guiness from './sights/Guiness'
import Jameson from './sights/Jameson'
import Moher from './sights/Moher'
import RopeBridge from './sights/RopeBridge'
import SlieveLeague from './sights/SlieveLeague'
import TitanicMuseum from './sights/TitanicMuseum'
import TorrHead from './sights/TorrHead'
import Trinity from './sights/Trinity'
import WildAtlantic from './sights/WildAtlantic'

// Typography

const LocationTitle = styled.h2 `
    font-size: 1.7rem;
    color: #FFF;
    font-weight: 400;
    display: flex;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(34,34,34,0.5);
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
    max-width: 30vw;
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
`
const SlideImg = styled(Img) `
    min-height: 17.5vh;
`

const Url = styled.a `
    text-decoration: none;
    width: 100%;
    color: #FFF;
`

const SightSeeing = (data) => {
    const [activeTab, setActiveTab] = useState('GiantsCauseway')

    function navigateToTab(e, tabName) {
        e.preventDefault()
        setActiveTab(tabName)
    }
    
    return (
            <SectionLight>
                
            {activeTab === 'GiantsCauseway' && (
                <GiantsCauseway/>
            )}
            {activeTab === 'Ballintoy' && (
                <Ballintoy/>
            )}
            {activeTab === 'BelfastBars' && (
                <BelfastBars/>
            )}
            {activeTab === 'Bushmills' && (
                <Bushmills />
            )}
            {activeTab === 'BusTour' && (
                <BusTour />
            )}
            {activeTab === 'Carrick' && (
                <Carrick />
            )}
            {activeTab === 'CastleLeslie' && (
                <CastleLeslie />
            )}
            {activeTab === 'Cavehill' && (
                <Cavehill />
            )}
            {activeTab === 'DarkHedges' && (
                <DarkHedges />
            )}
            {activeTab === 'Dunluce' && (
                <Dunluce />
            )}
            {activeTab === 'Gobbins' && (
                <Gobbins />
            )}
            {activeTab === 'Guiness' && (
                <Guiness />
            )}
            {activeTab === 'Jameson' && (
                <Jameson />
            )}
            {activeTab === 'Moher' && (
                <Moher />
            )}
            {activeTab === 'RopeBridge' && (
                <RopeBridge />
            )}
            {activeTab === 'SlieveLeague' && (
                <SlieveLeague />
            )}
            {activeTab === 'TitanicMuseum' && (
                <TitanicMuseum />
            )}
            {activeTab === 'TorrHead' && (
                <TorrHead />
            )}
            {activeTab === 'Trinity' && (
                <Trinity />
            )}
            {activeTab === 'WildAtlantic' && (
                <WildAtlantic />
            )}
            {/* <Ballintoy/> */}
                {/* <Switch>
                    <Redirect from='/travel' exact to="/GiantsCauseway"/>
                    <Route path='/GiantsCauseway' component={GiantsCauseway}/>
                    <Route path='/Ballintoy' component={Ballintoy}/>
                    <Route path='/BelfastBars' component={BelfastBars}/>
                    <Route path='/Bushmills' component={Bushmills}/>
                    <Route path='/BusTour' component={BusTour}/>
                    <Route path='/Carrick' component={Carrick}/>
                    <Route path='/CastleLeslie' component={CastleLeslie}/>
                    <Route path='/Cavehill' component={Cavehill}/>
                    <Route path='/DarkHedges' component={DarkHedges}/>
                    <Route path='/Dunluce' component={Dunluce}/>
                    <Route path='/GiantsCauseway' component={GiantsCauseway}/>
                    <Route path='/Gobbins' component={Gobbins}/>
                    <Route path='/Guiness' component={Guiness}/>
                    <Route path='/Jameson' component={Jameson}/>
                    <Route path='/Moher' component={Moher}/>
                    <Route path='/RopeBridge' component={RopeBridge}/>
                    <Route path='/SlieveLeague' component={SlieveLeague}/>
                    <Route path='/TitanicMuseum' component={TitanicMuseum}/>
                    <Route path='/TorrHead' component={TorrHead}/>
                    <Route path='/Trinity' component={Trinity}/>
                    <Route path='/WildAtlantic' component={WildAtlantic}/>
                {/* </Switch> */}
                <SightCarousel navigateToTab={navigateToTab} />
            </SectionLight> 
    )
}

export default SightSeeing