import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { fetchGitRepo } from './actions/cacheGitListAction';

const store = configureStore();
//debugger;
store.dispatch(fetchGitRepo());

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
