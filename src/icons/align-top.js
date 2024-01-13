import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAlignTop = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 3H21V5H3V3ZM8 11V21H6V11H3L7 7L11 11H8ZM18 11V21H16V11H13L17 7L21 11H18Z" />
  </Svg>
);

export default SvgAlignTop;
