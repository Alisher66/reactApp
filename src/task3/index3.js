import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from '../reportWebVitals';


class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  addNote() {
    let textEl = document.querySelector("#noteText");
    if (textEl.value.trim() === "") {
      textEl.value = "";
      return
    }
    this.state.notes.push(textEl.value.trim())
    this.setState({
      notes: [...this.state.notes]
    });
    textEl.value = "";
  }

  showNotes() {
    return (
      <div className='noteList'>
        {this.state.notes.map(note => {
          return (
            <p onClick={this.action} className='noteText' >
              <span>{note}</span>
              <button onClick={this.noteDelete}> X </ button>
            </p>
          )
        })}
      </div>
    )
  }

  action(e) {
    e.target.classList.toggle("done")
  }
  noteDelete(e) {
    e.target.closest(".noteText").remove();
  }

  render() {
    return (
      <div>
        {this.showNotes()}
        <input id='noteText' type="text" />
        <button type="submit" onClick={this.addNote.bind(this)} >Add Note</button>
      </div>
    );
  }
}



ReactDOM.render(
  <ToDo />,
  document.getElementById('root')
);


reportWebVitals();