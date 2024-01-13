import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlayListAddLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M2 18H12V20H2V18ZM2 11H22V13H2V11ZM2 4H22V6H2V4ZM18 18V15H20V18H23V20H20V23H18V20H15V18H18Z" />
  </Svg>
);

export default SvgPlayListAddLine;