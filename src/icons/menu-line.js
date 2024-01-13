import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgMenuLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
  </Svg>
);

export default SvgMenuLine;