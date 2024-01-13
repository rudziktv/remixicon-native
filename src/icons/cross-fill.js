import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCrossFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" />
  </Svg>
);

export default SvgCrossFill;
