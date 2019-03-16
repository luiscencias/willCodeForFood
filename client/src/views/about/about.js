import React from 'react';

import {thumbnailGalleryStyles, HeroLogo, HeroSection, missionStatement} from "./styles";
import ActiveThumbnailWindow from './Components/ActiveThumbnailWindow'
import ThumbnailGrid from './Components/thumbnailGrid'

import axios from 'axios'

import { useScrollToTopOnMount } from '../../helpers';

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thumbnails: [],
            activeIndex: 0
        }
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/ryafq')
            .then(res => {
                this.setState({thumbnails: res.data.thumbnails})
            })
    }

    renderThumbnails = () => {
        const { thumbnails, activeIndex } = this.state
        if(thumbnails.length) {
           return (
               <>
                   <ActiveThumbnailWindow
                       activeThumbnail={thumbnails[activeIndex]}
                   />

                   <ThumbnailGrid
                        thumbnails={thumbnails}
                        handleClick={this.handleClick}
                    />
                </>
           )
        }
        return null
    }

    renderTextContent = () => {
        const { thumbnails, activeIndex } = this.state
        if(thumbnails.length){
            return(
                <>
                    <h1> { thumbnails[activeIndex].title } </h1>
                    <p>  { thumbnails[activeIndex].bodyText } </p>
                </>
            )
        }
        return null
    }



    handleClick = (e) => {
        const newActiveIndex = e.target.getAttribute('data-index')
        this.setState({ activeIndex: newActiveIndex})
    }

    render() {
        const { thumbnails } = this.state
        console.log(thumbnails)

        return(
            <>
                <HeroSection>
                    <HeroLogo variant = 'h2'>About Us</HeroLogo>
                </HeroSection>
                <div style = {missionStatement}>
                    Mission Statement
                </div>
                <div style={{textAlign: 'center'}}>
                    <HeroLogo variant = 'h3'>Leadership</HeroLogo>
                </div>
                <div style ={thumbnailGalleryStyles}>
                    <div style={{flex: 1}}>
                        { this.renderThumbnails() }
                    </div>

                    <div style={{flex: 1, padding: '40px'}}>
                        { this.renderTextContent() }
                    </div>
                </div>
            </>
        )
    }
}

export default () => {
    useScrollToTopOnMount();

    return <About />;
};
