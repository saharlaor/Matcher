import React from "react";
import Counter from "../Counter/Counter";
import Item from "../Item/Item";
import Button from "../Button/Button";

import LikeImg from "../../assets/img/like.png";
import DislikeImg from "../../assets/img/dislike.png";

import "./App.css";

class App extends React.Component {
  state = { likes: 0, dislikes: 0 };

  getImgIndex() {
    return this.state.likes + this.state.dislikes;
  }

  addLike() {
    this.setState((prevState) => {
      likes: prevState.likes + 1;
    });
  }

  addDislike() {
    this.setState((prevState) => {
      dislikes: prevState.dislikes + 1;
    });
  }

  render() {
    return (
      <div className="App">
        <Counter img={LikeImg} text={this.state.likes} />
        <Counter img={DislikeImg} text={this.state.dislikes} />
        <Item img={this.getImgIndex()} />
        <Button text="Like" handleClick={this.addLike} />
        <Button text="Dislike" handleClick={this.addDislike} />
      </div>
    );
  }
}

export default App;
