import React from "react";
import unsplash from "../../api/unsplash";
import "./Item.css";

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      images: null,
    };
  }

  componentDidMount = async () => {
    const { data } = await unsplash.get("search/photos", {
      params: { query: this.props.topic, per_page: 100 },
    });
    this.setState({ images: data.results });
  };

  render() {
    const { img, topic } = this.props;
    if (!this.state.images) return <></>;
    return (
      <div className="Item">
        <img
          src={this.state.images[img].urls.regular}
          alt={`${topic}-${img}`}
        />
        <h2>
          {topic} {img}
        </h2>
      </div>
    );
  }
}

export default Item;
