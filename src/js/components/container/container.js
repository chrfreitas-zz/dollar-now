import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ConstainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

class Container extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ConstainerStyled>
                { this.props.children }
            </ConstainerStyled>
        )
    }
}

Container.propTypes = {
    children: PropTypes.any.isRequired
}

export default Container;