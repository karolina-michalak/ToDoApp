import React from 'react';

const AddTodo = () => {
    return(
        <div>
            <div>
                <input type="text" placeholder="to to" />
                <label><input type="checkbox"/> important</label>
            </div>
                <input type="date"/>
                <button>add</button>
        </div>
    )
}
export default AddTodo