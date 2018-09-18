import React from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

/**
 * Display a progress element as per customization props
 * @param {String} className CSS class name
 * @return {React.Element} Return progress element UI
 */
const ProgressBar = ({
  className,
  ...others
}) => (
  <progress
    className={`progress-bar ${className}`}
    {...others}
  />
);
// default values for component props
ProgressBar.defaultProps = {
  className: '',
};
// prop types checking
ProgressBar.propTypes = {
  className: PropTypes.string,
};
export default ProgressBar;
