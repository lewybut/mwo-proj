import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import GridElement from '../GridElement/GridElement';
import styles from './home.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentWillMount() {
        document.body.style.backgroundColor = '#F0FFF0';
    }

    handleMouseEnter() {
        const { setHoverWidth } = this.props;
        setHoverWidth(true);
    }

    handleMouseLeave() {
        const { setHoverWidth } = this.props;
        setHoverWidth(false);
    }

    render() {
        const { isHovered, ...otherProps } = this.props;

        return (
            <section
                className={styles.contentContainer}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <StackGrid
                    columnWidth={160}
                    gutterWidth={(isHovered) ? 20 : 10}
                    gutterHeight={(isHovered) ? 20 : 10}
                >
                    <GridElement key="1" elementClassName="yellow" {...otherProps} />
                    <GridElement key="2" elementClassName="green" {...otherProps} />
                    <GridElement key="3" elementClassName="blue" {...otherProps} />
                    <GridElement key="4" elementClassName="yellow" {...otherProps} />
                    <GridElement key="5" elementClassName="green" {...otherProps} />
                    <GridElement key="6" elementClassName="blue" {...otherProps} />
                    <GridElement key="7" elementClassName="yellow" {...otherProps} />
                    <GridElement key="8" elementClassName="green" {...otherProps} />
                    <GridElement key="9" elementClassName="blue" {...otherProps} />
                </StackGrid>
            </section>
        );
    }
}

Home.propTypes = {
    isHovered: PropTypes.bool.isRequired,
    setHoverWidth: PropTypes.func.isRequired
};
