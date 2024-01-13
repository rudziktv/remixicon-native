import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTBoxFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 8H7V10H11V17H13V10H17V8ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" />
  </Svg>
);

export default SvgTBoxFill;