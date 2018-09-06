import React from 'react'
import Root from './routes'
import { render } from 'react-dom'
// Service Worker for PWA
import serviceWorkerRegister from './registerServiceWorker'

render(
  <Root />,
  document.getElementById('root')
);
serviceWorkerRegister();