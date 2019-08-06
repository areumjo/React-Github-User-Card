import React from 'react';

class GithubList extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        console.log('inside of githublist render')
        if(!this.props) {
            return <h2>Loading...</h2>
        }
        return(
            <div>
                <img src={this.props.user.avatar_url} alt="profile photo" className="user-img"/>
                <p>Name: {this.props.user.name}</p>
                <p>{this.props.user.bio}</p>
                <p>Follower: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <a href={this.props.user.html_url}>Go to gitHub page</a>
            </div>
        )
    }
}

export default GithubList;