import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css'
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hendelLeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendelLeyDown)
    }

    handelLeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
    handelBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handelBackdropClick}>
                <div className="Modal">
                    {this.props.children}
                    {/* <img src={largeImageURL} alt={tags} /> */}
                </div>
            </div>, modalRoot
        )
    }
}

export default Modal