import React from 'react';
import { Link } from 'react-router-dom';

function NoteNotFound() {
    return (
        <div className='not-found-alert'>
            <h1>404 NOT FOUND</h1>
            <button><Link to={`/`}>Back to Home</Link></button>
        </div>
    );
}

export default NoteNotFound;