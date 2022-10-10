import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalNotesInput from '../components/Input/PersonalNotesInput';
import { addNote } from '../utils/data';

function AddPage(){
    const navigate = useNavigate();

    function onAddHandler(title, body) {
        addNote(title, body);
        navigate('/');
    }

    return (
        <PersonalNotesInput addNote={onAddHandler} />
    )
}

export default AddPage;