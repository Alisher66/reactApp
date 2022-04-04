import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  clicked() {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div className='post-card '>
        <h2>{this.props.title}</h2>
        <button type='submit' onClick={this.clicked.bind(this)}>Click</button>
        <p>Have been clicked {this.state.count} times</p>
      </div>
    )
  }

}

function All() {
  return (
    <>
      <Post title="Post1" />
      <Post title="Post1" />
      <Post title="Post1" />
      
    </>
  )
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);


reportWebVitals();