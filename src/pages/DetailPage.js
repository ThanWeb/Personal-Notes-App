import React from 'react';
import PropTypes from 'prop-types';
import DetailNote from '../components/Detail/DetailNote';
import NoteNotFound from '../components/Detail/NoteNorFound';
import { useParams } from 'react-router-dom';
import { getSingleNote, deleteNote } from '../utils/data';
import { useNavigate } from 'react-router-dom';

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/');
    }
    return <DetailPage id={id} onDelete={onDeleteHandler}/>;
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
            <DetailNote {...this.state.note} onDelete={this.props.onDelete} />
        );
    }
}

DetailPage.propTypes = {
    onDelete: PropTypes.func.isRequired,
    note: PropTypes.object
};
  
export default DetailPageWrapper;