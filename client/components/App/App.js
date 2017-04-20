import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './app.scss';
import NavigationContainer from '../../containers/NavigationContainer/NavigationContainer';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { children } = this.props;
        return (
            <div>
                <NavigationContainer />
                <section className={styles.container}>
                    { children }
                </section>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};
