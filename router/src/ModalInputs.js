import { useEffect, useState } from 'react';
import Modal from './Modal';
import './ModalInputs.css';
import SelectBox from './SelectBox';

function ModalInputs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tone, setTone] = useState('');
    const [length, setLength] = useState('');
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleToneChange = (e) => {
        setTone(e.target.value);
    };

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    };

    // useEffect(() => {
    //     console.log(tone);
    // }, [tone]);

    // useEffect(() => {
    //     console.log(length);
    // }, [length]);

    return (
        <div>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                <h2>메일에 들어갈 이름을 입력해주세요</h2>
                <input className="name-input" placeholder="이름입력"></input>
                <h2>어떤 말투를 원하시나요?</h2>
                <SelectBox
                    className="inputs"
                    type="tone"
                    onChange={handleToneChange}
                />
                <h2>원하시는 길이를 선택해주세요</h2>
                <SelectBox
                    className="inputs"
                    type="length"
                    onChange={handleLengthChange}
                />
            </Modal>
        </div>
    );
}

export default ModalInputs;
