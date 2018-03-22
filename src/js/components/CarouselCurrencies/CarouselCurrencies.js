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

    handleChangeCurrency = (moviment) => {
        this.setState(prevState => ({
            currencies: this.changeActiveItem(moviment, prevState.currencies),
            activePosition: this.changePosition(moviment, prevState.activePosition)
        }));
    }

    changeActiveItem(moviment, currencies){
        const currentIndexActive = currencies.findIndex(item => item.active);

        return currencies.map((item, index) => {
            const nextIndexActive = currentIndexActive + moviment;

            item.active = false;

            if(nextIndexActive === index){
                item.active = true
            }

            return item;
        })
    }

    changePosition(moviment, currentPosition) {
        const toDown = Math.sign(moviment);

        if (toDown === -1) {
            return currentPosition + 55;
        }

        return currentPosition - 55
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