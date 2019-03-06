import React from 'react';
import Thumbnail from './thumbnail'

const ThumbnailGrid = () => {
    return (
        <div style = {styles}>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
        </div>
    )
};

const styles = {
    height: '35%',
    width: '100%',
    background: 'yellow',
    display: 'flex',
    flexWrap: 'wrap'
};

export default ThumbnailGrid;