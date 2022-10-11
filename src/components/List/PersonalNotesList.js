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

    return unarchivedNotes;
}

const filterShowed = (array) => {
    let total = 0;
    array.forEach(item => {
        if(item.display === "showed")
            total++;
    });
    return total;
}
 
function PersonalNotesList({ notes, onDelete, onArchive }){
    let unarchivedNotes = filterUnarchived({ notes });
    let checkShowedLists = filterShowed(unarchivedNotes);
    if(unarchivedNotes.length === 0){
        return (
            <div className='list-notes'>
                <p className='zero-note-alert'>There is nothing in here</p>
            </div>
        );
    }    else if(checkShowedLists === 0){
        return (
            <div className='list-notes'>
                <p className='note-not-found'>There is no match </p>
            </div>
        );
    }
    else if(checkShowedLists !== 0) {
        return (
            <div className='list-notes'>
                {   
                    unarchivedNotes.map((note) => 
                        <div className={`note-card ${note.display}`} key={note.id} >
                            <PersonalNotesItem id={note.id} {...note} />
                            <div className='buttons'>
                                <ArchiveButton onArchive={onArchive} id={note.id} />
                                <DeleteButton onDelete={onDelete} id={note.id} />
                            </div>
                        </div>
                    )
                }
            </div>
        );   
    } 
}

PersonalNotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
};

export default PersonalNotesList;