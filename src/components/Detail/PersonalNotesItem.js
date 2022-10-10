import React from 'react';
import PropTypes from 'prop-types';
import NotesInformation from './NotesInformation';

function PersonalNotesItem({ title, body, createdAt }) {
    return (
        <NotesInformation title={title} body={body} createdAt={createdAt} />
    );
}

PersonalNotesItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default PersonalNotesItem;