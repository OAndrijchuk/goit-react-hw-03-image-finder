// import React from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }
  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeImgModal();
    }
  };
  render() {
    const { closeImgModal, children } = this.props;
    return (
      <Overlay
        className="overlay"
        onClick={e => (e.target === e.currentTarget ? closeImgModal() : null)}
      >
        <ModalContainer className="modal">{children}</ModalContainer>
      </Overlay>
    );
  }
}

// export const Modal = ({ closeImgModal, children }) => {
//   return (
//     <Overlay
//       className="overlay"
//       onClick={e => (e.target === e.currentTarget ? closeImgModal() : null)}
//     >
//       <ModalContainer className="modal">{children}</ModalContainer>
//     </Overlay>
//   );
// };
//
