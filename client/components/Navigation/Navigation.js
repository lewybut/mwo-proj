import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import styles from './navigation.scss';
import OwnLink from '../OwnLink/OwnLink';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.handleOnLinkClick = this.handleOnLinkClick.bind(this);
    }

    handleOnLinkClick(currentTab) {
        const { setCurrentTab } = this.props;
        setCurrentTab(currentTab);
    }

    render() {
        const { currentTab, links } = this.props;
        const linksToRender = links.map((link, i) => {
            return (link.linkTitle === currentTab) ?
                <OwnLink
                    key={i}
                    handleOnClick={this.handleOnLinkClick}
                    linkTo={link.linkTo}
                    linkTitle={link.linkTitle}
                    active
                /> :
                <OwnLink
                    key={i}
                    handleOnClick={this.handleOnLinkClick}
                    linkTo={link.linkTo}
                    linkTitle={link.linkTitle}
                />;
        });

        return (
            <nav className={styles.nav}>
                <Logo />
                <ul className={styles.navLinks}>
                    {linksToRender}
                </ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    currentTab: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    setCurrentTab: PropTypes.func.isRequired
};
