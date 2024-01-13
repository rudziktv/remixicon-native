import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgEqualLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
  </Svg>
);

export default SvgEqualLine;
