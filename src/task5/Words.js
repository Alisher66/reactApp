import React from 'react';
import './style.css';



class Words extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        randomId:0,
        color: "#000000",
      }
    }
  
    getRandomCard() {
      const id = this.state.randomId;
      const words = this.props.words;
      
      return (
        <>
          <p>{words[id].text}</p>
          <p>Author - {words[id].author}</p>
          <button onClick={this.randomWord.bind(this)}>next</button>
        </>
      )
    }
    
    randomWord() {
      this.setState({
        randomId: parseInt(Math.random() * this.props.words.length),
        color: this.getRandomColor(),
      })
    }

    getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    render() {
      document.body.style.backgroundColor = this.state.color;
      return(
        <div className='word-wrap'>
          {this.getRandomCard()}
        </div>
      );
    }

  }

export default Words;