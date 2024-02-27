import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCollapseDiagonalLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15 4.00008H13V11.0001H20V9.00008H16.4142L20.7071 4.70718L19.2929 3.29297L15 7.58586V4.00008ZM4.00008 15H7.58586L3.29297 19.2929L4.70718 20.7071L9.00008 16.4142V20H11.0001V13H4.00008V15Z" />
  </Svg>
);

export default SvgCollapseDiagonalLine;
