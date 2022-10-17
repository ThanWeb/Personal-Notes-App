import React from 'react';
import PropTypes from 'prop-types';
import PersonalNotesList from '../components/List/PersonalNotesList';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
import { getNotes, searchNote, deleteNote, archiveNote } from '../utils/data';
import { useSearchParams } from 'react-router-dom';

function ListPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    let title = searchParams.get('title');

    function deleteQuery(){
        searchParams.delete('title');
        setSearchParams(searchParams);
    }

    function changeSearchParams(keyword) {
        if(keyword.length === 0){
            deleteQuery();
        }
        else
            setSearchParams({ title: keyword });
    }
    
    return <ListPage onSearch={changeSearchParams} activeKeyword={title} />;
}

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
        this.props.onSearch(input);
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
                <PersonalNotesSearch searchNote={this.onSearchHandler} defaultKeyword={this.props.activeKeyword} />
                <PersonalNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </div>
        );
    }
}

ListPage.propTypes = {
    onSearch: PropTypes.func,
    defaultKeyword: PropTypes.string
};

export default ListPageWrapper;