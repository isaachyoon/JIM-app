import React from 'react';
import StudentInfo from './StudentInfo/index.jsx'


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
	      </div>
			)
  	} else if (this.state.view === 'studentInfo') {
  		return (
  			<StudentInfo />
			)
  	}

  }

}