import React, {Component} from 'react'

class AddPlayerForm extends Component {
  state = {
    value: ''
  }
  handleValueChange = (e) => {
    this.setState(
      {value: e.target.value}
    );
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({
      value: ''
    })

  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.state.handleValueChange}
        />
        <input
          type="submit"
          value="add player"
          onSubmit={this.state.handleSubmit}

        />
      </form>

    )
  }
}

export default AddPlayerForm
