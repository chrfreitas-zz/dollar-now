import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonStyled } from '../../../ui/button';

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

class Controls extends Component {
    propTypes = {
        handleChangeCurrency: PropTypes.func
    }

    render() {
        return (
            <Constrols>
                <ButtonDirections onClick={() => this.props.handleChangeCurrency(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="#FFF" d="M3.352 48.296l28.56-28.328 28.58 28.347c.397.394.917.59 1.436.59.52 0 1.04-.196 1.436-.59a2.003 2.003 0 0 0 0-2.849l-29.98-29.735c-.2-.2-.494-.375-.757-.475a2.052 2.052 0 0 0-2.166.456L.479 45.447a2.003 2.003 0 0 0 0 2.849 2.045 2.045 0 0 0 2.873 0z"/></svg>
                </ButtonDirections>
                <ButtonDirections onClick={() => this.props.handleChangeCurrency(+1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="#FFF" d="M60.533 15.733l-28.56 28.328L3.394 15.713c-.397-.394-.917-.59-1.437-.59s-1.039.196-1.436.59a2.003 2.003 0 0 0 0 2.849l29.98 29.735c.2.2.494.375.757.476.75.282 1.597.107 2.166-.456l29.981-29.735a2.003 2.003 0 0 0 0-2.849 2.044 2.044 0 0 0-2.872 0z"/></svg>
                </ButtonDirections>
            </Constrols>
        )
    }
}

export default Controls;