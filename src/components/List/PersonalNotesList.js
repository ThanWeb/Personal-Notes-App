import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesItem from '../Detail/PersonalNotesItem';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

// const filterShowed = (array) => {
//     let total = 0;
//     array.forEach(item => {
//         if(item.display === "showed")
//             total++;
//         console.log(item);
//     });
//     return total;
// }
 
function PersonalNotesList({ notes, onDelete, onArchive }){
    let unarchivedNotes = notes;
    // let checkShowedLists = filterShowed(unarchivedNotes);
    if(unarchivedNotes.length === 0){
        return (
            <div className='list-notes'>
                <p className='zero-note-alert'>List is empty</p>
            </div>
        );
    } 
    // else if(checkShowedLists === 0){
    //     return (
    //         <div className='list-notes'>
    //             <p className='note-not-found'>There is no match </p>
    //         </div>
    //     );
    // }
    else {
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
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        archived: PropTypes.bool,
        createdAt: PropTypes.string
    })),
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
};

export default PersonalNotesList;