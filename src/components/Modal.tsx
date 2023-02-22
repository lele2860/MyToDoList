import React from 'react'
import '../styles/Modal.css'
import ReactDom from 'react-dom'

function Modal({ show, showText, closeModal }: { show: Boolean; showText: string, closeModal: () => void }) {
  if (!show) return null;
  return ReactDom.createPortal(
    (<div className='modal'>
      <div className='overlay'></div>
      <div className='content'>
        <text >
          This is Some Title!!
        </text>
        <p>{showText}</p>
        <button onClick={closeModal}>close</button>
      </div>
    </div>), document.body)
}

export default Modal
