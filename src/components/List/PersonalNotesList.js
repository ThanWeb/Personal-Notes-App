import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesItem from '../Detail/PersonalNotesItem';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

const filterUnarchived = ({ notes }) => {
    let unarchivedNotes = [];
    notes.forEach(note => {
        if(!(note.archived))
            unarchivedNotes.push(note);
    });

    return unarchivedNotes
}
 
function PersonalNotesList({ notes, onDelete, onArchive }){
    let unarchivedNotes = filterUnarchived({ notes });
    if(unarchivedNotes.length === 0){
        return (
            <div className='notes-list'>
                <p className='zero-search-result'>There is nothing in here</p>
            </div>
        )
    }
    else {
        return (
            <div className='notes-list'>
                <div className='list-container'>
                    {   
                        unarchivedNotes.map((note) => 
                            <div className={`personal-notes-card ${note.display}`} key={note.id} >
                                <PersonalNotesItem id={note.id} {...note} />
                                <div className='buttons'>
                                    <ArchiveButton onArchive={onArchive} id={note.id} />
                                    <DeleteButton onDelete={onDelete} id={note.id} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );   
    } 
}

PersonalNotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default PersonalNotesList;