import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Display input element as per customization props
 * @param {String} className CSS class name
 * @param {String} id Input element id
 * @param {String} label Label for input element
 * @return {React.Element} Return input element
 */
const Input = ({
  className,
  id,
  label,
  ...others
}) => (
  <label className={`text-input ${className}`} htmlFor={id}>
    <span>{label}</span>
    <input
      id={id}
      {...others}
    />
  </label>
);
// default values for component props
Input.defaultProps = {
  className: '',
  id: '',
  label: 'Form input',
};
// prop types checking
Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};
export default Input;
