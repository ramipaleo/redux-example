import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the roor reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create a object for default data
const defaulState = {
	posts,
	comments
}

const store = createStore(rootReducer, defaulState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;