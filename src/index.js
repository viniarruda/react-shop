import React from 'react';
import { render } from 'react-dom'
import { rehydrate, hotRehydrate } from "rfx-core";
import { isProduction } from "../utils/constants";
import Root from './routes/root'

import registerServiceWorker from './registerServiceWorker'

let store = rehydrate();

render(
    <Root store={isProduction ? store : hotRehydrate()} />,
    document.getElementById('root')
);
registerServiceWorker();
