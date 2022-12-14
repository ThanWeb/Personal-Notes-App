import React from 'react';
import PropTypes from 'prop-types';
 
function DeleteButton({ id, onDelete }) {
    return (
        <button className='notes-button delete-button' onClick={() => onDelete(id)}>
            <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/delete_icon.png' alt='delete'/>
            <span>Delete</span>
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};
 
export default DeleteButton;