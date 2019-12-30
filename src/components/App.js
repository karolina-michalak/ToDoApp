import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


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
        active: false,
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

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important: false, 
      active: true,
      finishDate: null
    }

    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }

  removeTask = id => {
    console.log('aaa')
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  render(){
    return (
    <div>
      <h1>To Do App</h1>
      <AddTodo add={this.addTask} />
      <TodoList tasks={this.state.tasks} remove={this.removeTask}/>
    </div>
    )
  }
}

export default App;
