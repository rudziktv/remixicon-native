import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFlashlightLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z" />
  </Svg>
);

export default SvgFlashlightLine;
