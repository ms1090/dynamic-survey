import React from 'react';
import PropTypes from 'prop-types';
import './radioBox.css';

/**
 * Display a radio button as per customization props
 * @param {String} className CSS class name
 * @param {String} id Input element id
 * @param {String} name Input element name
 * @param {String} label Label for input element
 * @return {React.Element} Return radio button UI
 */
const RadioBox = ({
  className,
  id,
  name,
  label,
  ...others
}) => (
  <label className={`radio-box ${className}`} htmlFor={id}>
    <input
      type="radio"
      id={id}
      name={name}
      value={label}
      {...others}
    />
    <span>{label}</span>
  </label>
);
// default values for component props
RadioBox.defaultProps = {
  className: '',
  id: '',
  name: '',
  label: '',
};
// prop types checking
RadioBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};
export default RadioBox;
