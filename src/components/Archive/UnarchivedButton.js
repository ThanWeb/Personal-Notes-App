import React from 'react';
import PropTypes from 'prop-types';
 
function UnarchiveButton({ id, onUnarchive }) {
    return <button className='notes-button__unarchive' onClick={() => onUnarchive(id)}>Unarchive</button>;
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
};
 
export default UnarchiveButton;