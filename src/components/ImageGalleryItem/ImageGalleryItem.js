import React, { Component } from 'react';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
    onShowImage = (largeImageURL) => {
    this.props.onClick(largeImageURL);
    }

    render() {
        return this.props.hits.map(({ id, webformatURL, tags, largeImageURL }) => (
            <li className="ImageGalleryItem"
                key={id}>
                <img
                    src={webformatURL}
                    alt={tags}
                    className="ImageGalleryItem-image"
                    onClick={() => this.onShowImage(largeImageURL)} />
            </li>
        )
    )}
}
export default ImageGalleryItem