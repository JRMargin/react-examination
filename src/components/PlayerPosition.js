import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerPosition.css';

class PlayerPosition extends Component {
  render() {
    return (
      <select defaultValue={this.props.position || 'SG'}
              onChange={(e)=>{
                this.props.changeFn(e.target.value)
              }}
      >
        {
          this.positionList.map((item)=>{
            return (
              <option key={item.key} value={item.key}>{item.position}</option>
            )
          })
        }
      </select>

    );
  }

  positionList = [
      {position:"SG",key:"SG"},
      {position:"SF",key:"SF"},
      {position:"PF",key:"PF"},
      {position:"PG",key:"PG"}
  ]
}

PlayerPosition.propTypes = {
    position: PropTypes.string.isRequired,
    changeFn: PropTypes.func.isRequired,
};

export default PlayerPosition;
