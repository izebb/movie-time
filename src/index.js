import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { AppContainer } from './container/AppContainer';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<AppContainer />, root);
