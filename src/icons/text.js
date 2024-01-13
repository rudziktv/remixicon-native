import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgText = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M13 6V21H11V6H5V4H19V6H13Z" />
  </Svg>
);

export default SvgText;
