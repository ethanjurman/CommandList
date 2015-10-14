import React, {Component} from 'react';
import HttpRequest from './HttpRequest';

const inputMap = {
  '[p]':{src:'/svgs/punch.svg',alt:"PUNCH"},
  '[k]':{src:'/svgs/kick.svg',alt:"KICK"},
  '[1]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r315"},
  '[2]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r270"},
  '[3]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r225"},
  '[4]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK"},
  '[6]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r180"},
  '[7]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r45"},
  '[8]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r90"},
  '[9]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"r135"}
}

export default class Move extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderMove() {
    // move_exec = <img src="./svgs/punch.svg" height="64" alt="PUNCH"/>
    // console.log(move_exec)
    let moveCaptureGroups = /(\[[^\]]*\]|\S)/g;
    let matches = this.props.move.exec.match(moveCaptureGroups);
    if (matches != null){
      return (
        <span>
        {matches.map((input)=>{
          if (input in this.state) {
            return (this.state[input]);
          } else if (input in inputMap){
            HttpRequest(window.location.origin + inputMap[input].src, (svg)=>{
              this.setState({[input]:
                <span className={"" || inputMap[input].className} dangerouslySetInnerHTML={{__html:svg}} />});
            });
            return (this.state[input])
          } else {
            return (input);
          }
        })}
        </span>
      );
    }
  }

  render() {

    return(
      <div className="move">
        <div className="move-info-1">
          <span className="move_name">{this.props.move.name} </span>
          <span className="move_exec">{this._renderMove()} </span>
          <span className="move_note">{this.props.move.note} </span>
        </div>
        <div className="move-info-2">
          <span className="move_desc">{this.props.move.desc} </span>
          <span className="move_tags">{this.props.move.tags} </span>
        </div>
      </div>
    );
  }
};
