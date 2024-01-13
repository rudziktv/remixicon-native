import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCrossLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M9 2H15V7H20V13H15V22H9V13H4V7H9V2ZM11 4V9H6V11H11V20H13V11H18V9H13V4H11Z" />
  </Svg>
);

export default SvgCrossLine;