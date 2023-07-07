import React, { useEffect, useRef, useState } from 'react'
import '../styles/Modal.css'
import ReactDom from 'react-dom'

function Modal({ show, showText, closeModal }: { show: Boolean; showText: string, closeModal: () => void }) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTextAreaValue(showText);
  }, [showText]);

  useEffect(() => {
    if (show) {
      if (textAreaRef.current != null) {
        console.log(textAreaRef.current);
        console.log(textAreaRef.current.scrollHeight + "px")
        console.log(textAreaRef.current.clientHeight + "px")
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.scrollTop = 0;
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
      }
    }
  }, [show]);

  if (!show) return null;

  const handleAddInputChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.scrollTop = 0;
    e.target.style.height = e.target.scrollHeight + 'px';
    console.log( e.target.scrollHeight + "px")
  }
  return ReactDom.createPortal(
    (<div className='modal'>
      <div className='overlay'></div>
      <div className='content'>
        <text >
          This is Some Title!!
        </text>
        <textarea ref={textAreaRef} onChange={handleAddInputChanges} value={textAreaValue}></textarea>
        <button onClick={closeModal}>close</button>
      </div>
    </div>), document.body)
}

export default Modal
