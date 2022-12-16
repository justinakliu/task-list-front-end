import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  // what does the above code mean?

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => props.onSetComplete(props.id)}
      >
        {props.title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => props.onUnregisterTask(props.id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onSetComplete: PropTypes.func.isRequired,
  onUnregisterTask: PropTypes.func.isRequired,
};

export default Task;
