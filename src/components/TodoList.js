import React from 'react';

const TodoList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Task key={task.id} task={task}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task}/>)



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