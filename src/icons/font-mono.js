import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFontMono = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M6 4H19V6H8V12H18V14H8V21H6V4Z" />
  </Svg>
);

export default SvgFontMono;