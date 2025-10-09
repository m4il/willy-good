import React from 'react'
import './modal.css'

const Modal = ({header = undefined, body = undefined, isActive, setIsActive}: {body?: React.ReactNode, header?: React.ReactNode, isActive: boolean, setIsActive: (b: boolean) => void}) => {
  return isActive ? (<div className="modal__overlay">
    <div className="modal">
      <div className="modal-content">
      <div className="modal-content__header">
        <h5>
          {header}
        </h5>
        <button onClick={() => setIsActive(false)}>
          X
        </button>
        </div>
        <div className="modal-content__body">
          {body}
      </div>
      </div>
    </div>
  </div>) : null
}


export default Modal
