import React, { Component } from 'react';
import styles from './form.scss';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeNickname = this.handleChangeNickname.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }

    handleChangeName({ target: { value } }) {
        console.log(value);
    }

    handleChangeGender({ target: { value } }) {
        console.log(value);
    }

    handleChangeEmail({ target: { value } }) {
        console.log(value);
    }

    handleChangeNickname({ target: { value } }) {
        console.log(value);
    }

    handleChangePassword({ target: { value } }) {
        console.log(value);
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label className={styles.labelStyle}>
                        Name:
                        <input
                            type="text"
                            onChange={this.handleChangeName}
                        />
                    </label>
                    <label className={styles.labelStyle}>
                        Gender:
                        <select onChange={this.handleChangeGender}>
                            <option value="girl">Girl</option>
                            <option value="boy">Boy</option>
                        </select>
                    </label>
                    <label className={styles.labelStyle}>
                        Email:
                        <input
                            type="email"
                            onChange={this.handleChangeEmail}
                        />
                    </label>
                    <label className={styles.labelStyle}>
                        Nickname:
                        <input
                            type="text"
                            onChange={this.handleChangeNickname}
                        />
                    </label>
                    <label className={styles.labelStyle}>
                        Password:
                        <input
                            type="password"
                            onChange={this.handleChangePassword}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </section>
        );
    }
}
