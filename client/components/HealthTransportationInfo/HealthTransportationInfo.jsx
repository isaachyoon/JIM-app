import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class HealthTransportationInfo extends React.Component {

	constructor() {
		super()

		this.state = {
			birthdate: '',
			lastname: '',
			allergies: '',
			emergencyFullName: '',
			emergencyPhone: '',
			relationship: '',
			transportationYes: '',
			transportationNo: ''
		}

	}

  render() {


    return (


        <div>
          <img src = '/client/assets/4.png' width = "300" />

          <h1>Health Info</h1>
          <form>
					  <label>
					    Date of Birth:
					    <input type="text" name="DateOfBirth" />
					  </label>
					  <br />
					  <label>
					    Last Name:
					    <input type="text" name="LastName" />
					  </label>
					  <br />
					  <label>
					    Allergies:
					    <input type="text" name="Allergies" />
					  </label>
					  <br />
					  <label>
					    Emergency contact (Full Name):
					    <input type="text" name="emergencyFullName" />
					  </label>
					  <br />
					  <label>
					    Emergency contact phone number:
					    <input type="text" name="EmergencyPhoneNumber" />
					  </label>
					  <br />
					  Transportation:
	          <br />
	          <label>
            <input
              name="transportationYes"
              type="checkbox"
              checked={this.state.transportationYes}
              onChange={this.handleInputChange} />
              I will allow my child or ward to walk/bus home after the program ends.
	          </label>
	          <br />
	          <label>
            <input
              name="transportationNo"
              type="checkbox"
              checked={this.state.transportationNo}
              onChange={this.handleInputChange} />
              Someone will pick up my child or ward after the program ends.
	          </label>
					 <Link to='/parentinfo'>
					  <input type="submit" value="Submit" />
					 </Link>
					</form>

        </div>


      );

  }

}
