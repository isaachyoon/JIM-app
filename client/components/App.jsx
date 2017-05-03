import React from 'react';

<<<<<<< HEAD
import StudentInfo from './StudentInfo/StudentInfo.jsx'
import ParentInfo from './ParentInfo/ParentInfo.jsx'
import DemographicVolunteerInfo from './DemographicVolunteerInfo/DemographicVolunteerInfo.jsx'
=======
import StudentInfo from './StudentInfo/index.jsx'
>>>>>>> implement react-router
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import DemographicVolunteer from './DemographicVolunteerInfo/index.jsx';




export default class App extends React.Component {

	constructor() {

		super()
	}




  render() {
		return (
			<Router>
				<div>
					<Route exact path = '/' component = {StudentInfo}/>
					<Route path = '/demographic' component = {DemographicVolunteer}/>

				</div>
			</Router>

<<<<<<< HEAD
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
=======
>>>>>>> implement react-router

		)
  }
}

		// <ul>
		// 				<li><Link to ="/"> studentINfo </Link></li>
		// 				<li><Link to ="/demographic"> demongraphic </Link></li>
		// 				<li><Link to ="/health"> healthTrans </Link></li>
		// 			</ul>