import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesArchive from '../components/Archive/PersonalNotesArchive';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
import { getNotes, unarchiveNote, searchNote } from '../utils/data';
class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNotes()
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
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

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setNotes();
    }

    render() {
        this.resetInput();
        return (
            <div>
                <PersonalNotesSearch searchNote={this.onSearchHandler} />
                <PersonalNotesArchive notes={this.state.notes} onUnarchive={this.onUnarchiveHandler} />
            </div>
        );
    }
}

ArchivePage.propTypes = {
    getNotes: PropTypes.func,
    unarchiveNote: PropTypes.func,
    searchNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.object)
}

export default ArchivePage;