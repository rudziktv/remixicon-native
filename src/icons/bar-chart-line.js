import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBarChartLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z" />
  </Svg>
);

export default SvgBarChartLine;
