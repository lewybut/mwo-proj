import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './form.scss';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlurInput = this.handleBlurInput.bind(this);
        this.handleFocusInput = this.handleFocusInput.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleBlurInput() {
        const {cleanFocusedInput} = this.props;
        cleanFocusedInput();
    }

    handleFocusInput(label) {
        const {setFocusedInput} = this.props;
        setFocusedInput(label);
    }

    handleChangeInput(label, value) {
        const {
            setNameInputValue,
            setEmailInputValue,
            setNicknameInputValue,
            setPasswordInputValue
        } = this.props;
        switch (label) {
            case 'Name':
                setNameInputValue(value);
                break;
            case 'Email':
                setEmailInputValue(value);
                break;
            case 'Nickname':
                setNicknameInputValue(value);
                break;
            case 'Password':
                setPasswordInputValue(value);
                break;
            default :
                break;
        }
    }

    render() {
        const {inputs, focusedInput, loginComponent, invalidateInputs} = this.props;

        const signUpInputs = inputs.map((input, i) => {
            let isCorrect = [...invalidateInputs].filter(invInput => invInput === input.inputLabel);
            return (
                <FormField
                    key={i}
                    inputType={input.inputType}
                    inputLabel={input.inputLabel}
                    isFocused={focusedInput === input.inputLabel}
                    isCorrect={isCorrect.length === 0}
                    inputMessage={input.inputMessage}
                    handleOnBlur={this.handleBlurInput}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                    autoFocus={i === 0}
                />
            );
        });

        const loginInputs = inputs.map((input, i) => {
            let isCorrect = [...invalidateInputs].filter(invInput => invInput === input.inputLabel);
            return (i > 1) ? (
                <FormField
                    key={i}
                    inputType={input.inputType}
                    inputLabel={input.inputLabel}
                    isFocused={focusedInput === input.inputLabel}
                    isCorrect={isCorrect.length === 0}
                    inputMessage={input.inputMessage}
                    handleOnBlur={this.handleBlurInput}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                    autoFocus={i === 2}
                    loginComponent
                />
            ) : '';
        });

        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}
            >

                {
                    (loginComponent) ? loginInputs : signUpInputs
                }

                {/* <label className={styles.labelStyle}>*/}
                {/* Gender:*/}
                {/* <select onChange={this.handleChangeGender}>*/}
                {/* <option value="girl">Girl</option>*/}
                {/* <option value="boy">Boy</option>*/}
                {/* </select>*/}
                {/* </label> */}

                <Input inputType="submit" inputValue="Submit" />
            </form>
        );
    }
}

Form.propTypes = {
    loginComponent: PropTypes.bool,
    focusedInput: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    inputs: PropTypes.array.isRequired,
    setFocusedInput: PropTypes.func.isRequired,
    cleanFocusedInput: PropTypes.func.isRequired,
    setNameInputValue: PropTypes.func.isRequired,
    setEmailInputValue: PropTypes.func.isRequired,
    setNicknameInputValue: PropTypes.func.isRequired,
    setPasswordInputValue: PropTypes.func.isRequired,
    invalidateInputs: PropTypes.object.isRequired
};
