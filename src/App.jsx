import React, { Component } from 'react';
import "./App.css";
import Countdown from "./Countdown";
import EditEvent from "./Editevent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: "Event 1", hour: "14", minute: "7", },
        { id: 1, name: "Event 2", hour: "03", minute: "15" },
        { id: 2, name: "Event 3", hour: "13", minute: "22" }
      ],
      editedEvent: {
        id: 3, name: "", hour: "", minute: ""
      }
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  handleEditEvent(val) {
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      }
    })
  }

  render() {
    const events = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />;
    });
    return <div className="app">
      {events}
      <EditEvent
        onInputChange={val => this.handleEditEvent(val)}
        onSave={() => alert("Test")}
      />
    </div>
  };
}

export default App;
