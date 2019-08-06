import React from 'react';

class GithubList extends React.Component {
    constructor() {
        super();
        this.state={
            state: 'hi'
        }
    }
    render() {
        return(
            <div>
                <p>testing</p>
                <p>state: {this.state.state}</p>
            </div>
        )
    }
}

export default GithubList;