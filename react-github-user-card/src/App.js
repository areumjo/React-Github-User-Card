import React from 'react';
import './App.css';
import GithubList from './components/GithubList';
import Followers from './components/Followers';
import { Input, InputGroup, Button } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      github: [],
      followers: [],
      visible: false,
      user: "areumjo"
    }
  }

  componentDidMount() {
    console.log('CDM running')
    this.fetchUser();
    this.fetchFollower();
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
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
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
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

  handleUserSearch = e => {
    this.setState( {user: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchUser();
    this.fetchFollower();
    console.log('handleSubmit click')
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <header className="App-header">
          <p>Github user card app</p>
        </header>
        <InputGroup>
          <Input sm="4"
            placeholder="search github"
            onChange={this.handleUserSearch}/>
          <Button onClick={this.handleSubmit} color="success">Search</Button>
        </InputGroup>
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
