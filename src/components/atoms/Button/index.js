import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Display a button as per customization props
 * @param {String} className CSS class name
 * @param {React.Element} children Button element children
 * @param {Boolean} primary Is button primary
 * @param {Boolean} secondary Is button secondary
 * @param {Function} onClick Click event handler function
 * @return {React.Element} Return Button component UI
 */
const Button = ({
  className,
  children,
  primary,
  secondary,
  onClick,
  ...others
}) => (
  <button
    className={`button ${className}${primary ? ' button-primary' : ''}${secondary ? ' button-secondary' : ''}`}
    onClick={onClick}
    type="button"
    {...others}
  >
    {children}
  </button>
);
// default values for component props
Button.defaultProps = {
  className: '',
  children: null,
  primary: false,
  secondary: false,
  onClick: null,
};
// prop types checking
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string || PropTypes.element,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
