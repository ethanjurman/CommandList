import React, {Component} from 'react';
import Move from './Move';

export default class Character extends Component {
  render() {
    return(
      <div className="character">
        <div className="name">{this.props.character.name}</div>
        {this.props.character.moves.map((m)=>{
          // for each character, render their moves
          return (<Move key={m.id} move={m}/>)
        })}
      </div>
    );
  }
};
