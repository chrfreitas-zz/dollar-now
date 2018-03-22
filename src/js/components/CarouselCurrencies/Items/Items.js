import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemsContainer = styled.div`
    position: absolute;
    top: 0;
    transition: top .4s;
    transform: translateX(-50%);
    left: 50%;
`;

const Item = styled.div`
    font-size: 30px;
    margin: 20px;
    opacity: .2;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &.active {
        font-size: 60px
        opacity: 1;
        transition: opacity .3s, font-size .3s;
    }
`;

const CurrencyCode = styled.div`
    margin: 0 30px 0 0;
`;

class Items extends Component {
    static propTypes = {
        currencies: PropTypes.array,
        activePosition: PropTypes.number
    }

    renderList() {
        return this.props.currencies.map((item, index) => (
            <Item className={ item.active ? 'active': '' } key={index}>
                <CurrencyCode>{ item.code }</CurrencyCode>
                <div>{ item.value }</div>
            </Item>
        ));
    }

    render() {
        return (
            <ItemsContainer style={ {'top': this.props.activePosition} }>
                { this.renderList() }
            </ItemsContainer>
        )
    }
}

export default Items;