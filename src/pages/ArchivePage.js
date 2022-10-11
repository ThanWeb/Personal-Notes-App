import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesArchive from '../components/Archive/PersonalNotesArchive';
import { getNotes, unarchiveNote } from '../utils/data';
class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNotes()
        }

        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    setNotes() {
        this.setState(() => {
            return {
                notes: getNotes(),
            }
        });
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setNotes();
    }

    render() {
        return (
            <PersonalNotesArchive notes={this.state.notes} onUnarchive={this.onUnarchiveHandler} />
        );
    }
}

ArchivePage.propTypes = {
    getNotes: PropTypes.func,
    unarchiveNote: PropTypes.func,
    searchNote: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.object)
};

export default ArchivePage;