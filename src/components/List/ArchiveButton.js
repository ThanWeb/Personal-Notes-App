import React from 'react';
 
function ArchiveButton({ id, onArchive }) {
    return <button className='notes-button__archive' onClick={() => onArchive(id)}>Archive</button>
}
 
export default ArchiveButton;