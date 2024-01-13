import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTBoxLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM13 10V17H11V10H7V8H17V10H13Z" />
  </Svg>
);

export default SvgTBoxLine;