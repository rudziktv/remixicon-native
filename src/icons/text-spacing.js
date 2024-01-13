import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTextSpacing = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M7 17H17V14.5L20.5 18L17 21.5V19H7V21.5L3.5 18L7 14.5V17ZM13 6V15H11V6H5V4H19V6H13Z" />
  </Svg>
);

export default SvgTextSpacing;
