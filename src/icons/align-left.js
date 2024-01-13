import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAlignLeft = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z" />
  </Svg>
);

export default SvgAlignLeft;
