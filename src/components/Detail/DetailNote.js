import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../List/DeleteButton';
import ArchiveButton from '../List/ArchiveButton';
import UnarchiveButton from '../Archive/UnarchivedButton';
import { stringCreatedAtLocally } from './NotesInformation';

function DetailNote({ id, title, body, archived, createdAt, onDelete, onArchive, onUnarchive }) {
    let printedCreatedAt = stringCreatedAtLocally(createdAt);
    return (
        <div className='note-detail'>
            <h2>{title}</h2>
            <p>{body}</p>
            <p className='date-note'>You added this note on {printedCreatedAt}</p>
            {!archived ?
            <div className='buttons'>
                <DeleteButton onDelete={onDelete} id={id} />
                <ArchiveButton onArchive={onArchive} id={id} />
            </div>
            :
            <div className='buttons'>
                <UnarchiveButton onUnarchive={onUnarchive} id={id} />
            </div>
            }
        </div>
    );
}

DetailNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
};

export default DetailNote;