import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTempHotFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 10.2547V5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V10.2547C17.8135 11.5196 19 13.6213 19 16C19 19.866 15.866 23 12 23C8.13401 23 5 19.866 5 16C5 13.6213 6.18652 11.5196 8 10.2547ZM11 12.126C9.27477 12.5701 8 14.1362 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16C16 14.1362 14.7252 12.5701 13 12.126V5H11V12.126Z" />
  </Svg>
);

export default SvgTempHotFill;