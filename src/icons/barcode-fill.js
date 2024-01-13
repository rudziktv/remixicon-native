import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBarcodeFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M2 4H4V20H2V4ZM6 4H8V20H6V4ZM9 4H12V20H9V4ZM13 4H15V20H13V4ZM16 4H18V20H16V4ZM19 4H22V20H19V4Z" />
  </Svg>
);

export default SvgBarcodeFill;
