import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgKanbanView = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM4 19V5H20V19H4ZM9 7H7V15H9V7ZM15 7H17V13H15V7ZM13 7H11V17H13V7Z" />
  </Svg>
);

export default SvgKanbanView;
