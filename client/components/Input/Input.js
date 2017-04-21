import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFocus() {
        const {handleOnFocus, inputLabel} = this.props;
        handleOnFocus(inputLabel);
    }

    handleChange({target: {value}}) {
        const {handleOnChange, inputLabel} = this.props;
        handleOnChange(inputLabel, value);
    }

    render() {
        const {inputType, inputLabel, isFocused, autoFocus} = this.props;

        return (
            <div className={styles.inputContainer}>
                <label className={(isFocused) ? styles.labelFocused : styles.label}>
                    {inputLabel}:
                </label>
                <input
                    className={styles.input}
                    type={inputType}
                    autoFocus={(autoFocus) ? true : false}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

Input.propTypes = {
    autoFocus: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired,
    inputType: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    handleOnFocus: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired
};
