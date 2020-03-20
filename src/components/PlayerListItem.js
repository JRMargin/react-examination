import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';
import PlayerPosition from './PlayerPosition'

class PlayerListItem extends Component {
  render() {
    const {current,listLen} = this.props
    return (
      <li className={styles.playerListItem}>
        <div className={styles.playerInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} · {this.props.position}
            </small>
          </div>
          <div>
              <span>change position：</span>
              <PlayerPosition  position={this.props.position}
                               changeFn={(position)=>{this.props.changePosition(this.props.id,position)}}
              />
          </div>
        </div>
        <div className={styles.playerActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starPlayer(this.props.id)}
          >
            <i
              className={classnames('fa', {
                'fa-star': this.props.starred,
                'fa-star-o': !this.props.starred,
              })}
            />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => {
              if(window.confirm("确定要删除该球员吗？")){
                  this.props.deletePlayer(this.props.id)
                  if (Math.ceil((listLen-1) / 5) < current && current >1) {
                      this.props.deleteCall(current - 1)
                  }
              }
            }}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
  changePosition: PropTypes.func.isRequired,
};

export default PlayerListItem;
