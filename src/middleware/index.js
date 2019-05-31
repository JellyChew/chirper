import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

//if you import "middleware" from the middleware folder,
//this is what gets imported
export default applyMiddleware(
	thunk,
	logger,
)