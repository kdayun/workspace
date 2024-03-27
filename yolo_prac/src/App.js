import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import DeleteModal from './DeleteModal';
import ReportModal from './ReportModal';

function App() {
    return (
        <div>
            <DeleteModal type={'포스트를'} />
            <DeleteModal type={'댓글을'} />
            <ReportModal type={'포스트를'} />
            <ReportModal type={'댓글을'} />
        </div>
    );
}

export default App;
