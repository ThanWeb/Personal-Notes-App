import React from 'react';
import PropTypes from 'prop-types';
import DetailNote from '../components/Detail/DetailNote';
import NoteNotFound from '../components/Detail/NoteNorFound';
import { useParams } from 'react-router-dom';
import { getSingleNote, deleteNote, archiveNote, unarchiveNote } from '../utils/data';
import { useNavigate } from 'react-router-dom';

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/');
    }

    function onArchiveHandler(id) {
        archiveNote(id);
        navigate('/');
    }

        function onUnarchiveHandler(id) {
        unarchiveNote(id);
        navigate('/');
    }

    return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} />;
}
class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            note: getSingleNote(props.id)
        };
    }
    
    render() {
        if (this.state.note === null) {
            return (
                <NoteNotFound />
            );
        }
    
        return (
            <div className="detail-page">
                <DetailNote {...this.state.note} onDelete={this.props.onDelete} onArchive={this.props.onArchive} onUnarchive={this.props.onUnarchive} />
            </div>
        );
    }
}

DetailPage.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    note: PropTypes.object
};
  
export default DetailPageWrapper;