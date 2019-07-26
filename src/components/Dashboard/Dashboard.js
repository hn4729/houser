import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/houses")
      .then(response => {
        console.log(response.data);
        this.setState({ houses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteHouse(id) {
    axios
      .delete(`/api/houses/${id}`)
      .then(() => {
        this.getHouses();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map((house, index) => (
          <div key={index}>
            <House
              id={house.id}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zipcode={house.zip}
              monthly_mortgage={house.monthly_mortage}
              desired_mortgage={house.desired_mortgage}
              image_url={house.image_url}
              deleteHouse={this.deleteHouse}
            />
          </div>
        ))}
      </div>
    );
  }
}
