import React from 'react';

const Todo = props => {

    const importantColor = {
        color: 'red'
    }

    const {text, date, id, active, important, finishDate} = props.task;

    if(active){
    return(
        <div>
            <div style={ important ? importantColor : null}>{text} - to {date}</div>
            <button onClick={() => props.changeStatus(id)}>done</button>
            <button onClick={() => props.remove(id)}>x</button>
        </div>
    )}
    else{
        const finish = new Date(finishDate).toLocaleString()
        return(
            <div>
                <div style={important ? importantColor : null}>
                {text} - done {finish}
                <button onClick={() => props.remove(id)}>x</button>
                </div>
            </div>
        )
    }
}
export default Todo