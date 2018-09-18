import React from 'react';
import PropTypes from 'prop-types';
import './selectBox.css';

/**
 * Display a select box as per customization props
 * @param {String} className CSS class name
 * @param {String} id Input element id
 * @param {String} name Input element name
 * @param {String} label Label for input element
 * @param {Array} options Options for select element
 * @return {React.Element} Return select element UI
 */
const SelectBox = ({
  className,
  id,
  name,
  label,
  options,
  ...others
}) => (
  /* eslint-disable jsx-a11y/label-has-for */
  <label className={`select-box ${className}`} htmlFor={id}>
    <span>{label}</span>
    <select
      id={id}
      {...others}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);
// default values for component props
SelectBox.defaultProps = {
  className: '',
  id: '',
  name: '',
  label: '',
  options: [],
};
// prop types checking
SelectBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
};
export default SelectBox;
