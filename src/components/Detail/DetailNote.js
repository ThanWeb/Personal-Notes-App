import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../List/DeleteButton';
import { stringCreatedAtLocally } from './NotesInformation';

function DetailNote({ id, title, body, createdAt, onDelete }) {
    let printedCreatedAt = stringCreatedAtLocally(createdAt);
    return (
        <div className='note-detail'>
            <h2>{title}</h2>
            <p>{body}</p>
            <p className='date-note'>You added this note on {printedCreatedAt}</p>
            <DeleteButton onDelete={onDelete} id={id} />
        </div>
    );
}

DetailNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DetailNote;