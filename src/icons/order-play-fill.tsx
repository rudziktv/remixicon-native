import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgOrderPlayFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17 3.99998V2.0675C17 1.79136 17.2239 1.5675 17.5 1.5675C17.617 1.5675 17.7302 1.60851 17.8201 1.68339L21.9391 5.11587C22.1512 5.29266 22.1799 5.60794 22.0031 5.82008C21.9081 5.93407 21.7674 5.99998 21.619 5.99998H2V3.99998H17ZM2 18H22V20H2V18ZM2 11H22V13H2V11Z" />
  </Svg>
);

export default SvgOrderPlayFill;
