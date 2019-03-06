import React from 'react';

import {thumbnailGalleryStyles, HeroLogo, HeroSection, missionStatement} from "./styles";
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './thumbnailGrid'

import axios from 'axios'

const About = () => (
    <>
        <HeroSection>
            <HeroLogo variant = 'h2'>About Us</HeroLogo>
        </HeroSection>
        <div style = {missionStatement}>
            Mission Statement
        </div>
        <div>
            Leadership
        </div>
        <div style ={thumbnailGalleryStyles}>
            <div style={{ flex: 1}}>
                <ActiveThumbnailWindow />
                <ThumbnailGrid/>
            </div>

            <div style={{ flex: 1, padding: '40px' }}>
                Some Cool Text
            </div>
        </div>
    </>
);


function componentDidMount() {
    axios.get('https://api.myjson.com/bins/br2am')
        .then(res => {console.log(res.data.thumbnails)})
}

export default About;