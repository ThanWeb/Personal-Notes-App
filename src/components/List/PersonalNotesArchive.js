import React from 'react';
import PersonalNotesItem from './PersonalNotesItem';
import UnarchiveButton from './UnarchivedButton';

const filterArchived = ({ notes }) => {
    let archivedNotes = [];
    notes.forEach(note => {
        if(note.archived)
            archivedNotes.push(note);
    });

    return archivedNotes
}

function PersonalNotesArchive({ notes, onUnarchive }) {
    let archivedNotes = filterArchived({ notes });
    if(archivedNotes.length === 0){
        return (
            <div className='notes-archived'>
                <h3>Archived Notes</h3>
                <p className='zero-search-result'>There is nothing in here</p>
            </div>
        )
    }
    else{
        return (
            <div className='notes-archived'>
                <h3>Archived Notes</h3>
                <div className='list-container'>
                    {   
                        archivedNotes.map((note) => (
                            <div className='personal-notes-card'  key={note.id}>
                                <PersonalNotesItem id={note.id} {...note} />
                                <div className="buttons">
                                    <UnarchiveButton onUnarchive={onUnarchive} id={note.id} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PersonalNotesArchive;