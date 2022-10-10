import React from 'react';
import PersonalNotesList from '../components/List/PersonalNotesList';
import { getNotes, searchNote, deleteNote, archiveNote } from '../utils/data';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNotes()
        }
        
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }
    
    setNotes() {
        this.setState(() => {
            return {
                notes: getNotes(),
            }
        });
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

    render() {
        return (
            <PersonalNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        );
    }
}

export default ListPage;