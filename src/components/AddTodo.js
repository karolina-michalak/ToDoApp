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

    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const {text, checked, date} = this.state
        if(text.length > 2){
            const add = this.props.add(text, checked, date)

            if(add){
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate
                })
            }
        }else{
            alert('too short')
        }
    }



    render(){
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31'

        return(
            <div>
                <div>
                    <input type="text" placeholder="to do" value={this.state.text} onChange={this.handleInputChange}/>
                    <label htmlFor="important"><input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} id="important"/> important</label>
                </div>
                    <label>deadline date: <input type="date" onChange={this.handleDate} min={this.minDate} max={maxDate}/></label>
                    <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}
export default AddTodo