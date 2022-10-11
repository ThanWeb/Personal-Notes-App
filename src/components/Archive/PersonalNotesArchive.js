import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesItem from '../Detail/PersonalNotesItem';
import UnarchiveButton from './UnarchivedButton';

const filterArchived = ({ notes }) => {
    let archivedNotes = [];
    notes.forEach(note => {
        if(note.archived)
            archivedNotes.push(note);
    });

    return archivedNotes;
}

function PersonalNotesArchive({ notes, onUnarchive }) {
    let archivedNotes = filterArchived({ notes });
    if(archivedNotes.length === 0){
        return (
            <div className='archived-notes'>
                <p className='zero-search-result'>There is zero in archive</p>
            </div>
        );
    }
    else{
        return (
            <div className='archived-notes'>
                {   
                    archivedNotes.map((note) => (
                        <div className='note-card'  key={note.id}>
                            <PersonalNotesItem id={note.id} {...note} />
                            <div className='buttons'>
                                <UnarchiveButton onUnarchive={onUnarchive} id={note.id} />
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

PersonalNotesArchive.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onUnarchive: PropTypes.func.isRequired
};

export default PersonalNotesArchive;