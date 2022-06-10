import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';

const divRoot = createRoot( document.querySelector( '#root' ) );
divRoot.render( <App /> )

