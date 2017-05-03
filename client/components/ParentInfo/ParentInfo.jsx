import React from 'react';


export default class ParentInfo extends React.Component {
	
	constructor() {
		super()

		this.state = {
			ParentFirstName: '',
			ParentLastName: '',
			ParentEmail: '',
			ParentPhone: ''
		}

	}

  render() {
    return (
        <div style={{textAlign: 'center'}}>
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
					</form>
        </div>
      );

  }

}