import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class ParentInfo extends React.Component {
	
	constructor() {
		super()

		this.state = {
			ParentFirstName: '',
			ParentLastName: '',
			ParentEmail: '',
			ParentPhone: '',
			Street: '',
			City: '',
			PostalCode: '',
			PreferredContact: '',
			PreferredLanguage: '',
		}

	}

	handleChange(event) {
    this.setState({PreferredContact: event.target.value});
  }  

  render() {
    return (
        <div>
          <h1>Parent Info</h1>
          <form>
					  <label>
					    First Name: 
					    <input type="text" name="Parent First Name" />
					  </label>
					  <br />
					  <label>
					    Last Name: 
					    <input type="text" name="Parent Last Name" />
					  </label>
					  <br />
					  <label>
					    E-mail: 
					    <input type="text" name="Parent E-mail" />
					  </label>
					  <br />
					  <label>
					    Phone Number: 
					    <input type="text" name="Parent Phone Number" />
					  </label>
					  <br />
					  <input type="submit" value="Submit" />
					  <br />
					  <label>
					  Preferred method of contact:
					  <br />
					  <select value={this.state.PreferredContact} onChange={this.handleChange}>
              <option value="phone">Phone</option>
              <option value="email">E-mail</option>
            </select>
            </label>
            <br />
            <label>
					  Preferred language for the registration form:
					  <br />
					  <select value={this.state.PreferredLanguage} onChange={this.handleChange}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
            </label>
            <br />
            <Link to='/demographic'>
						  <input type="submit" value="Submit" />
					 </Link>
					</form>
        </div>
      );

  }

}