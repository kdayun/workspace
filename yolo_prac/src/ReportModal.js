import { useState } from 'react';
import Modal from './Modal';
import './ReportModal.css';

function ReportModal({ type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal} children>
            <p>{type} 신고하시겠습니까?</p>
            <p>신고 접수 확인 후, 조치하겠습니다.</p>
            <textarea
                className="reason"
                placeholder="신고 사유를 입력해주세요."
            />
            <div className="buttonOption">
                <div className="cancle" onClick={toggleModal}>
                    취소
                </div>
                <div className="remove">신고</div>
            </div>
        </Modal>
    );
}

export default ReportModal;
