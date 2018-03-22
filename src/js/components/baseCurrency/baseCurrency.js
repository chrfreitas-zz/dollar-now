import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonStyled } from '../../ui/button';

const BaseCurrencyStyled = ButtonStyled.extend`
    position: absolute;
    top: 40px;
    right: 50px;
`;

class BaseCurrency extends Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <BaseCurrencyStyled>
                { this.props.children }
            </BaseCurrencyStyled>
        )
    }
}

export default BaseCurrency;