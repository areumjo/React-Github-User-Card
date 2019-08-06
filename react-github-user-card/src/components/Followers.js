import React from 'react';

const Followers = (props) => {
    //console.log('props from Followers: ', props.user)
    return (
        <div>
            <img src={props.user.avatar_url} alt="profile photo" className="user-img"/>
            <p>login: {props.user.login}</p>
            <p>{props.user.bio}</p>
            <a href={props.user.html_url}>Go to GitHub page</a>
        </div>
    )
}

export default Followers;