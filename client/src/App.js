import React, { Component } from 'react';

class App extends Component {
  state = { things: [] };

  componentDidMount() {
    const endpointUrl = 'http://127.0.0.1:3001/things';

    fetch(endpointUrl)
      .then(data => data.json())
      .then(things => this.setState({ things }));
  }

  render() {
    return (
      <div>
        <h4>Things:</h4>
        <ul>
          {this.state.things.map(thing => (
            <li key={thing}>{thing}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
