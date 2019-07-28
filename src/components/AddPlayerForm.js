import React, {Component} from 'react'
import {Consumer} from './Context'

class AddPlayerForm extends Component {

  playerInput = React.createRef();

  render() {
    return (


        <Consumer>
          {
            context => {
              handleSubmit = (e)=> {
                e.preventDefault();
                context.actions.addPlayer(this.playerInput.current.value);
                e.currentTarget.reset()
                return(
                  <form>
                    <input
                      type="text"
                      ref={this.playerInput}
                    />
                    <input
                      type="submit"
                      value="add player"
                      onSubmit={handleSubmit}
                    />
                  </form>
                )

              }
            }
          }
        </Consumer>



    )
  }
}

export default AddPlayerForm
