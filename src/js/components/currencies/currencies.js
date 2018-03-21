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
    }

    render() {
        return (
            <Container>
                <Curriencies>
                    <Item>
                        <CurrencyCode>
                            EUR
                        </CurrencyCode>
                        <CurrencyValue>
                            1,18
                        </CurrencyValue>
                    </Item>
                    <Item className="active">
                        <CurrencyCode>
                            BRL
                        </CurrencyCode>
                        <CurrencyValue>
                            3,25
                        </CurrencyValue>
                    </Item>
                    <Item>
                        <CurrencyCode>
                            CAD
                        </CurrencyCode>
                        <CurrencyValue>
                            0,95
                        </CurrencyValue>
                    </Item>
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