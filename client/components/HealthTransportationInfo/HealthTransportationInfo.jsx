import React from 'react'


export default class HealthTransportationInfo extends React.Component {
	
	constructor() {
		super()

		this.state = {
			demoInfo1: '',
			demoInfo2: '',
			demoInfo3: '',
			demoInfo4: '',
			demoInfo5: ''
		}

	}

  render() {
    return (
        <div className={styles.container}>
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
					  <input type="submit" value="Submit" />
					</form>
        </div>
      );

  }

}