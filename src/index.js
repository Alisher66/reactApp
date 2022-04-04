import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


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
            <p className='noteText' >{note}</p>
          )
        })}
      </div>
    )
  }

  action() {
    let notesWrap = document.querySelector(".noteList");
    if(!notesWrap) return

    notesWrap.addEventListener("click", (e) => {
      if (!e.target.classList.contains("noteList")) return
      
      e.target.classList.toggle("done");
    })

  }
  render() {
    return (
      <div>
        {this.showNotes()}
        {this.action()}
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