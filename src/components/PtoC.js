import React, { Component } from 'react';

// Subclass
class SubClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subValue: 'Initial sub value'
    };
  }

  handleChange = (event) => {
    // Update the subValue state
    const newValue = event.target.value;
    this.setState({ subValue: newValue });
    // Pass the new value to the parent component
    this.props.onSubValueChange(newValue);
  }

  render() {
    return (
      <div>
        {/* Input field */}
        <input type="text" value={this.state.subValue} onChange={this.handleChange} />
      </div>
    );
  }
}

// Parent component
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentValue: ''
    };
  }

  // Function to update parentValue state
  handleSubValueChange = (value) => {
    this.setState({ parentValue: value });
  }

  render() {
    return (
      <div>
        {/* Render SubClass and pass the function to update parentValue */}
        <SubClass onSubValueChange={this.handleSubValueChange} />
        {/* Display parentValue */}
        <p>Parent Value: {this.state.parentValue}</p>
      </div>
    );
  }
}

export default ParentComponent;
