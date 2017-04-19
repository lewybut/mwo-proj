import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import '../../styles/index.scss';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { children } = this.props;
        return (
            <div>
                <Nav />
                { children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};
