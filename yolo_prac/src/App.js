import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const isOpened = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="but" onClick={isOpened}>
            모달 열기
            {isOpen === true ? <Modal /> : null}
        </div>
    );
}

export default App;
