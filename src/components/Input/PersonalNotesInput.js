import React, { useState } from 'react';
import AddButton from './AddButton';
import PropTypes from 'prop-types';

function PersonalNotesInput({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onTitleChangeEventHandler = (event) => {
        let left;
        if(event.target.value.length > 50){
            document.querySelector('.max-alert').innerHTML = 'Maximum 50 characters for title';
            document.querySelector('.max-alert').style.visibility = 'visible';
            document.querySelector('.submit-button').style.visibility = 'hidden';
        }
        else {
            if(event.target.value.length > 35){
                left = 50 - event.target.value.length;
                document.querySelector('.max-alert').innerHTML = `${left} character left`;
                document.querySelector('.max-alert').style.visibility = 'visible';
            }
            else
                document.querySelector('.max-alert').style.visibility = 'hidden';
            document.querySelector('.submit-button').style.visibility = 'visible';
            setTitle(event.target.value);
        }
    }
    
    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.value);
    }
    
    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const note = {
            title: title,
            body: body
        }
        addNote(note);
    }

    return (
        <div className='note-add-section'>
            <h3>Input New Note</h3>
            <form className='input-form' onSubmit={onSubmitEventHandler}>
                <input type='text' placeholder='Title ...' required onChange={onTitleChangeEventHandler} maxLength='50'/>
                <textarea type='text' placeholder='Your Note ...' required onChange={onBodyChangeEventHandler} rows='5'/> 
                <AddButton />
                <p className='max-alert'>Alert</p>
            </form>
        </div>
    );
}

PersonalNotesInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default PersonalNotesInput;