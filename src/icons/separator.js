import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSeparator = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z" />
  </Svg>
);

export default SvgSeparator;
