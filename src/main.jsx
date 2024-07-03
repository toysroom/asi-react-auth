import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from './contexts/ThemeContextProvider.jsx';
import router from './router.jsx';
import { store } from './app/store.js';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
)
