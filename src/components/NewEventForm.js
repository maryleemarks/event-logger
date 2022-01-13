import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewEventForm(props){
  
  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({name: event.target.name.value, location: event.target.location.value, demeanor: event.target.demeanor.value, sighting: event.target.sighting.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewEventFormSubmission}
        buttonText="Add Kitty!" />
    </React.Fragment>
  );
}




NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;