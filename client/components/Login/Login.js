import React, { Component } from 'react';
import Form from '../Form/Form';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.body.style.backgroundColor = 'tomato';
    }

    render() {
        return (
            <section>
                <h2>Join our community!</h2>
                <Form />
            </section>
        );
    }
}
