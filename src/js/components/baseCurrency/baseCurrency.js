import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../ui/button';

class BaseCurrency extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button>
                { this.props.children }
            </ Button>
        )
    }
}

BaseCurrency.propTypes = {
    children: PropTypes.any
}

export default BaseCurrency;