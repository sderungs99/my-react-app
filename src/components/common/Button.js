import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.buttonLabel}</button>
    );
};

Button.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;