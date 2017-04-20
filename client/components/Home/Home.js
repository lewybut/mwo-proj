import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import styles from './home.scss';
import GridElement from '../GridElement/GridElement';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={styles.contentContainer}>
                <StackGrid
                    columnWidth={160}
                >
                    <GridElement key="1" elementClassName="yellow" />
                    <GridElement key="2" elementClassName="green" />
                    <GridElement key="3" elementClassName="blue" />
                    <GridElement key="4" elementClassName="yellow" />
                    <GridElement key="5" elementClassName="green" />
                    <GridElement key="6" elementClassName="blue" />
                    <GridElement key="7" elementClassName="yellow" />
                    <GridElement key="8" elementClassName="green" />
                    <GridElement key="9" elementClassName="blue" />
                </StackGrid>
            </section>
        );
    }
}
