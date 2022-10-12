import React from 'react';
import PropTypes from 'prop-types';

class PersonalNotesSearch extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            input: this.onLoadHandler(props.defaultKeyword),
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

    onLoadHandler(keyword) {
        if(keyword){
            this.props.searchNote(keyword);
            return keyword;
        }
        else
            return '';
    }

    render() {
        return (
            <div className='note-search-section'>
                <form className='search-form'>
                    <input id='input-search' value={this.state.input} type='text' placeholder='Search Note Title ...' required autoComplete='off' onInput={this.onInputChangeEventHandler} />
                </form>
            </div>
        );        
    }
}

PersonalNotesSearch.propTypes = {
    searchNote: PropTypes.func,
};

export default PersonalNotesSearch;