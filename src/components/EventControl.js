import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';
import EventDetail from './EventDetail';
import EditEventForm from './EditEventForm';

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEventList: [],
      selectedEvent: null,
      editing: false

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewEventToList = (newEvent) => {
    const newMainEventList = this.state.mainEventList.concat(newEvent);
    this.setState({mainEventList: newMainEventList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
    this.setState({selectedEvent: selectedEvent});
  }

  handleDeletingEvent = (id) => {
    const newMainEventList = this.state.mainEventList.filter(event => event.id !== id);
    this.setState({
      mainEventList: newMainEventList,
      selectedEvent: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingEventInList = (eventToEdit) => {
    const editedMainEventList = this.state.mainEventList
      .filter(event => event.id !== this.state.selectedEvent.id)
      .concat(eventToEdit);
    this.setState({
        mainEventList: editedMainEventList,
        editing: false,
        selectedEvent: null
      });
  }

  handleIncreaseEvent = (id) => {
    // console.log(this.state.mainEventList.sighting)
    // we check if our eventlist that contains all the events has more than one event
    if (this.state.mainEventList.length>1){
our method within event detail will pull the id of the selected event. below 
      const selectedEvent = this.state.mainEventList.filter(event => event.id === id) [0]

      selectedEvent.sighting ++;
      const newMainEventList = this.state.mainEventList.filter(event => event.id !== id).concat(selectedEvent)
      this.setState({
        mainEventList: newMainEventList
      });
    } else {
      const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0]
      selectedEvent.sighting ++;
      const newEventListArray = []
      const changedEventArray = newEventListArray.concat(selectedEvent)
      this.setState({
        mainEventList: changedEventArray
      });
    }
  }

    //this.setState({ sighting: this.state.sighting + 1})
  // function handleIncreaseButton() {
  //   const newSighting = event.sighting +1;
  //   props.onClickingIncrease({name: event.name, location: event.location, demeanor: event.demeanor, sighting: newSighting, id: event.id})
  // }

  //  OR const newSighting = event.state.sighting +1;

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditEventForm event = {this.state.selectedEvent} onEditEvent = {this.handleEditingEventInList} />
      buttonText = "Return to Cat List";
    } else if (this.state.selectedEvent != null) {
      currentlyVisibleState = <EventDetail event = {this.state.selectedEvent} onClickingDelete = {this.handleDeletingEvent} onClickingEdit = {this.handleEditClick} onClickingIncrease = {this.handleIncreaseEvent}/>
      buttonText = "Return to Cat List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewEventForm onNewEventCreation={this.handleAddingNewEventToList}  />;
      buttonText = "Return to Cat List";
    } else {
      currentlyVisibleState = <EventList eventList={this.state.mainEventList} onEventSelection={this.handleChangingSelectedEvent} />;
      buttonText = "Add Cat";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default EventControl;