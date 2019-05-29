import { combineReducers } from 'redux'
import authedUser from './authed/User'
import users from './users'
import tweets from './tweets'

export default combineReducers({
	authedUser,
	users,
	tweets
})