import React from 'react';
import PersonalNotesSearchList from './PersonalNotesSearchList';

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
            <div className='notes-search'>
                <h3>Search Note</h3>
                <form className='search-form'>
                    <input id="input-search" type="text" placeholder="Title ..." required onInput={this.onInputChangeEventHandler}/>
                    <PersonalNotesSearchList tempNotes={this.props.tempNotes} input={this.state.input}/>
                </form>
                
            </div>
        );        
    }
}
export default PersonalNotesSearch;