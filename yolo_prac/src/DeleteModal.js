import { useState } from 'react';
import Modal from './Modal';
import './DeleteModal.css';

function DeleteModal({ type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
            <p>{type} 삭제 하시겠습니까?</p>
            <p>
                {type === '포스트를' ? '포스트가' : '댓글이'} 삭제되면, 복구되지
                않습니다.
            </p>

            <div className="buttonOption">
                <div className="cancle" onClick={toggleModal}>
                    취소
                </div>
                <div className="remove">삭제</div>
            </div>
        </Modal>
    );
}

export default DeleteModal;
