import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBarcodeBoxLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 5V19H20V5H4ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM6 7H9V17H6V7ZM10 7H12V17H10V7ZM13 7H14V17H13V7ZM15 7H18V17H15V7Z" />
  </Svg>
);

export default SvgBarcodeBoxLine;
