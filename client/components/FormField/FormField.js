import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './form-field.scss';

export default class FormField extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {inputLabel, isFocused, isCorrect, ...otherProps} = this.props;

        return (
            <div className={styles.inputContainer}>
                {
                    (isCorrect) ?
                        <label className={(isFocused) ? styles.labelFocused : styles.label}>
                            {inputLabel}:
                        </label> :
                        <label className={(isFocused) ? styles.labelFocused : styles.labelIncorrect}>
                            {inputLabel}:
                        </label>
                }
                <Input
                    inputLabel={inputLabel}
                    isCorrect={isCorrect}
                    {...otherProps}
                />
            </div>
        );
    }
}

FormField.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    inputLabel: PropTypes.string.isRequired,
};
