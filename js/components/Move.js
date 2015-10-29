import React, {Component} from 'react';
import GameStore from '../stores/GameStore';
import HttpRequest from './HttpRequest';
import classNames from 'classnames';

// rotating the arrow!
const rotate = (text, rot)=>{return text.replace(/rotate\(0/,'rotate('+ rot)}

const inputMap = {
  '[p]':{src:'/svgs/punch.svg',alt:"PUNCH"},
  '[lp]':{src:'/svgs/punch_strength.svg',alt:"LIGHT PUNCH",className:"light",callback:(text)=>{return text.replace(/LP/,'LP')}},
  '[mp]':{src:'/svgs/punch_strength.svg',alt:"MEDIUM PUNCH",className:"medium",callback:(text)=>{return text.replace(/LP/,'MP')}},
  '[hp]':{src:'/svgs/punch_strength.svg',alt:"HEAVY PUNCH",className:"heavy",callback:(text)=>{return text.replace(/LP/,'HP')}},
  '[2p]':{src:'/svgs/punch_2x.svg',alt:"2x PUNCH"},
  '[3p]':{src:'/svgs/punch_3x.svg',alt:"3x PUNCH"},
  '[k]':{src:'/svgs/kick.svg',alt:"KICK"},
  '[lk]':{src:'/svgs/kick_strength.svg',alt:"LIGHT KICK",className:"light",callback:(text)=>{return text.replace(/LK/,'LK')}},
  '[mk]':{src:'/svgs/kick_strength.svg',alt:"MEDIUM KICK",className:"medium",callback:(text)=>{return text.replace(/LK/,'MK')}},
  '[hk]':{src:'/svgs/kick_strength.svg',alt:"HEAVY KICK",className:"heavy",callback:(text)=>{return text.replace(/LK/,'HK')}},
  '[2k]':{src:'/svgs/kick_2x.svg',alt:"2x KICK"},
  '[3k]':{src:'/svgs/kick_3x.svg',alt:"3x KICK"},
  '[1]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",callback:(text)=>{return rotate(text, 315)}},
  '[h1]':{src:'/svgs/arrow.svg',alt:"DOWN-BACK",className:"hold",callback:(text)=>{return rotate(text, 315)}},
  '[2]':{src:'/svgs/arrow.svg',alt:"DOWN",callback:(text)=>{return rotate(text, 270)}},
  '[h2]':{src:'/svgs/arrow.svg',alt:"DOWN",className:"hold",callback:(text)=>{return rotate(text, 270)}},
  '[3]':{src:'/svgs/arrow.svg',alt:"DOWN-FORWARD",callback:(text)=>{return rotate(text, 225)}},
  '[4]':{src:'/svgs/arrow.svg',alt:"BACK"},
  '[6]':{src:'/svgs/arrow.svg',alt:"FORWARD",callback:(text)=>{return rotate(text, 180)}},
  '[7]':{src:'/svgs/arrow.svg',alt:"BACK-UP",callback:(text)=>{return rotate(text, 45)}},
  '[8]':{src:'/svgs/arrow.svg',alt:"UP",callback:(text)=>{return rotate(text, 90)}},
  '[9]':{src:'/svgs/arrow.svg',alt:"FORWARD-UP",callback:(text)=>{return rotate(text, 135)}},
  '[236]':{src:'/svgs/qc.svg',alt:"QUARTER CIRCLE FORWARD",className:"flip"},
  '[214]':{src:'/svgs/qc.svg',alt:"QUARTER CIRCLE BACK",className:""},
  '[623]':{src:'/svgs/dp.svg',alt:"DRAGON PUNCH FORWARD",className:"flip"},
  '[421]':{src:'/svgs/dp.svg',alt:"DRAGON PUNCH BACK",className:""},
  '[41236]':{src:'/svgs/hc.svg',alt:"HALF CIRCLE FORWARD",className:"flip"},
  '[63214]':{src:'/svgs/hc.svg',alt:"HALF CIRCLE BACK",className:""},
  '[63214789]':{src:'/svgs/arrow.svg',alt:"360 MOTION BACK",className:"flip"},
  '[41236987]':{src:'/svgs/arrow.svg',alt:"360 MOTION FORWARD",className:""},
  '<':{src:'/svgs/left_bracket.svg',alt:""},
  '>':{src:'/svgs/left_bracket.svg',alt:"",className:"flip"}
}

// transform="rotate(270 250 800)"

export default class Move extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderMove(move_exec) {
    // set up capture groups for [ input ]
    let moveCaptureGroups = /(\[[^\]]*\]|.)/g;
    // matches in the move execution
    let matches = move_exec.match(moveCaptureGroups);
    if (matches != null){
      return (
        <span>
        {matches.map((input)=>{
          if (input in this.state) {
            return (this.state[input]);
          } else if (input in inputMap){
            // if input is mapped to an svg, grab the svg and return it
            HttpRequest(window.location.origin + inputMap[input].src, (svg)=>{
              // sometimes text or items need to be modified; These callbacks are present in the inputMap or in the parameters
              if (inputMap[input].callback !== undefined) {
                svg = inputMap[input].callback(svg);
              }
              this.setState({
                [input]:
                <span className={"" || inputMap[input].className} dangerouslySetInnerHTML={{__html:svg}} />
              });
            });
            return (this.state[input])
          } else {
            // else just print out the text
            return (input);
          }
        })}
        </span>
      );
    }
  }

  render() {

    let move_name_class = classNames('move_name', GameStore.state.game.move_types[this.props.move.type]);

    return(
      <div className="move">
        <div className="move-info-1">
          <span className={move_name_class}>{this.props.move.name} </span>
          <span className="move_exec">{this._renderMove(this.props.move.exec)} </span>
          <span className="move_note">{this._renderMove(this.props.move.note)} </span>
        </div>
        <div className="move-info-2">
          <span className="move_desc">{this.props.move.desc} </span>
          <span className="move_tags">{this.props.move.tags} </span>
        </div>
      </div>
    );
  }
};
