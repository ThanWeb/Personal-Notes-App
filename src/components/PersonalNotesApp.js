import React from 'react';
import { getNotes, addNote, searchNote, archiveNote, unarchiveNote, deleteNote } from '../utils/data.js';
import PersonalNotesInput from './Input/PersonalNotesInput.js';
import PersonalNotesList from './List/PersonalNotesList.js';
import PersonalNotesArchive from './Archive/PersonalNotesArchive.js';
import PersonalNotesSearch from './Search/PersonalNotesSearch.js';

class PersonalNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNotes()
        }

        this.onAddHandler = this.onAddHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }
    
    setNotes() {
        this.setState(() => {
            return {
                notes: getNotes(),
            }
        });
    }

    onAddHandler(title, body) {
        addNote(title, body);
        this.setNotes();
    }

    onSearchHandler(input) {
        searchNote(input);
        this.setNotes();
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setNotes();
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.setNotes();
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setNotes();
    }

    render() {
        return (
            <div className="container">
                <PersonalNotesInput addNote={this.onAddHandler} />
                <PersonalNotesSearch searchNote={this.onSearchHandler}/>
                <PersonalNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <PersonalNotesArchive notes={this.state.notes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler} />
            </div>
        );
    }
}
 
export default PersonalNotesApp;