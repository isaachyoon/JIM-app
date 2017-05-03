import React from 'react';

import StudentInfo from './StudentInfo/StudentInfo.jsx'
import ParentInfo from './ParentInfo/ParentInfo.jsx'
import DemographicVolunteerInfo from './DemographicVolunteerInfo/DemographicVolunteerInfo.jsx'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



export default class App extends React.Component {

	constructor() {

		super()

		this.state = {
			view: 'home'
		}

	}




  render() {

  	if (this.state.view === 'home') {
			return (
				<div style={{textAlign: 'center'}}>
	        <h1>Hurray for TechBridge</h1>
	        <span onClick={()=>{this.setState({view: 'studentInfo'})}}>Enter Student Info</span>
	        <br />
	        <span onClick={()=>{this.setState({view: 'parentInfo'})}}>Enter Parent Info</span>
	        <br />
	        <span onClick={()=>{this.setState({view: 'demoInfo'})}}>Enter Demographic Info</span>
	      </div>
			)
  	} else if (this.state.view === 'studentInfo') {
  		return (
  			<StudentInfo />
			)
  	} else if (this.state.view === 'parentInfo') {
  		return (
  			<ParentInfo />
			)
  	} else if (this.state.view === 'demoInfo') {
  		return (
  			<DemographicVolunteerInfo />
			)
  	}
  }

}

