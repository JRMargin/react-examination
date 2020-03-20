import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
import PlayerPosition from './PlayerPosition'
class AddPlayerInput extends Component {
  render() {
    let {position,name} = this.state
    return (
      <div className={"content"}>
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <PlayerPosition position={position} changeFn={(newPosition)=>{this.setState({position:newPosition})}}/>
        <button className={"submitBtn"} onClick={()=>{this.submitAdd(name,position)}}>add player</button>
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      position:"SG"
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e)=> {
    const name = e.target.value.trim();
    let {position} = this.state
    if (e.which === 13) {
      this.submitAdd(name,position)
    }
  }

  submitAdd = (name,position)=>{
    if (name !== ""){
      this.props.addPlayer(name,position);
      this.setState({ name: '', position:"SG" });
    } else{
      alert("please input the player's name !");
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
