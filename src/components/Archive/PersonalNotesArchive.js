import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesItem from '../Detail/PersonalNotesItem';
import UnarchiveButton from './UnarchivedButton';
function PersonalNotesArchive({ notes, onUnarchive }) {
    let archivedNotes = notes;
    if(archivedNotes.length === 0){
        return (
            <div className='archived-notes'>
                <p className='zero-search-result'>Archive is empty</p>
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
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        archived: PropTypes.bool,
        createdAt: PropTypes.string
    })),
    onUnarchive: PropTypes.func.isRequired
};

export default PersonalNotesArchive;