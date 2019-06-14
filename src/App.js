import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: '1',
        title: 'A',
        completed: false
      },
      {
        id: '2',
        title: 'B',
        completed: false
      },
      {
        id: '3',
        title: 'C',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
