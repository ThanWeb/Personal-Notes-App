import React from 'react';
import { getData } from '../utils/data.js';
import PersonalNotesInput from './Input/PersonalNotesInput.js';
import PersonalNotesList from './List/PersonalNotesList.js';
import PersonalNotesArchive from './List/PersonalNotesArchive.js';
import PersonalNotesSearch from './Search/PersonalNotesSearch.js';

class PersonalNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            tempNotes: []
        }

        this.addNote = this.addNote.bind(this);
        this.searchNote = this.searchNote.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    } 

    addNote({ title, body }) {
        let now = new Date();
        const notes = this.state.notes
        const length = notes.length;
        notes.push(
            {
                id: length + 1,
                title,
                body,
                createdAt: `${now.toISOString()}`,
                archived: false,            
            }
        )
        this.setState({ notes });
    }

    searchNote( input ) {
        const notes = this.state.notes;
        const tempNotes = [];
        notes.forEach((note) => {
            if((note.title.toLowerCase()).includes(input)){
                tempNotes.push(note)
            }
        });
        this.setState({ tempNotes })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        notes.forEach((note, index) => {
            note.id = index + 1;
        });
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        this.state.notes.forEach(note => {
            if(note.id === id)
                note.archived = true
        });
        const notes = this.state.notes
        this.setState({ notes });
    }

    onUnarchiveHandler(id) {
        this.state.notes.forEach(note => {
            if(note.id === id)
                note.archived = false
        });
        const notes = this.state.notes
        this.setState({ notes });
    }

    render() {
        return (
            <div className="container">
                <PersonalNotesInput addNote={this.addNote} />
                <PersonalNotesSearch tempNotes={this.state.tempNotes} searchNote={this.searchNote}/>
                <PersonalNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <PersonalNotesArchive notes={this.state.notes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler} />
            </div>
        );
    }
}
 
export default PersonalNotesApp;