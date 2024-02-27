import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgInstallLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M9 2V4H5L4.999 14H18.999L19 4H15V2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H9ZM18.999 16H4.999L5 20H19L18.999 16ZM17 17V19H15V17H17ZM13 2V7H16L12 11L8 7H11V2H13Z" />
  </Svg>
);

export default SvgInstallLine;
