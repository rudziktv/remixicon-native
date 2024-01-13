import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBarChartFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z" />
  </Svg>
);

export default SvgBarChartFill;
