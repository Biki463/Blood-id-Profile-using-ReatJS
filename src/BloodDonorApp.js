import React from 'react';

class BloodDonorForm extends React.Component {
  state = {
    name: '',
    age: '',
    bloodType: '',
    hasDonated: false
  };

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
    this.props.onFormSubmit(this.state);
    this.setState({
      name: '',
      age: '',
      bloodType: '',
      hasDonated: false
    });
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
        <button type="submit">Submit</button>
      </form>
  
    );
  }
}



const BloodDonorProfileTable = ({ donorProfiles }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Blood Type</th>
        <th>Donor ID</th>
        <th>Has Donated Before</th>
      </tr>
    </thead>
    <tbody>
      
  {donorProfiles.map((profile, index) => (
    <tr key={index}>
      <td>{profile.name}</td>
      <td>{profile.age}</td>
      <td>{profile.bloodType}</td>
      <td>{index + 1}</td>
      <td>{profile.hasDonated ? 'Yes' : 'No'}</td>
    </tr>
  ))}
</tbody>
</table>
);

class BloodDonorApp extends React.Component {
state = {
donorProfiles: []
};

handleFormSubmit = donorInfo => {
this.setState(prevState => ({
  donorProfiles: [...prevState.donorProfiles, donorInfo]
}));
};

render() {
return (
  <div>
    <h1>Blood Donor App</h1>
    <BloodDonorForm onFormSubmit={this.handleFormSubmit} />
    <BloodDonorProfileTable donorProfiles={this.state.donorProfiles} />
  </div>
);
}
}


export default BloodDonorApp;
