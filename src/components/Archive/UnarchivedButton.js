import React from 'react';
import PropTypes from 'prop-types';
 
function UnarchiveButton({ id, onUnarchive }) {
    return (
        <button className='notes-button unarchive-button' onClick={() => onUnarchive(id)}>
            <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/unarchive_icon.png' alt='unarchive'/>
            <span>Unarchive</span>
        </button>
    );
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
};
 
export default UnarchiveButton;