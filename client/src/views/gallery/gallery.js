import React from 'react';

import {thumbnailGalleryStyles} from "./styles";
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './thumbnailGrid'

const Gallery = () => (
    <>
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

export default Gallery;