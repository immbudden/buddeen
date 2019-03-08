import React from 'react'
import FontFace from '../utils/font-face'
import NavMobile from '../components/navMobile'
import { Helmet } from "react-helmet"
import ScheduleTabs from "../pages/tabs/scheduleTabs";

const SchedulePage = () => (

    <div>
        <Helmet >
            <meta charSet="utf-8" />
            <title>Buddeen - 4th July 2019</title>
            <link rel="canonical" href="https://buddeen.com" />
        </Helmet>
        <FontFace />
        <ScheduleTabs />
        <NavMobile />
    </div>

)

export default SchedulePage