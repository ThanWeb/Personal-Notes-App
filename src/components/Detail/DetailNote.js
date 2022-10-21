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
            <div className='detail-body'>
                <h3>{title}</h3>
                <p>{body}</p>
                <p className='date-note'>You added this note on {printedCreatedAt}</p>
            </div>
            {!archived ?
            <div className='buttons'>
                <ArchiveButton onArchive={onArchive} id={id} />
                <DeleteButton onDelete={onDelete} id={id} />
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
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
};

export default DetailNote;