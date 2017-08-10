import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import PlayerReducer from './reducers/player';
import Scoreboard from './containers/Scoreboard';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    PlayerReducer,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard state={store.getState()}/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
