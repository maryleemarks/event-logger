import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Cat Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='demeanor'
          placeholder='How friendly was the kitty?' />
        <input
          type = 'number'
          name = 'sighting'
          placeholder = 'How many times have you seen this kitty?(enter a number)'/>  
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;