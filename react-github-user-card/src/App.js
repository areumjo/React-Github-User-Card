import React from 'react';
import './App.css';
import GithubList from './components/GithubList';
import Followers from './components/Followers';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      github: [],
      followers: [],
      visible: false,
    }
  }

  componentDidMount() {
    console.log('CDM running')
    this.fetchUser();
    this.fetchFollower();
  }

  fetchUser = () => {
    fetch('https://api.github.com/users/areumjo')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        return this.setState({ github: data })
      })
      .catch(err => console.log('API is down: ', err));
  }

  fetchFollower = () => {
    fetch(`https://api.github.com/users/areumjo/followers`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        return this.setState({ followers: data })
      })
      .catch(err => console.log('Follower API is down: ', err));
  }

  handleClick = () => {
    console.log('handleClick: visible state:', this.state.visible);
    this.setState({ visible: !this.state.visible })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>Github user card app</p>
        </header>
        <GithubList user={this.state.github}/>
        <Button onClick={this.handleClick}>Click to see my followers</Button>
        <div className={this.state.visible ? 'visibility' : 'hidden'}>
          {this.state.followers.map(e => <Followers user={e} key={e.id}/>)}
        </div>
        
      </div>
    );
  }
}

export default App;
