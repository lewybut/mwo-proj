import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { children } = this.props;
        return (
            <div>
                <h1>Filter table</h1>
                { children }
                <footer className={footer}>
                    <Link to="/">Filterable Table</Link>
                    <Link to="/about">About</Link>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};
