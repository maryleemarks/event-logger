import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props){
  const { event } = props;

  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({name: event.target.name.value, location: event.target.location.value, demeanor: event.target.demeanor.value, sighting: event.target.sighting.value, id: event.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditEventFormSubmission} 
        buttonText="Update Cat" />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;