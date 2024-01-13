import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPauseLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" />
  </Svg>
);

export default SvgPauseLine;
