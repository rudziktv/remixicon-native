import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgStopLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M7 7V17H17V7H7ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z" />
  </Svg>
);

export default SvgStopLine;