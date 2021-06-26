import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css'
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handelLeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelLeyDown)
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
                    <img src={this.props.img} alt='' />
                </div>
            </div>, modalRoot
        )
    }
}

export default Modal