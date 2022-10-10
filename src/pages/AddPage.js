import React from 'react';
import PropTypes from 'prop-types';
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

AddPage.propTypes = {
    addNote: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string
}

export default AddPage;