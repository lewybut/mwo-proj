import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StackGrid
                columnWidth={'33%'}
            >
                <div key="key1">Item 1</div>
                <div key="key2">Item 2</div>
                <div key="key3">Item 3</div>
            </StackGrid>
        );
    }
}
