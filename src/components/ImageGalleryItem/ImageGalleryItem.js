// import React, { Component } from 'react';
// import './ImageGalleryItem.css';

// class ImageGalleryItem extends Component {
//     render() {
//         return this.props.hits.map(({ id, webformatURL, tags }) => (
//             <li className="ImageGalleryItem"
//                 key={id}>
//                 <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
//             </li>
//         )
//     )}
// }
// export default ImageGalleryItem

import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({id, webformatURL, tags}) => (
            <li className="ImageGalleryItem" key={id}>
                <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
            </li>
        )
export default ImageGalleryItem