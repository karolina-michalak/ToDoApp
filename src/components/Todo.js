import React from 'react';

const Todo = props => {

    const importantColor = {
        color: 'red'
    }

    const {text, date, id, active, important, finishDate} = props.task;

    if(active){
    return(
        <div>
            <div style={important ? importantColor : null}>{props.task.text}</div><button>done</button><button>x</button>
        </div>
    )}
    else{
        return(
            <div>
            {props.task.text} <button>x</button>
        </div>
        )
    }
}
export default Todo