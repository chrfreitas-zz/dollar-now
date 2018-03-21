import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonStyled } from '../../ui/button';

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

const Constrols = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
`;

const ButtonDirections = ButtonStyled.extend`
    border: none;
    padding: 5px 0;
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
                <Constrols>
                    <ButtonDirections onClick={() => this.handleChangeCurrency(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="#FFF" d="M3.352 48.296l28.56-28.328 28.58 28.347c.397.394.917.59 1.436.59.52 0 1.04-.196 1.436-.59a2.003 2.003 0 0 0 0-2.849l-29.98-29.735c-.2-.2-.494-.375-.757-.475a2.052 2.052 0 0 0-2.166.456L.479 45.447a2.003 2.003 0 0 0 0 2.849 2.045 2.045 0 0 0 2.873 0z"/></svg>
                    </ButtonDirections>
                    <ButtonDirections onClick={() => this.handleChangeCurrency(+1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="#FFF" d="M60.533 15.733l-28.56 28.328L3.394 15.713c-.397-.394-.917-.59-1.437-.59s-1.039.196-1.436.59a2.003 2.003 0 0 0 0 2.849l29.98 29.735c.2.2.494.375.757.476.75.282 1.597.107 2.166-.456l29.981-29.735a2.003 2.003 0 0 0 0-2.849 2.044 2.044 0 0 0-2.872 0z"/></svg>
                    </ButtonDirections>
                </Constrols>
            </Container>
        )
    }
}

export default Currencies;