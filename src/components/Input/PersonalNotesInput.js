import React from 'react';
import AddButton from './AddButton';
import PropTypes from 'prop-types';

class PersonalNotesInput extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            title: '',
            body: '',
        }
    
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
 
    onTitleChangeEventHandler(event) {
        let left;
        if(event.target.value.length > 50){
            document.querySelector('.max-alert').innerHTML = 'Maximum 50 characters for title';
            document.querySelector('.max-alert').style.visibility = 'visible';
            document.querySelector('.submit-button').style.visibility = 'hidden';
        }
        else {
            if(event.target.value.length > 35){
                left = 50 - event.target.value.length;
                document.querySelector('.max-alert').innerHTML = `${left} character left`;
                document.querySelector('.max-alert').style.visibility = 'visible';
            }
            else
                document.querySelector('.max-alert').style.visibility = 'hidden';
            document.querySelector('.submit-button').style.visibility = 'visible';
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            });
        }
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    
    render() {
        return (
            <div className='note-add-section'>
                <h3>Input New Note</h3>
                <form className='input-form' onSubmit={this.onSubmitEventHandler}>
                    <input type='text' placeholder='Title ...' required onChange={this.onTitleChangeEventHandler} maxLength='50'/>
                    <textarea type='text' placeholder='Your Note ...' required onChange={this.onBodyChangeEventHandler} rows='5'/> 
                    <AddButton />
                    <p className='max-alert'>Alert</p>
                </form>
            </div>
        );
    }
}

PersonalNotesInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default PersonalNotesInput;