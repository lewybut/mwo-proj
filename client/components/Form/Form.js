import React, { Component } from 'react';
import styles from './form.scss';
import Input from '../Input/Input';

export default class About extends Component {

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
        switch (label) {
            case 'Name':

                break;
            case 'Email':

                break;
            case 'Nickname':

                break;
            case 'Password':

                break;
            default :
                break;
        }
    }

    handleChangeInput(label, value) {
        console.log(value);
        switch (label) {
            case 'Name':

                break;
            case 'Email':

                break;
            case 'Nickname':

                break;
            case 'Password':

                break;
            default :
                break;
        }
    }

    render() {
        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}
            >
                <Input
                    inputType={'text'}
                    inputLabel={'Name'}
                    isFocused={true}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                    autoFocus
                />
                <Input
                    inputType={'email'}
                    inputLabel={'Email'}
                    isFocused={false}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                />
                <Input
                    inputType={'text'}
                    inputLabel={'Nickname'}
                    isFocused={false}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                />
                <Input
                    inputType={'password'}
                    inputLabel={'Password'}
                    isFocused={false}
                    handleOnFocus={this.handleFocusInput}
                    handleOnChange={this.handleChangeInput}
                />

                {/* <label className={styles.labelStyle}>*/}
                    {/* Gender:*/}
                    {/* <select onChange={this.handleChangeGender}>*/}
                        {/* <option value="girl">Girl</option>*/}
                        {/* <option value="boy">Boy</option>*/}
                    {/* </select>*/}
                {/* </label> */}

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
