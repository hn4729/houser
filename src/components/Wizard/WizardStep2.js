import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { CLEAR, UPDATE_STEP_TWO } from "../../store";

export default class WizardStep2 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      image_url: reduxState.image_url
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ image_url: store.getState().image_url });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveChanges() {
    store.dispatch({
      type: UPDATE_STEP_TWO,
      payload: this.state.image_url
    });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Image URL
            <input
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/wizard/step1">
            <button onClick={() => this.saveChanges()}>Previous</button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={() => this.saveChanges()}>Next</button>
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
