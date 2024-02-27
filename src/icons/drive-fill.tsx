import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgDriveFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M7.94037 4.14596L11.4217 10.1759L5.48201 20.4688L2 14.44L7.94037 4.14596ZM10.1161 14.44H22L18.518 20.4688H6.63537L10.1161 14.44ZM14.4589 13.4399L8.51799 3.14502H15.482L21.4229 13.4399H14.4589Z" />
  </Svg>
);

export default SvgDriveFill;
