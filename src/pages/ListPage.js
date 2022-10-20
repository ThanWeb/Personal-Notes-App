import React, { useState } from 'react';
import PersonalNotesList from '../components/List/PersonalNotesList';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
import { searchNote } from '../utils/data';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
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

    const setNotes = async () => {
        let { data } = await getActiveNotes();
        setAllNotes(data);
    }

    const onSearchHandler = (input) => {
        searchNote(input);
        setNotes();
        changeSearchParams(input);
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);
        setNotes();
    }

    const onArchiveHandler = async (id) => {
        await archiveNote(id);
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