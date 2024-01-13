import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHexagonFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z" />
  </Svg>
);

export default SvgHexagonFill;
