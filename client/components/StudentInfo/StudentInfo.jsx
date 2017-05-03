
import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
	errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: orange500,
  },
  button: {
  	backgroundColor: '#fafafa',
  	color: '#fff',
  	width: 400,
  }

}



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

  render() {


    return (

      <div>
      	<img src = '/client/assets/1.png' width = "300"/>
        <h1>Student Info</h1>
			    <TextField
			   	 	name="Student First Name"
			   	 	floatingLabelText="First Name"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				   <TextField
			   	 	name="Student Last Name"
			   	 	floatingLabelText="Last Name"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				   <TextField
			   	 	name="Student E-mail"
			   	 	floatingLabelText="Student E-mail"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				   	<TextField
			   	 	name="Student Phone Number"
			   	 	floatingLabelText="Phone Number"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				 <Link to='/parentinfo'>
				  <RaisedButton label="Continue to Next Step" backgroundColor={orange500} />
				 </Link>
      </div>

      );

  }

}

