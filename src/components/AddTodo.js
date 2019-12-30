import React from 'react';

class AddTodo extends React.Component {
    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckboxChange = e => {
        this.setState({
            checked: e.target.checked
        })
    }



    render(){
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31'
        return(
            <div>
                <div>
                    <input type="text" placeholder="to do" value={this.state.text} onChange={this.handleInputChange}/>
                    <label><input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange}/> important</label>
                </div>
                    <label>deadline date: <input type="date" min={this.minDate} max={maxDate}/></label>
                    <button onClick={this.addTask}>add</button>
            </div>
        )
    }
}
export default AddTodo