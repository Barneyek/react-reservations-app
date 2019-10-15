import React, { Component } from "react";
import uniqid from "uniqid";

import "./App.css";
import Countdown from "./Countdown.jsx";
import EditEvent from "./Editevent.jsx";

class App extends Component {
	constructor() {
		super();
		this.state = {
			events: [
				{ id: 0, name: "Event 1", hour: "14", minute: "07", },
				{ id: 1, name: "Event 2", hour: "03", minute: "15" },
				{ id: 2, name: "Event 3", hour: "13", minute: "22" }
			],
			editedEvent: {
				id:uniqid(), name: "", hour: "", minute: ""
			}
		};

		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
	}

	handleEditEvent(val) {
		this.setState(prevState => {
			return {
				editedEvent: Object.assign(prevState.editedEvent, val)
			};
		});
	}

	handleSaveEvent() {
		this.setState(prevState => ({
			events: [...prevState.events, prevState.editedEvent],
			editedEvent: {
				id: uniqid(),
				name: "",
				hour: "",
				minute: ""
			}
		}));
	}

	render() {
		const events = this.state.events.map(el => {
			return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />;
		});
		return <div className="app">
			{events}
			<EditEvent
				name={this.state.editedEvent.name}
				hour={this.state.editedEvent.hour}
				minute={this.state.editedEvent.minute}
				onInputChange={val => this.handleEditEvent(val)}
				onSave={() => this.handleSaveEvent()}
			/>
		</div>;
	}
}

export default App;
