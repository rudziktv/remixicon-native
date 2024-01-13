import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgUploadFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z" />
  </Svg>
);

export default SvgUploadFill;
