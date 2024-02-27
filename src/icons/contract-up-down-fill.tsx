import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgContractUpDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z" />
  </Svg>
);

export default SvgContractUpDownFill;
