import './Modal.css';
function Modal({ isOpen, toggleModal, children }) {
    return (
        <div>
            <div onClick={toggleModal}>버튼</div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">{children}</div>
                </div>
            )}
        </div>
    );
}

export default Modal;
