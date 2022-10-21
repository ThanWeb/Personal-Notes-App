import React, { useState } from 'react';
import DetailNote from '../components/Detail/DetailNote';
import NoteNotFound from '../components/Detail/NoteNorFound';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState([]);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, [id]);

    const moveToHome = () => {
        navigate('/');
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);
        moveToHome();
    }

    const onArchiveHandler = async (id) => {
        await archiveNote(id);
        moveToHome();
    }

    const onUnarchiveHandler = async (id) => {
        await unarchiveNote(id);
        moveToHome();
    }

    if(note === null){
        return (
            <NoteNotFound />
        );
    }

    return (
        <div className='detail-page'>
            <DetailNote {...note} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} />
        </div>
    );
}
  
export default DetailPage;