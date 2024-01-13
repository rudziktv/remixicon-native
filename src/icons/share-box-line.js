import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShareBoxLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z" />
  </Svg>
);

export default SvgShareBoxLine;