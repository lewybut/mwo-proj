import React, { Component } from 'react';
import FormContainer from '../../containers/FormContainer/FormContainer';
import styles from './login.scss';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.body.style.backgroundColor = '#00bcd6';
    }

    render() {
        return (
            <section className={styles.loginSection}>
                <h2>Join our community!</h2>
                <FormContainer />
            </section>
        );
    }
}
