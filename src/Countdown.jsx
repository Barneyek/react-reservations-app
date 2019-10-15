import React from "react";
import PropTypes from "prop-types";
import { hourMinuteToSeconds, secondsToHourMinuteSeconds } from "./utils";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = props => {
	const eventInSeconds = hourMinuteToSeconds(props.hour, props.minute);
	const nowInSeconds = hourMinuteToSeconds(props.timeNow.hour, props.timeNow.minute) + props.timeNow.seconds;

	const diffrence = (eventInSeconds - nowInSeconds);
	const diffText = diffrence > 0 ? secondsToHourMinuteSeconds(diffrence) : "Jutro";

	return (
		<div className="countdown">
			<strong>{props.name}</strong> - {diffText}
			<div className="countdown__icons">
				<i className="icon edit" onClick={() => props.onEditInit(props.id)}></i>
				<i className="icon times" onClick={() => props.onRemove(props.id)}></i>
			</div>
		</div>
	);
};

Countdown.propTypes = {
	name: PropTypes.string,
	hour: PropTypes.number,
	minute: PropTypes.number,
	onEditInit: PropTypes.func,
	onRemove: PropTypes.func,
	timeNow: PropTypes.shape({
		hour: PropTypes.number,
		minute: PropTypes.number,
		seconds: PropTypes.number
	})
};

export default Countdown;