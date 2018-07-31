/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
// Middlewares
import socket from './socketMiddleware';

/**
 * code
 */
// devTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// applyMiddleware applique le middleware dans le parcours de l'action
const appliedMiddleware = applyMiddleware(socket);

// J'assemble les middlewares et les outils de dev
const enhancers = compose(appliedMiddleware, ...devTools);

// Je transmets à mon store les middlewares / enhancers
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
