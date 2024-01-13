import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAlignCenter = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z" />
  </Svg>
);

export default SvgAlignCenter;
