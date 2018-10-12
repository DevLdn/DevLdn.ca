import React from 'react';

import Calendar from './Calendar';
import Puzzle from './Puzzle';
import Led from './Led';

const Icon = props => {
  switch (props.name) {
    case 'calendar':
      return <Calendar {...props} />;
    case 'puzzle':
      return <Puzzle {...props} />;
    case 'led':
      return <Led {...props} />;
    default:
      return;
  }
};

export default Icon;
