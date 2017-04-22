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
        const {inputType, autoFocus, inputValue} = this.props;

        return (
            <div className={styles.inputContainer}>
            {
                (inputValue) ?
                    <input
                        className={styles.input}
                        type={inputType}
                        value={inputValue || ''}
                        autoFocus={(autoFocus) ? true : false}
                    /> : <input
                        className={styles.input}
                        type={inputType}
                        autoFocus={(autoFocus) ? true : false}
                        onFocus={this.handleFocus}
                        onChange={this.handleChange}
                    />
            }
            </div>
        );
    }
}

Input.propTypes = {
    autoFocus: PropTypes.bool,
    inputValue: PropTypes.string,
    inputLabel: PropTypes.string,
    handleOnFocus: PropTypes.func,
    handleOnChange: PropTypes.func,
    inputType: PropTypes.string.isRequired
};
