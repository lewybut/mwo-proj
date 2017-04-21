import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './grid-element.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { elementClassName } = this.props;

        return (
            <span
                className={styles[`${elementClassName}`]}
            >
                home
                {/* <BgAnimation elementTitle="home" /> */}
            </span>
        );
    }
}

Home.propTypes = {
    elementClassName: PropTypes.string.isRequired
};
