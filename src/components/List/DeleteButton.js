import React from 'react';
import PropTypes from 'prop-types';
 
function DeleteButton({ id, onDelete }) {
    // console.log(id);
    return (
        <button className='notes-button delete-button' onClick={() => onDelete(id)}>
            <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/delete_icon.png' alt='delete'/>
            <span>Delete</span>
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func.isRequired
};
 
export default DeleteButton;