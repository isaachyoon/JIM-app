import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


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
        <img src = '/client/assets/3.png' width = "300"/>

        <form>

          Which best describes your child or ward? (Please select all that apply)
          <Checkbox
            label="African American"
            style={styles.checkbox}
            />
          <Checkbox
            label="Asian"
            style={styles.checkbox}
            />
          <Checkbox
            label="PacificIslander"
            style={styles.checkbox}
            />
          <Checkbox
            label="AmericanIndian"
            style={styles.checkbox}
            />
          <Checkbox
            label="Caucasian"
            style={styles.checkbox}
            />
          <Checkbox
            label="Hispanic"
            style={styles.checkbox}
            />
          <Checkbox
            label="Decline"
            style={styles.checkbox}
            />
          <Checkbox
            label="AmericanIndian"
            style={styles.checkbox}
            />
        </form>
        <form>
          Please choose any terms that apply to your family:
          <Checkbox
            label="Refugee (you left your country to escape persection and/or war)"
            style={styles.checkbox}
            />
          <Checkbox
            label="Immigrant"
            style={styles.checkbox}
            />
        </form>
        <form>
          Does your child have any special needs that TechBridge needs to be aware of?
          <Checkbox
            label="Yes"
            style={styles.checkbox}
            />
          <Checkbox
            label="No"
            style={styles.checkbox}
            />
          </form>
          <form onSubmit={this.handleSubmit}>
          <label>
            How far did you go in school?
            <br />
            <DropDownMenu value={"Select one"} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Elementary School" />
              <MenuItem value={2} primaryText="Middle School" />
            </DropDownMenu>
          </label>
          <br />
          <Link to='/healthinfo'>
            <RaisedButton label="Continue to Next Step" backgroundColor={orange500} />
          </Link>
        </form>

      </div>
    );
  }
}
