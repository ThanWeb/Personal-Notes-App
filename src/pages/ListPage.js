import React, { useState } from 'react';
import PersonalNotesList from '../components/List/PersonalNotesList';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
import { searchNote, deleteNote, archiveNote } from '../utils/data';
import { getActiveNotes } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';

function ListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setAllNotes] = useState([]);

    let title = searchParams.get('title');

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setAllNotes(data);
        });
    }, []);

    const deleteQuery = () => {
        searchParams.delete('title');
        setSearchParams(searchParams);
    }

    const changeSearchParams = (keyword) => {
        if(keyword.length === 0){
            deleteQuery();
        }
        else
            setSearchParams({ title: keyword });
    }

    const setNotes = () => {
        let { data } = getActiveNotes();
        setAllNotes(data);
        console.log(notes);
    }

    const onSearchHandler = (input) => {
        searchNote(input);
        setNotes();
        changeSearchParams(input);
    }

    const onDeleteHandler = (id) => {
        deleteNote(id);
        setNotes();
    }

    const onArchiveHandler = (id) => {
        archiveNote(id);
        setNotes();
    }

    return (
        <div className='homepage'>
            <PersonalNotesSearch searchNote={onSearchHandler} defaultKeyword={title} />
            <PersonalNotesList notes={notes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
        </div>
    );
}

export default ListPage;