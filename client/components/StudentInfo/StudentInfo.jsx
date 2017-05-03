
import React from 'react';
import {render} from 'react-dom';
import DemographicVolunteer from '../DemographicVolunteerInfo/DemographicVolunteerInfo.jsx';
// import HealthTransportation from './HealthTransportationInfo/index.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import test from '../../assets/test.png'


export default class StudentInfo extends React.Component {

	constructor() {
		super()

		this.state = {
			studentFirstName: '',
			studentLastName: '',
			studentEmail: '',
			studentPhone: ''
		}

	}

	nextPage() {

	}

  render() {


    return (


        <div style={{textAlign: 'center'}}>

          <h1>Student Info</h1>
          <form>
					  <label>
					    First Name:
					    <input type="text" name="Student First Name" />
					  </label>
					  <br />
					  <label>
					    Last Name:
					    <input type="text" name="Student Last Name" />
					  </label>
					  <br />
					  <label>
					    E-mail:
					    <input type="text" name="Student E-mail" />
					  </label>
					  <br />
					  <label>
					    Phone Number:
					    <input type="text" name="Student Phone Number" />
					  </label>
					  <br />
					 <Link to = '/Demographic'>
					  <input type="submit" value="Submit" onClick = {this.nextPage.bind(this)} />
					 </Link>
					</form>

        </div>




      );

  }

}

// <Route path = '/demographic' component = {DemographicVolunteer} />
// 					<Route path = '/health' component = {HealthTransportation} />