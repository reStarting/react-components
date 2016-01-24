import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'

export default function createStoreWithMiddleware(reducers, initial) {
	return applyMiddleware(createLogger())(createStore)(reducers, initial);
}