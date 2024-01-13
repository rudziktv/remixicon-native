import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBarChartHorizontalLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z" />
  </Svg>
);

export default SvgBarChartHorizontalLine;
