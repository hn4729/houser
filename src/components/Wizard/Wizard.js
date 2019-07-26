import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { CLEAR, UPDATE_STEP_ONE } from "../../store";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode
      });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveChanges() {
    store.dispatch({
      type: UPDATE_STEP_ONE,
      payload: {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.step}</h1>
        <div>
          <label>
            Property Name
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address
            <input
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City
            <input
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            State
            <input
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zipcode
            <input
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/wizard/step2">
            <button
              onClick={() => {
                this.saveChanges();
              }}
            >
              Next
            </button>
          </Link>
        </div>

        <Link to="/">
          <button
            onClick={() => {
              store.dispatch({
                type: CLEAR
              });
            }}
          >
            Cancel
          </button>
        </Link>
      </div>
    );
  }
}
