import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSpamLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
  </Svg>
);

export default SvgSpamLine;