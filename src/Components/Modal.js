import "../CSS/modal.css";
function Modal({ modalLable, onClose, open, children, custom_modal }) {
  function handleClose(e) {
    if (e.target.className === "modalContainer") {
      onClose();
    }
    return null;
  }
  if (open) {
    return (
      <div className="modalContainer" onClick={handleClose}>

        <div className={`modal ${custom_modal}`}>

          <div className="modal_top">
            <h2>{modalLable}</h2>
            <span onClick={onClose}>
              x
            </span>
          </div>

          <div className="modal_children">
            {children}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;