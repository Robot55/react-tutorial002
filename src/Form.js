import React, {Component} from 'react'

class Form extends Component {
  // we need form to have constructor so we can use "this."
  constructor(props){
    super (props)
    this.initialState = {
      name: '',
      job: '',
    }
    this.state = this.initialState
  }

  // this method needs to be run/called from a "submit" button
  submitForm = () => {
    this.props.handleSubmit(this.state) // runs the handleSubmit method on this state
    this.setState(this.initialState)  // intialize (clear) the form state after submitted
  }

  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, job } = this.state;
  
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
      </form>
    );
  }


}

export default Form;

