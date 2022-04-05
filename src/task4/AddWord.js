
import React from 'react';



const style = {
  note: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid#ccc",
    cursor: "pointer",
    marginRight: "20px",
  },
  textContent: {
    display: 'flex',
  },
  
  inputStyle: {
    width:'100%',
  },
  mr:{
    marginRight: "5px",
  }
}


class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  addNote(e) {
   
    if(e.key != "Enter") return

    const text = e.target.value.trim();
    if(text === "") return
    
    this.state.notes.push(text)
  
    this.setState({
      notes: [... this.state.notes]
    });

    e.target.value = "";
  }
 
  showNotes(e) {
    return (
      <div className='noteList' style={style.textContent}>
        {this.state.notes.map((note, index) => {
          return (
            <p data-id={index} className='noteText' style={style.note} >
              <span style={style.mr}>{note}</span>
              <span onClick={this.noteDelete.bind(this)}>X</ span>
            </p>
          )
        })}
      </div>
    )
  }
  noteDelete(e) {
    const id = +e.target.closest(".noteText").dataset.id;
    this.state.notes.splice(id, 1);
    this.setState({
      notes: [...this.state.notes],
    })
  }

  render() {
    return (
      <div style={style.textContent} >
        {this.showNotes()}
        <input type="text" style={style.inputStyle} id="noteText" onKeyDown={this.addNote.bind(this)} />
      </div>
    );
  }
}

export default AddWord;