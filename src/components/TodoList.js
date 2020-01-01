import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active)

    
    if (done.length >=2 ){
        done.sort((a, b) => {
            if (a.finishDate < b.finishDate) {
                return 1
            }
            if (a.finishDate > b.finishDate) {
                return -1
            }
            return 0
        })
    }

    if(active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if(a < b) return -1;
            if(a > b) return 1;
            return 0
        })
    }

    const activeTasks = active.map(task => <Todo key={task.id} task={task} remove={props.remove} changeStatus={props.changeStatus} />)
    const doneTasks = done.map(task => <Todo key={task.id} task={task} remove={props.remove}/>)

    return(
        <>
        <div>
            <h2>To do ({activeTasks.length > 0 ? activeTasks.length : null}):</h2>
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