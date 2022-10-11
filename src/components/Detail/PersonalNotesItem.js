import React from 'react';
import PropTypes from 'prop-types';
import { NotesInformation } from './NotesInformation';

function PersonalNotesItem({ id, title, body, createdAt }) {
    return (
        <NotesInformation id={id} title={title} body={body} createdAt={createdAt} />
    );
}

PersonalNotesItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default PersonalNotesItem;