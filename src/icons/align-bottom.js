import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAlignBottom = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 19H21V21H3V19ZM8 13H11L7 17L3 13H6V3H8V13ZM18 13H21L17 17L13 13H16V3H18V13Z" />
  </Svg>
);

export default SvgAlignBottom;