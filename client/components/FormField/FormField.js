import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './form-field.scss';

export default class FormField extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {inputLabel, isFocused, ...otherProps} = this.props;

        return (
            <div className={styles.inputContainer}>
                <label className={(isFocused) ? styles.labelFocused : styles.label}>
                    {inputLabel}:
                </label>
                <Input
                    inputLabel={inputLabel}
                    {...otherProps}
                />
            </div>
        );
    }
}

FormField.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    inputLabel: PropTypes.string.isRequired,
};
