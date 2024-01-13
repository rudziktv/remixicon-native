import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgAddFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
  </Svg>
);

export default SvgAddFill;
