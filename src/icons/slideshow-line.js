import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSlideshowLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V6H22V20C22 20.5523 21.5523 21 21 21H13ZM4 19H20V8H4V19ZM13 10H18V12H13V10ZM13 14H18V16H13V14ZM9 10V13H12C12 14.6569 10.6569 16 9 16C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10ZM2 3H22V5H2V3Z" />
  </Svg>
);

export default SvgSlideshowLine;
