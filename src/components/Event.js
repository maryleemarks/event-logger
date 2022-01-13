import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenEventClicked(props.id)}>
        <h3>{props.location} - {props.name}</h3>
        <p><em>{props.demeanor}</em></p>
        <p><em>{props.sighting}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  demeanor: PropTypes.string,
  sighting: PropTypes.number,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;