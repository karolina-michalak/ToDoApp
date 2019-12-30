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
        finishDate: null,
        date: '2019-12-31'
      },
      {
        id: 1,
        text: 'go shopping',
        important: true,
        active: true,
        finishDate: null,
        date: '2020-02-02'
      },
      {
        id: 2,
        text: 'take a walk',        
        important: true,
        active: true,
        finishDate: null,
        date: '2020-03-02'

      },
      {
        id: 3,
        text: 'buy new house',
        important: false,
        active: true,
        finishDate: null,
        date: '2020-01-11'

      },
    ]
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important, 
      active: true,
      finishDate: null
    }

    this.counter++
    this.setState(prevState => ({
      tasks: [task, ...prevState.tasks]
    }))
  }

  removeTask = id => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  handleStatusChange = id => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task =>{
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }


  render(){
    return (
    <div>
      <h1>To Do App</h1>
      <AddTodo add={this.addTask}/>
      <TodoList tasks={this.state.tasks} remove={this.removeTask} changeStatus={this.handleStatusChange} />
    </div>
    )
  }
}

export default App;
