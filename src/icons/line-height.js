import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgLineHeight = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M11 4H21V6H11V4ZM6 7V11H4V7H1L5 3L9 7H6ZM6 17H9L5 21L1 17H4V13H6V17ZM11 18H21V20H11V18ZM9 11H21V13H9V11Z" />
  </Svg>
);

export default SvgLineHeight;
