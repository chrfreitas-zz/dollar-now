import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Container from './components/container/container';

injectGlobal`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
    }
`

const App = (
    <Container>Hello World</Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
