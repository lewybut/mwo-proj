import React, { Component } from 'react';
import styles from './logo.scss';

export default class Logo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className={ styles.logo } >logos</h1>
        );
    }
}
