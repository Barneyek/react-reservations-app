import React from "react";
import "./Editevent.css";
import PropTypes from "prop-types";

import { isValidNumberInput, parseInputAsNumber, isValidName, isValidHour, isValidMinute } from "./utils.js";


const EditEvent = props => {
	const isFormValid =
		isValidName(props.name) &&
		isValidHour(props.hour) &&
		isValidMinute(props.minute);

	const isFormEmpty =
		props.name === "" && props.hour === -1 && props.minute === -1;

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
						props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })
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
						props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })
					}
				/>
			</div>
			<div className="edit-event__button-group">
				<button disabled={!isFormValid} onClick={() => props.onSave()}>OK</button>
				<button disabled={isFormEmpty} onClick={() => props.onCancel()}>Cancel</button>
			</div>
		</div>
	);
};

EditEvent.propTypes = {
	name: PropTypes.string,
	hour: PropTypes.number,
	minute: PropTypes.number,
	onInputChange: PropTypes.func,
	onSave: PropTypes.func,
	onCancel: PropTypes.func
};

export default EditEvent; 