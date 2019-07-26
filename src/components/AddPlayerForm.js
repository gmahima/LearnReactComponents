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
        />
      </form>

    )
  }
}

export default AddPlayerForm
