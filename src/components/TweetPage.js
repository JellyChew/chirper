import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

class TweetPage extends Component {
	render() {
		const { id, replies } = this.props
		return(
			<div>
				<Tweet id = {id} />
				<NewTweet id={id} />
				{replies.length !== 0 && <h3 className='center'> Replies </h3>}
				<ul>
					{replies.map((replyId) => (
						<li key = {replyId}>
							<Tweet id = {replyId} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser, tweets, users }, props) {

	//this is how we are passing the tweet id to its future replies.
	//for more information, see the NewTweet.js component.
	const { id } = props.match.params

	return {
		id,
		replies: !tweets[id]
			? []
			: tweets[id].replies.sort((a, b,) => tweets[b].timestamp - tweets[a].timestamp)
	}
}

export default connect(mapStateToProps)(TweetPage)