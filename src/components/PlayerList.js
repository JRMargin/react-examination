import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import { Pagination } from 'antd';
class PlayerList extends Component {
  render() {
    let {start, end, current} = this.state
    return (
      <>
        <ol className={styles.playerList}>
          {this.props.players.map((player, index) => {
            if (index >= start && index < end)
              return (
                <PlayerListItem
                  key={index}
                  id={index}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  starred={player.starred}
                  listLen={this.props.players.length}
                  current={current}
                  deleteCall={this.getShowData.bind(this)}
                  {...this.props.actions}
              />
            );
          })}
        </ol>
        <Pagination classname={"pagination"}
                    defaultCurrent={1}
                    current={current}
                    total={this.props.players.length}
                    pageSize={5}
                    hideOnSinglePage={true}
                    onChange={this.getShowData.bind(this)}
        />
      </>
    );
  }
  constructor(props) {
    super(props)
    this.state = {
      current:1,
      start:0,
      end:4
    };
  }

  componentDidMount(){
    this.getShowData(1)
  }

  getShowData = (page)=>{
    let start = 5 * (page - 1)
    let end = 5 * page
    this.setState({start,end,current:page})
  }
}


PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
