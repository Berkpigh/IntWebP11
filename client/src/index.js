import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import { persistor, store } from './redux/store.js'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //  <Provider store={store}>
  //    <PersistGate persistor={persistor} loading={null}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //    </PersistGate>
  //  </Provider>
)
