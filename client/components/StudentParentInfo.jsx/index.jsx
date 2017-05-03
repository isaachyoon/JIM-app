import React from 'react';


export default class StudentParentInfo extends React.Component {

  render() {
    return (
        <div style={{textAlign: 'center'}}>
          <h1>StudentParentInfo</h1>
          <form>
					  <label>
					    Name:
					    <input type="text" name="name" />
					  </label>
					  <input type="submit" value="Submit" />
					</form>
        </div>
      );

  }

}