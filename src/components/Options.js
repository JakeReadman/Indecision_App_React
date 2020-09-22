import React from 'react';
import Option from '../components/Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="btn btn--link" onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>
    <div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option</p>
      )}
      {props.options.map((option, idx) => (
        <Option
          key={idx}
          optionText={option}
          count={idx + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  </div>
);

export default Options;
