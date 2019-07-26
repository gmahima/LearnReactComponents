import React, {Component} from 'react'

class AddPlayerForm extends Component {

  playerInput = React.createRef();
  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset()

  }
  render() {
    return (
      <form>
        <input
          type="text"
          ref={this.playerInput}
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
