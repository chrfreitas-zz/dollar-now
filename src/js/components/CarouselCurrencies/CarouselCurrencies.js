import React, { Component } from 'react';
import styled from 'styled-components';

import Controls from './Controls/Controls';
import Items from './Items/Items';

const Container = styled.div`
    position: relative;
    width: 330px;
    height: 75px;
`;

class CarouselCurrencies extends Component {
    state = {
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

    handleChangeCurrency = (to) => {
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
                <Items currencies={this.state.currencies} activePosition={this.state.activePosition}/>
                <Controls handleChangeCurrency={this.handleChangeCurrency} />
            </Container>
        )
    }
}

export default CarouselCurrencies;