import React from "react";
import "./Editevent.css";
import { isValidNumberInput } from "./utils.js";
import PropTypes from "prop-types";

const EditEvent = props => {
	return (
		<div className="edit-event">
			<div className="edit-event__input-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={props.name}
					onChange={e =>
						props.onInputChange({ [e.target.name]: e.target.value })
					}
				/>
			</div>
			<div className="edit-event__input-group">
				<label htmlFor="hour">Hour</label>
				<input
					type="tel"
					id="hour"
					name="hour"
					value={props.hour === -1 ? "" : props.hour}
					onKeyPress={e =>
						isValidNumberInput(e)
					}
					onChange={e =>
						props.onInputChange({ [e.target.name]: e.target.value })
					}
				/>
			</div>
			<div className="edit-event__input-group">
				<label htmlFor="minute">Minute</label>
				<input
					type="tel"
					id="minute"
					name="minute"
					value={props.minute === -1 ? "" : props.minute}
					onKeyPress={e =>
						isValidNumberInput(e)
					}
					onChange={e =>
						props.onInputChange({ [e.target.name]: e.target.value })
					}
				/>
			</div>
			<div className="edit-event__button-group">
				<button onClick={() => props.onSave()}>OK</button>
				<button>Cancel</button>
			</div>
		</div>
	);
};

EditEvent.propTypes = {
	name: PropTypes.string,
	hour: PropTypes.number,
	minute: PropTypes.number,
	onInputChange: PropTypes.func,
	onSave: PropTypes.func
};

export default EditEvent; 