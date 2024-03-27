import { useState } from 'react';
import './FirstModal.css';

//modal layout
function FirstModal({ isOpen, toggleModal, children }) {
    return (
        <div>
            <button onClick={toggleModal}>모달 창 띄우기1</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>
                            &times;
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FirstModal;
