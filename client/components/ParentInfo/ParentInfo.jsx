import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';


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
  			    <TextField
			   	 	name="Parent First Name"
			   	 	floatingLabelText="First Name"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
				   /><br />	    
				   <TextField
			   	 	name="Parent Last Name"
			   	 	floatingLabelText="Last Name"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				   <TextField
			   	 	name="Parent E-mail"
			   	 	floatingLabelText="Parent E-mail"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
				   	<TextField
			   	 	name="Parent Phone Number"
			   	 	floatingLabelText="Phone Number"
				    underlineFocusStyle={styles.underlineStyle}
				    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				   /><br />
					  <label>
					  Preferred method of contact:
					  <br />
					  <DropDownMenu value={"Select one"} onChange={this.handleChange}>
		          <MenuItem value={1} primaryText="Phone" />
		          <MenuItem value={2} primaryText="E-mail" />
		        </DropDownMenu>
            </label>
            <br />
            <label>
					  Preferred language for the registration form:
					  <br />
					  <DropDownMenu value={"Select one"} onChange={this.handleChange}>
		          <MenuItem value={1} primaryText="English" />
		          <MenuItem value={2} primaryText="Spanish" />
		        </DropDownMenu>
            </label>
            <br />
            <Link to='/demographic'>
						  <RaisedButton label="Continue to Next Step" backgroundColor={orange500} />
					 </Link>
					</form>
        </div>
      );

  }

}