import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
    render() {
        return (
            <div className="Overlay">
                <div className="Modal">
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>
        )
    }
}

export default Modal