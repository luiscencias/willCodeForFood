import React from 'react';

import {thumbnailGalleryStyles} from "./styles";
import activeThumbnailWindow from './activeThumbnailWindow'

const Gallery = () => (
    <>
        <div style ={thumbnailGalleryStyles}>
            <div style={{ flex: 1}}>
                left
                <activeThumbnailWindow />
            </div>

            <div style={{ flex: 1}}>
                Right
            </div>

        </div>
    </>
);

export default Gallery;