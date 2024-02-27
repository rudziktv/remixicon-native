import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgPieChartFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11 2.04938V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM13 2.04938C17.7244 2.51845 21.4816 6.27559 21.9506 11H13V2.04938Z" />
  </Svg>
);

export default SvgPieChartFill;
