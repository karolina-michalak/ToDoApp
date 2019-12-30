import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Todo key={task.id} task={task}/>)
    const doneTasks = done.map(task => <Todo key={task.id} task={task}/>)

    return(
        <>
        <div>
            <h2>To do:</h2>
            {activeTasks.length > 0 ? activeTasks : 'nothing to do'}
        </div>
        <hr/>
        <div>
            <h2>Done:</h2>
            {doneTasks}
        </div>
        </>
    )
}
export default TodoList