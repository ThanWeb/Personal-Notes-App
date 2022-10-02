import React from 'react';
import PersonalNotesItem from '../List/PersonalNotesItem';

function PersonalNotesSearchList({ tempNotes, input }){
    let search = true;
    if(input === "")
        search = false
    if(search === false ){
        return (
            <div className='search-note'>
                <p className='zero-search-result'>Lets find a note</p>
            </div>
        ); 
    }
    else if(tempNotes.length === 0 && search === true ){
        return (
            <div className='search-note'>
                <p className='zero-search-result'>There is no match</p>
            </div>
        );     
        }
    else {
        return (
            <div className='list-container'>
                {   
                    tempNotes.map((note) => (
                        <div className='personal-notes-card' key={note.id} >
                            <PersonalNotesItem id={note.id} {...note} />
                        </div>
                    ))
                }
            </div>
        );   
    } 
}

export default PersonalNotesSearchList;