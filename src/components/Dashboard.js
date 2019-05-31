import React, { Component } from 'react'

class Dashboard extends Component {
  	render() {
  		console.log(this.props)
    	return (
      		<div>
        		Dashboard
      		</div>
    	)
  	}
}

function mapStateToProps( {tweets} ) {
	return {
		tweetIds: Object.keys(tweets)
			.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
	}
}
export default Dashboard