import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBillLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" />
  </Svg>
);

export default SvgBillLine;