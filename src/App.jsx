import React, { Component } from 'react';
import "./App.css";
import Countdown from "./Countdown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: "Event 1", time: "7:00" },
        { id: 1, name: "Event 2", time: "15:00" },
        { id: 2, name: "Event 3", time: "22:00" }
      ]
    };
  }
  render() {
    const events = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} time={el.time} />;
    });
    return <div className="app">{events}</div>;
  }
}

export default App;
