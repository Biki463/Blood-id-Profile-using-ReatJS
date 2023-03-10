import React from 'react';

class BloodDonorProfile extends React.Component {
  state = {
    name: '',
    age: '',
    bloodType: '',
    hasDonated: false,
    donorId: ''
  };

  componentDidMount() {
    // fetch the donor data from the server or another source
    // and update the state with setState
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // send the form data to the server or do whatever you need to do with it here
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Blood Type:
          <select
            name="bloodType"
            value={this.state.bloodType}
            onChange={this.handleChange}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </label>
        <br />
        <label>
          Have you donated blood before?
          <input
            type="checkbox"
            name="hasDonated"
            checked={this.state.hasDonated}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Donor ID:
          <input
            type="text"
            name="donorId"
            value={this.state.donorId}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default BloodDonorProfile;
