import React from 'react';
import NotesInformation from './NotesInformation';

function PersonalNotesItem({ title, body, createdAt }) {
    return (
        <NotesInformation title={title} body={body} createdAt={createdAt} />
    );
}

export default PersonalNotesItem;