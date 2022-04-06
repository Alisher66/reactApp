import React from "react";
import "./style.css";

class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text:"",
            notes: []
        }
    }

    onChangeInput(e) {
        this.setState({
            text:e.target.value,
        })
    }
    changeStatus(e) {
        this.state.notes[+e.target.dataset.id].done = !this.state.notes[+e.target.dataset.id].done
        this.setState({
            notes: [...this.state.notes]
        })
    }
    addItems(e){
        if(e.key !== "Enter") return;
        const note = {text: this.state.text, done: false}
        this.state.notes.push(note);
        this.setState({
            text:"",
            notes: [...this.state.notes],
            index:"",
        });

    }
    
    showNewItems(){
        return (
            <>
                {this.state.notes.map((item,index) =>{
                    if(!item.done)
                    return (
                        <label htmlFor={index+"item"} >
                            {item.text}
                            <input type="checkbox" id={index+"item"} data-id={index} onChange={this.changeStatus.bind(this)} />
                        </label>
                    )
                })}
            </>
        );
    }
    showOldItems() {
        return(
        <>
            {this.state.notes.map((item,index) =>{
                if(item.done)
                return (
                    <label htmlFor={index+"itemDone"} >
                        {item.text}
                        <input type="checkbox" checked id={index+"itemDone"} data-id={index} onChange={this.changeStatus.bind(this)} />
                    </label>
                )
            })}
        </>
        )
    }

    showItems() {
        return (
            <div>
                <p>New</p>
                {this.showNewItems.call(this)}
                <p>Done</p>
                {this.showOldItems.call(this)}
                
            </div>
        );
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="..."  value={this.state.text} onKeyDown={this.addItems.bind(this)} onChange={this.onChangeInput.bind(this)} />
                {this.showItems()}
            </div>
        )
    }
}

export default ToDo;