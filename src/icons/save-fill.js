import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSaveFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z" />
  </Svg>
);

export default SvgSaveFill;