import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesList from '../components/List/PersonalNotesList';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
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
            <div className='homepage'>
                <PersonalNotesSearch searchNote={this.onSearchHandler} />
                <PersonalNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </div>
        );
    }
}

ListPage.propTypes = {
    getNotes: PropTypes.func,
    archiveNote: PropTypes.func,
    searchNote: PropTypes.func,
    deleteNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.object),
    input: PropTypes.string,
    id: PropTypes.string
};

export default ListPage;