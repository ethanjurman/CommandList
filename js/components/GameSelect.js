import Dropdown from 'react-dropdown';
import React from 'react';

let GameSelect = React.createClass({
  _onSelect(option) {
    console.log('selected ', option.label);
  },
  render() {
    var options = [
      { value: 'bat', label: 'Battle Arena Toshinden' },
      { value: 'whj', label: 'World Heroes Jet' },
      {
        type: 'group', name: 'Guilty Gear', items: [
          { value: 'gg', label: 'Guilty Gear' },
          { value: 'ggx', label: 'Guilty Gear X' },
          { value: 'ggxx', label: 'Guilty Gear XX' },
          { value: 'ggxrd', label: 'Guilty Gear Xrd' },
        ]
      },
      {
        type: 'group', name: 'BlazBlue', items: [
          { value: 'bbct', label: 'BlazBlue: Calamity Trigger' },
          { value: 'bbcs', label: 'BlazBlue: Continuum Shift' },
          { value: 'bbcp', label: 'BlazBlue: Chrono Phantasma' }
        ]
      }
    ];

    var defaultOption = { value: 'None', label: 'Select Game' };
    return (
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} />
    )
  }
});

export default GameSelect;
