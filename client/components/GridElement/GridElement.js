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
            <article
                className={styles[`${elementClassName}`]}
            >
                home
            </article>
        );
    }
}

Home.propTypes = {
    elementClassName: PropTypes.string.isRequired
};
