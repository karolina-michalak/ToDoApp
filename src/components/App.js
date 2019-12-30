import React from 'react';

class App extends React.Component {
  counter = 4

  state = {
    tasks: [
      {
        id: 0,
        text: 'feed the cat',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'go shopping',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'take a walk',        
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'buy new house',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }
  render(){
    return (
    <div>
      <h1>To Do App</h1>
      <AddTask/>
      <TaskList/>
    </div>
    )
  }
}

export default App;
