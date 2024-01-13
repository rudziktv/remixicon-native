import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSortDesc = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" />
  </Svg>
);

export default SvgSortDesc;