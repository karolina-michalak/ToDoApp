import React from 'react';

const Todo = props => {

    return(
        <div>
            {props.task.text} <button>done</button><button>x</button>
        </div>
    )
}
export default Todo