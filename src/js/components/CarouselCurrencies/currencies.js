import React, { Component } from 'react';
import styled from 'styled-components';

import Controls from './Controls/Controls';

const Container = styled.div`
    position: relative;
    width: 330px;
    height: 75px;
`;

const CurrenciesContainer = styled.div`
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
            ],
            activePosition: -75
        }
    }

    renderList() {
        return this.state.currencies.map((item, index) => (
            <Item className={ item.active ? 'active': '' } key={index}>
                <CurrencyCode>{ item.code }</CurrencyCode>
                <div>{ item.value }</div>
            </Item>
        ));
    }

    handleChangeCurrency(to) {
        const indexActive = this.state.currencies.findIndex(item => item.active);

        this.setState(prevState => ({
            currencies: prevState.currencies.map((item, index) => {
                item.active = false;

                if((indexActive + to)  === index){
                    item.active = true
                }

                return item;
            }),
            activePosition: (Math.sign(to) === -1) ? prevState.activePosition + 55 : prevState.activePosition - 55
        }));
    }

    render() {
        return (
            <Container>
                <CurrenciesContainer style={ {'top': this.state.activePosition} }>
                    { this.renderList() }
                </CurrenciesContainer>
                <Constrols handleChangeCurrency={this.handleChangeCurrency} />
            </Container>
        )
    }
}

export default Currencies;