import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    position: relative;
`;

const Curriencies = styled.div``;

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
    }
`;

const CurrencyCode = styled.div`
    margin: 0 30px 0 0;
`;

const CurrencyValue = styled.div`
`;

const Constrols = styled.div`
    position: absolute;
    top: 50%;
    left: calc(100% + 20px);
    transform: translateY(-50%);
`;

const ButtonNext = styled.button`
`;

const ButtonPrevious = styled.button`
`;

class Currencies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: [
                {
                    code: 'EUR',
                    value: '1,18',
                    active: false
                },
                {
                    code: 'BRL',
                    value: '3,25',
                    active: true
                },
                {
                    code: 'CAD',
                    value: '0,95',
                    active: false
                }
            ]
        }
    }

    renderList() {
        return this.state.currencies.map((item, index) => (
            <Item className={ item.active ? 'active': '' } key={index}>
                <CurrencyCode>
                    { item.code }
                </CurrencyCode>
                <CurrencyValue>
                    { item.value }
                </CurrencyValue>
            </Item>
        ));
    }

    render() {
        return (
            <Container>
                <Curriencies>
                    { this.renderList() }
                </Curriencies>
                <Constrols>
                    <ButtonNext>Next</ButtonNext>
                    <ButtonPrevious>Previous</ButtonPrevious>
                </Constrols>
            </Container>
        )
    }
}

Currencies.propTypes = {

}

export default Currencies;