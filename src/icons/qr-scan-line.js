import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgQrScanLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 16V21H3V16H5V19H19V16H21ZM3 11H21V13H3V11ZM21 8H19V5H5V8H3V3H21V8Z" />
  </Svg>
);

export default SvgQrScanLine;
