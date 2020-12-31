import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import './css/iconos.scss';
import App from './components/App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


const store = createStore(
    reducers,//Todos los reducers
    {},
)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);