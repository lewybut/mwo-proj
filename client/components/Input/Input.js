import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleBlur({target: {value}}) {
        const {handleOnBlur, inputLabel} = this.props;
        if (handleOnBlur) {
            handleOnBlur(inputLabel, value);
        }
    }

    handleFocus() {
        const {handleOnFocus, inputLabel} = this.props;
        if (handleOnFocus) {
            handleOnFocus(inputLabel);
        }
    }

    handleChange({target: {value}}) {
        const {handleOnChange, inputLabel} = this.props;
        if (handleOnChange) {
            handleOnChange(inputLabel, value);
        }
    }

    render() {
        const {inputType, autoFocus, inputValue, isCorrect} = this.props;

        return (
            <div className={styles.inputContainer}>
                {
                    (inputValue) ?
                        <input
                            className={styles.input}
                            type={inputType}
                            value={inputValue || ''}
                            autoFocus={(autoFocus) ? true : false}
                        /> :
                        <input
                            className={(isCorrect) ? styles.input : styles.incorrectInput}
                            type={inputType}
                            autoFocus={(autoFocus) ? true : false}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            onChange={this.handleChange}
                        />
                }
            </div>
        );
    }
}

Input.propTypes = {
    isCorrect: PropTypes.bool,
    autoFocus: PropTypes.bool,
    inputValue: PropTypes.string,
    inputLabel: PropTypes.string,
    handleOnBlur: PropTypes.func,
    handleOnFocus: PropTypes.func,
    handleOnChange: PropTypes.func,
    inputType: PropTypes.string.isRequired
};
