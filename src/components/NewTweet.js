import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
	state = {
		text: '',
		home: false,
	}

	handleChange = (e) => {
		const text = e.target.value

		this.setState(() => ({
			text
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault() 
		const { text } = this.state
		const { dispatch, id } = this.props

		/*
		id will only exist if this component is rendered on a page of a specific tweet,
		meaning that the new tweet is a reply to the tweet on which page it is rendered.
		In such a case, the new tweet will be added as a reply to said tweet; otherwise,
		it will be created as a brand new tweet.
		*/
		dispatch(handleAddTweet(text, id))

		this.setState(() => ({
			text: '',
			home: id ? false : true,
		}))
	}

	render() {
		const { text, home } = this.state
		const tweetLeft = 280 - text.length 

		if (home === true) {
			return <Redirect to='/' />
		}

		return (
			<div>
				<h3 className='center'> Compose New Tweet </h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<textarea
						placeholder="What's up?"
						value = { text }
						onChange = { this.handleChange }
						className = 'textarea'
						maxLength = { 280 }
					/>
					{ tweetLeft <= 100 && (
						<div className='tweet-length'>
							{tweetLeft}
						</div>
					)}
					<button className='btn' type='submit' disabled={text===''}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewTweet)