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
				{ id: 0, name: "Event 1", hour: 14, minute: 7, },
				{ id: 1, name: "Event 2", hour: 3, minute: 15 },
				{ id: 2, name: "Event 3", hour: 13, minute: 22 }
			],
			editedEvent: {
				id: uniqid(), name: "", hour: -1, minute: -1
			}
		};

		this.handleEditEvent = this.handleEditEvent.bind(this);
		this.handleSaveEvent = this.handleSaveEvent.bind(this);
		this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
		this.handleEditInit = this.handleEditInit.bind(this);
	}

	handleRemoveEvent(id) {
		this.setState(prevState => ({
			events: prevState.events.filter(el => el.id !== id)
		}));
	}

	handleEditEvent(val) {
		this.setState(prevState => {
			return {
				editedEvent: Object.assign(prevState.editedEvent, val)
			};
		});
	}

	handleSaveEvent() {
		this.setState(prevState => {
			const editedEventExists = prevState.events.find(
				el => el.id === prevState.editedEvent.id
			);

			let updatedEvents;
			if (editedEventExists) {
				updatedEvents = prevState.events.map(el => {
					if (el.id === prevState.editedEvent.id)
						return prevState.editedEvent;
					else
						return el;
				});
			}
			else {
				updatedEvents = [...prevState.events, prevState.editedEvent];
			}

			return {
				events: updatedEvents,
				editedEvent: {
					id: uniqid(),
					name: "",
					hour: -1,
					minute: -1
				}
			};
		});
	}

	handleEditInit(id) {
		this.setState(prevState => ({
			editedEvent: { ...prevState.events.find(el => el.id === id) }
		}));
	}

	render() {
		const events = this.state.events.map(el => {
			return (
				<Countdown
					key={el.id}
					id={el.id}
					name={el.name}
					hour={el.hour}
					minute={el.minute}
					onRemove={id => this.handleRemoveEvent(id)}
					onEditInit={id => this.handleEditInit(id)}
				/>
			);
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
