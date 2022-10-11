import React from 'react';
import PropTypes from 'prop-types';

class PersonalNotesSearch extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            input: '',
        }
    
        this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this);
    }
 
    onInputChangeEventHandler(event) {
        event.preventDefault();
        this.setState(() => {
            return {
                input: event.target.value,
            }
        });
        this.props.searchNote(event.target.value.toLowerCase());
    }

    render() {
        return (
            <div className='note-search-section'>
                <form className='search-form'>
                    <input id='input-search' type='text' placeholder='Title ...' required autoComplete='off' onInput={this.onInputChangeEventHandler} />
                </form>
            </div>
        );        
    }
}

PersonalNotesSearch.propTypes = {
    searchNote: PropTypes.func,
};

export default PersonalNotesSearch;