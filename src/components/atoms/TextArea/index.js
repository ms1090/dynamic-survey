import React from 'react';
import PropTypes from 'prop-types';
import './textArea.css';

/**
 * Display textarea element as per customization props
 * @param {String} className CSS class name
 * @param {String} id Textarea element id
 * @param {String} label Label for textarea element
 * @return {React.Element} Return textarea element UI
 */
const TextArea = ({
  className,
  id,
  label,
  ...others
}) => (
  /* eslint-disable jsx-a11y/label-has-for */
  <label className={`text-area ${className}`} htmlFor={id}>
    <span>{label}</span>
    <textarea
      id={id}
      {...others}
    />
  </label>
);
// default values for component props
TextArea.defaultProps = {
  className: '',
  id: '',
  label: '',
};
// prop types checking
TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};
export default TextArea;
