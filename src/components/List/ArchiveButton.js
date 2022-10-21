import React from 'react';
import PropTypes from 'prop-types';
 
function ArchiveButton({ id, onArchive }) {
    return (
        <button className='notes-button archive-button' onClick={() => onArchive(id)}>
            <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/archive_icon.png' alt='archive'/>
            <span>Archive</span>
        </button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string,
    onArchive: PropTypes.func.isRequired
};
 
export default ArchiveButton;