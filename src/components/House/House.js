import React, { Component } from "react";

export default class House extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      address,
      city,
      state,
      zipcode,
      monthly_mortgage,
      desired_mortgage,
      image_url
    } = this.props;
    return (
      <div>
        <ul>
          <li>{name}</li>
          <li>{address}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{zipcode}</li>
          <li>{monthly_mortgage}</li>
          <li>{desired_mortgage}</li>
          <li>{image_url}</li>
        </ul>
        <button onClick={() => this.props.deleteHouse(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}
