import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSpace = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 9V13H20V9H22V14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14V9H4Z" />
  </Svg>
);

export default SvgSpace;
