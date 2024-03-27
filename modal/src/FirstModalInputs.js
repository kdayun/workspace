import { useEffect, useState } from 'react';
import FirstModal from './FirstModal';
import './FirstModalInputs.css';
import titleImage from '';

function FirstModalInputs() {
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
            <FirstModal isOpen={isModalOpen} toggleModal={toggleModal}>
                <img src={titleImage} alt="매일메일" />
                <p className="firstment">
                    새로운 시작의 문턱에서,
                    <br />
                    매일, 메일이 당신의 이야기를 세상에 전합니다.
                    <br />
                    감성을 담아내는 메일 작성, 이제는 걱정 끝!
                </p>
            </FirstModal>
        </div>
    );
}

export default FirstModalInputs;
