import React from 'react';
import "./Editevent.css";

const EditEvent = props => {
  return (
    <div className="edit-event">
      <div className="edit-event__input-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={e => props.onInputChange({ [e.target.name]: e.target.value })} />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="hour">Hour</label>
        <input type="tel" id="hour" name="hour" onChange={e => props.onInputChange({ [e.target.name]: e.target.value })} />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="minute">Minute</label>
        <input type="tel" id="minute" name="minute" onChange={e => props.onInputChange({ [e.target.name]: e.target.value })} />
      </div>
      <div className="edit-event__button-group">
        <button onClick={() => props.onSave()}>OK</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditEvent; 