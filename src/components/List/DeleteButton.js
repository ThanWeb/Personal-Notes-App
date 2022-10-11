import React from 'react';
import PropTypes from 'prop-types';
 
function DeleteButton({ id, onDelete }) {
    return <button className='notes-button__delete' onClick={() => onDelete(id)}>Delete</button>;
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};
 
export default DeleteButton;