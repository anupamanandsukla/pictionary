import React from 'react'

const Modal = (props) => {
  const { showModal, handleClose, type, modalWidth } = props
  const overlayClose = (event) => {
    if (event.target.classList.contains('modal-overlay1')) {
      handleClose();
    }
  };

  return (
    <div>
      {showModal ?
        <div className={`modal-overlay1 ${type}`} onClick={overlayClose}>
          <div className={`modal1 mx-6 rounded-2xl ${props.className? props.className:'bg-white'} `}
            style={{ width: modalWidth }}>
            {props.children}
          </div>
        </div> : <></>}

    </div>
  )
}

export default Modal