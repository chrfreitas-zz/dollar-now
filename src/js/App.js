import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Hello = styled.div`
    color: red;
`;

ReactDOM.render(<Hello>Hello World</Hello>, document.getElementById('root'));
