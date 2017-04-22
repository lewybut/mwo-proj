import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './form.scss';
import FormField from '../FormField/FormField';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocusInput = this.handleFocusInput.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
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
            let filterInvalidateInputs = invalidateInputs.filter(invInput => invInput === input.inputLabel);
            return (
                <Input
                    key={i}
                    inputType={input.inputType}
                    inputLabel={input.inputLabel}
                    isFocused={(focusedInput === input.inputLabel) ? true : false}
                    isCorrect={(filterInvalidateInputs > 0) ? false : true}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                    autoFocus={(i === 0) ? true : false }
                />
            );
        });

        const loginInputs = inputs.map((input, i) => {
            let filterInvalidateInputs = invalidateInputs.filter(invInput => invInput === input.inputLabel);

            return (i > 1) ? (
                <FormField
                    key={i}
                    inputType={input.inputType}
                    inputLabel={input.inputLabel}
                    isFocused={(focusedInput === input.inputLabel) ? true : false}
                    isCorrect={(filterInvalidateInputs > 0) ? false : true}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                    autoFocus={(i === 2) ? true : false }
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
    setNameInputValue: PropTypes.func.isRequired,
    setEmailInputValue: PropTypes.func.isRequired,
    setNicknameInputValue: PropTypes.func.isRequired,
    setPasswordInputValue: PropTypes.func.isRequired,
    invalidateInputs: PropTypes.array.isRequired
};
