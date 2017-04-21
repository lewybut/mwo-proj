import React, { Component } from 'react';
import Form from '../Form/Form';
import styles from './login.scss';

export default class About extends Component {

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
                <Form />
            </section>
        );
    }
}
