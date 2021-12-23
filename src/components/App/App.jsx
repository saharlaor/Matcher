import React from "react";
import Counter from "../Counter/Counter";
import Item from "../Item/Item";
import Button from "../Button/Button";

import LikeImg from "../../assets/img/like.png";
import DislikeImg from "../../assets/img/dislike.png";

import "./App.css";

const TOPICS = ["architecture", "nature", "person", "dog", "cat", "technology"];

class App extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    topic: TOPICS[Math.floor(Math.random() * TOPICS.length)],
  };

  getImgIndex = () => {
    console.log(this.state.likes + this.state.dislikes);
    return this.state.likes + this.state.dislikes;
  };

  addLike() {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 };
    });
  }

  addDislike() {
    this.setState((prevState) => {
      return { dislikes: prevState.dislikes + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__counters">
          <Counter img={LikeImg} text={this.state.likes} />
          <Counter img={DislikeImg} text={this.state.dislikes} />
        </div>
        <Item img={this.getImgIndex()} />
        <div className="Buttons">
          <Button text="Like" handleClick={this.addLike} />
          <Button text="Dislike" handleClick={this.addDislike} />
        </div>
      </div>
    );
  }
}

export default App;
