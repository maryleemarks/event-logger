import React from "react";
import PropTypes from "prop-types";

function EventDetail(props){
  const { event } = props;
   function handleIncreaseButton() {
     const newSighting = event.sighting +1;
     props.onClickingIncrease({name: event.name, location: event.location, demeanor: event.demeanor, sighting: newSighting, id: event.id})
  }

  return (
    <React.Fragment>
      <h1>Cat Details</h1>
      <h3>{event.name} - {event.location}</h3>
      <p><em>{event.demeanor}</em></p>
      <p><em>{event.sighting}</em></p>
      <button onClick={ props.onClickingEdit }>Update Cat</button>
      <button onClick={()=> props.onClickingDelete(event.id) }>Cat Died</button>
      <button onClick={()=> props.onClickingIncrease(event.id) }>I saw This Cat Again!</button>
      <hr/>
    </React.Fragment>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func
};

export default EventDetail;