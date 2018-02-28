import { combineReducers } from 'redux';
import gitRepoList from './gitReducer';

const rootReducer = combineReducers({
	gitRepoList
});


export default rootReducer;