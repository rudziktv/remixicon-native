import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDashboardFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
  </Svg>
);

export default SvgDashboardFill;
