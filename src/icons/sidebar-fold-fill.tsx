import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSidebarFoldFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H13V3ZM15 21V3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15ZM11 8.5V15.5L7 12L11 8.5Z" />
  </Svg>
);

export default SvgSidebarFoldFill;
