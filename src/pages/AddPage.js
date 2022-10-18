import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalNotesInput from '../components/Input/PersonalNotesInput';
import { addNote } from '../utils/network-data';

function AddPage(){
    const navigate = useNavigate();

    async function onAddHandler(note) {
        await addNote(note);
        navigate('/');
    }

    return (
        <PersonalNotesInput addNote={onAddHandler} />
    );
}

export default AddPage;