import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHeading = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
  </Svg>
);

export default SvgHeading;
