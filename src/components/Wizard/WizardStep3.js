import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { CLEAR, UPDATE_STEP_THREE } from "../../store";

export default class WizardStep3 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      monthly_mortgage: reduxState.monthly_mortgage,
      desired_mortgage: reduxState.desired_mortgage
    };
    this.handleChange = this.handleChange.bind(this);
    this.createHouse = this.createHouse.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        monthly_mortgage: store.getState().monthly_mortgage,
        desired_mortgage: store.getState().desired_mortgage
      });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveChanges() {
    store.dispatch({
      type: UPDATE_STEP_THREE,
      payload: {
        monthly_mortgage: this.state.monthly_mortgage,
        desired_mortgage: this.state.desired_mortgage
      }
    });
  }

  createHouse() {
    this.saveChanges();
    const {
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      monthly_mortgage,
      desired_mortgage
    } = store.getState();
    axios.post("/api/houses", {
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      monthly_mortgage,
      desired_mortgage
    });
    store.dispatch({
      type: CLEAR
    });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Monthly Mortgage{" "}
            <input
              name="monthly_mortgage"
              value={this.state.monthly_mortgage}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Desired Monthly Mortgage{" "}
            <input
              name="desired_mortgage"
              value={this.state.desired_mortgage}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/wizard/step2">
            <button
              onClick={() => {
                this.saveChanges();
              }}
            >
              Previous
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
        <Link to="/">
          <button
            onClick={() => {
              this.createHouse();
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    );
  }
}
