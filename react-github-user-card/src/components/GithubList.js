import React from 'react';

class GithubList extends React.Component {
    
    render() {
        console.log('inside of githublist render')
        if(!this.props) {
            return <h2>Loading...</h2>
        }
        return(
            <div className="card-container">
                <img src={this.props.user.avatar_url} alt="profile" className="profile-img"/>
                <div className="card-content">
                    <h3>{this.props.user.name}</h3><hr />
                    <p>{this.props.user.bio}</p>
                    <h6>Follower: {this.props.user.followers}</h6>
                    <h6>Following: {this.props.user.following}</h6>
                    <a href={this.props.user.html_url}>Go to my GitHub page</a>
                </div>
            </div>
        )
    }
}

export default GithubList;