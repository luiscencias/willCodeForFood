import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image';


class Gallery extends Component {
    render () {
        const slideImages = [
            "https://instagram.fftw1-1.fna.fbcdn.net/vp/ddbcd4e30ed5d35940d63de642788de3/5D13CFD5/t51.2885-15/e35/52713135_2323907557932378_8977152329679767459_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net",
            "https://instagram.fftw1-1.fna.fbcdn.net/vp/3eb89330c0733586b61e955d2fc79b6d/5D0DAED6/t51.2885-15/e35/41739254_2473917379293001_5623219170017712919_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net",
            "https://instagram.fftw1-1.fna.fbcdn.net/vp/b0b4577162021c1285d7b2b6eedc2a24/5D23B269/t51.2885-15/e35/52001337_824263094592003_121996381511065480_n.jpg?_nc_ht=instagram.fftw1-1.fna.fbcdn.net"
        ];


        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: false,
            scale: 0.4
        };

        return (
            <div>
                <div className="slide-container">
                    <Zoom {...properties}>
                        {slideImages.map((each, index) => (
                            <img key={index} style={{ width: '70%', height: '70%', marginLeft : 'auto', marginRight: 'auto'}} src={each} />
                        ))}
                    </Zoom>
                </div>
            </div>
        )
    }
}



export default Gallery;
