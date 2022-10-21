import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const stringCreatedAtLocally = (createdAt) => {
    let string = new Date(createdAt);
    let result = string.toLocaleString();
    return result;
}

const createTextThumbnail = (text) => {
    let lastIndex = 0;
    for(let i = 0; i < 80; i++){
        if(text[i] === ' ')
            lastIndex = i;
    }

    let result = text.slice(0, lastIndex) + '...';
    return result;
}

function NotesInformation({ id, title, body, createdAt }) {
    let printedCreatedAt = stringCreatedAtLocally(createdAt);
    let tempBody = '';

    if(body.length > 50)
        tempBody = createTextThumbnail(body);
    else
        tempBody = body;

    return (
        <div className='note-thumbnail'>
            <div className="head-thumbnail">
                <h3 className='title-note'>{title}</h3>
                <Link to={`/detail/${id}`} className='notes-button detail-page-button'>
                    <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/see_more_icon.png' alt='see-more'/>
                </Link>
            </div>
            <p className='body-note'>{tempBody}</p> 
            <p className='date-note'>You added this note on {printedCreatedAt}</p>
        </div>
    );
}

NotesInformation.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export { NotesInformation, stringCreatedAtLocally };