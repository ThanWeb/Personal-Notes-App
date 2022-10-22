import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesItem from '../Detail/PersonalNotesItem';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function PersonalNotesList({ notes, onDelete, onArchive, searchStatus, showedNote }){
    let unarchivedNotes = notes;
    if(unarchivedNotes.length === 0){
        return (
            <div className='list-notes'>
                <p className='zero-note-alert'>List is empty</p>
            </div>
        );
    }
    else if(searchStatus === 0){
        return (
            <div className='list-notes'>
                <p className='zero-search-alert'>There is no match</p>
            </div>
        );
    }
    else {
        return (
            <div className='list-notes'>
                {   
                    unarchivedNotes.map((note, index) => 
                        <div className={ showedNote[index] === false ? 'note-card hidden' : 'note-card'} key={note.id} >
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
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        archived: PropTypes.bool,
        createdAt: PropTypes.string
    })),
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    searchStatus: PropTypes.number,
    showedNote: PropTypes.arrayOf(PropTypes.bool)
};

export default PersonalNotesList;