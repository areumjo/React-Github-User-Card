import React from 'react';
import './App.css';
import GithubList from './components/GithubList';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      github: []
    }
  }

  componentDidMount() {
    console.log('CDM running')
    this.fecthUser();
  }

  fecthUser = () => {
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

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>Github user card app</p>
        </header>
        <GithubList />
      </div>
    );
  }
}

export default App;
