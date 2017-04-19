import React, { Component } from 'react';
import styles from './logo.scss';

export default class Logo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ styles.logo } >
                <h1>useless app</h1>
                <h2>some weird</h2>
                <h2>things for</h2>
                <h2>today</h2>
            </div>
        );
    }
}
