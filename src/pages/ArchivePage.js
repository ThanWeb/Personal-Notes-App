import React, { useState } from 'react';
import PersonalNotesArchive from '../components/Archive/PersonalNotesArchive';
import { unarchiveNote, getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
    const [archivedNotes, setArchivedNotes] = useState([]);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setArchivedNotes(data);
        });
    }, []);

    const setNotes = async () => {
        let { data } = await getArchivedNotes();
        setArchivedNotes(data);
    }

    const onUnarchiveHandler = async (id) => {
        unarchiveNote(id);
        setNotes();
    }

    return (
        <PersonalNotesArchive notes={archivedNotes} onUnarchive={onUnarchiveHandler} />
    );
}

export default ArchivePage;