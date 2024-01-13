import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFullscreenLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z" />
  </Svg>
);

export default SvgFullscreenLine;