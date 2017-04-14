import React from 'react';

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    }
    this.props.onCreate(contact);
    this.setState({
      name: '',
      phone: ''
    });

  }

  render() {
    return (
      <div>
        <h2>Create Contact </h2>
        <p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name" />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="phone" />
          <button onClick={this.handleClick}>Create</button>
        </p>
      </div>
    );
  }
}

// ContactCreate.propTypes = {
//   onCreate: React.propTypes.func;
// };

ContactCreate.defaultProps = {
  onCreate: () => {
    console.console.error('onCreate not defined');
  }
}
