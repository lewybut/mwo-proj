import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './own-link.scss';

export default class OwnLink extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { handleOnClick, linkTitle } = this.props;
        handleOnClick(linkTitle);
    }

    render() {
        const { linkTo, linkTitle, active } = this.props;

        return (
            <li
                className={(active) ? `${styles.active} ${styles.listItem}` : styles.listItem}
                onClick={this.handleClick}
            >
                <Link to={linkTo}>{linkTitle}</Link>
            </li>
        );
    }
}

OwnLink.propTypes = {
    linkTo: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    active: PropTypes.bool
};
