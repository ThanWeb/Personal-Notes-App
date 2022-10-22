import React, { useState } from 'react';
import PersonalNotesList from '../components/List/PersonalNotesList';
import PersonalNotesSearch from '../components/Search/PersonalNotesSearch';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';

function ListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setAllNotes] = useState([]);
    const [searchStatus, setSearchStatus] = useState(1);
    const [showedNote, setShowedNote] = useState([]);

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
        let flag = 0, arrShowed = [];
        notes.forEach((note) => {
            if(!(note.title.toLowerCase()).includes(input))
                arrShowed.push(false)
            else{
                arrShowed.push(true);
                flag++;
            }
        });
        changeSearchParams(input);
        setSearchStatus(flag);
        setShowedNote(arrShowed);
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
            <PersonalNotesList notes={notes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} searchStatus={searchStatus} showedNote={showedNote} />
        </div>
    );
}

export default ListPage;