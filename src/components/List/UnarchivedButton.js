import React from 'react';
 
function UnarchiveButton({ id, onUnarchive }) {
    return <button className='notes-button__unarchive' onClick={() => onUnarchive(id)}>Unarchive</button>
}
 
export default UnarchiveButton;