import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';
import styles from './nav.scss';

export default class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.nav}>
                <Logo />
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
