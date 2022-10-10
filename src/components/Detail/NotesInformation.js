import PropTypes from 'prop-types';

const stringCreatedAtLocally = (createdAt) => {
    let string = new Date(createdAt);
    let result = string.toLocaleString();
    return result;
}

function NotesInformation({ title, body, createdAt }) {
    let printedCreatedAt = stringCreatedAtLocally(createdAt);
    return (
        <div className='notes-info'>
            <h4>{title}</h4>
            <p className="body-note">{body}</p> 
            <p className="date-note">You added this note on {printedCreatedAt}</p>
        </div>
    )
}

NotesInformation.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NotesInformation;