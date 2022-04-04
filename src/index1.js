import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
  }

  changeMode() {
    this.setState({
      darkMode: !(this.state.darkMode)
    })
  }

  render() {
    return (
      <div className={'post-card ' + this.getClass() }>
        <h2>{this.props.title}</h2>
        <input onInput={this.changeMode.bind(this)} type="checkbox" id={this.props.id} name="darkMode" />
        <label for={this.props.id} >Dark Mode</label><br></br>
      </div>
    )
  }
  getClass() {
    let temp;
    this.state.darkMode ? temp = "bg-dark" : temp = "bg-light";
    return temp
  }
}

function All() {
  return (
    <>
    <Post title="Post1" id="post1" />
    <Post title="Post2" id="post2"/>
    <Post title="Post3" id="post3" />
    </>
  )
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);


reportWebVitals();