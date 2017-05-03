import React from 'react'

export default class DemographicVolunteerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AfricanAmerican: false,
      Asian: false,
      PacificIslander: false,
      AmericanIndian: false,
      Caucasian: false,
      Hispanic: false,
      Decline: false,
      Refugee: false,
      Immigrant: false,
      SpecialNeedsYes: false,
      SpecialNeedsNo: false,
      Education: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInputChange(event) {
  const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state)
  }

  handleChange(event) {
    this.setState({Education: event.target.value});
  }  

  render() {
    return (
      <div>
        <form>
          Which best describes your child or ward? (Please select all that apply)
          <br />
          <label>
            <input
              name="AfricanAmerican"
              type="checkbox"
              checked={this.state.AfricanAmerican}
              onChange={this.handleInputChange} />
            African American
          </label>
          <br />
          <label>
            <input
              name="Asian"
              type="checkbox"
              checked={this.state.Asian}
              onChange={this.handleInputChange} />
            Asian
          </label>
          <br />
          <label>
            <input
              name="PacificIslander"
              type="checkbox"
              checked={this.state.PacificIslander}
              onChange={this.handleInputChange} />
            Native Hawaiian / Pacific Islander
          </label>
          <br />
          <label>
            <input
              name="AmericanIndian"
              type="checkbox"
              checked={this.state.AmericanIndian}
              onChange={this.handleInputChange} />
            American Indian / Alaska
          </label>
          <br />
          <label>
            <input
              name="Caucasian"
              type="checkbox"
              checked={this.state.Caucasian}
              onChange={this.handleInputChange} />
            Caucasian (non-European)
          </label>
          <br />
          <label>
            <input
              name="Hispanic"
              type="checkbox"
              checked={this.state.Hispanic}
              onChange={this.handleInputChange} />
            Hispanic
          </label>
          <br />
          <label>
            <input
              name="Decline"
              type="checkbox"
              checked={this.state.Decline}
              onChange={this.handleInputChange} />
            Decline to answer
          </label>
        </form>
        <form>
          Please choose any terms that apply to your family:
          <br />
          <label>
            <input
              name="Refugee"
              type="checkbox"
              checked={this.state.Refugee}
              onChange={this.handleInputChange} />
              Refugee (you left your country to escape persection and/or war)
          </label>
          <br />
          <label>
            <input
              name="Immigrant"
              type="checkbox"
              checked={this.state.Immigrant}
              onChange={this.handleInputChange} />
              Immigrant
          </label>
        </form>
        <form>
          Does your child have any special needs that TechBridge needs to be aware of?
          <br />
          <label>
            <input
              name="SpecialNeedsYes"
              type="checkbox"
              checked={this.state.SpecialNeedsYes}
              onChange={this.handleInputChange} />
              Yes
          </label>
          <br />
          <label>
            <input
              name="SpecialNeedsNo"
              type="checkbox"
              checked={this.state.SpecialNeedsNo}
              onChange={this.handleInputChange} />
              No
          </label>
        </form>
        <form onSubmit={this.handleSubmit}>
        <label>
          How far did you go in school?
          <br />
          <select value={this.state.Education} onChange={this.handleChange}>
            <option value="elementarySchool">Elementary School</option>
            <option value="middleSchool">Middle School</option>
            <option value="HSorGED">High School diploma or GED</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}