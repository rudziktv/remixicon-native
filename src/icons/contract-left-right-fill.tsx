import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgContractLeftRightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M5 18 11 12 5 6V18ZM19 6 13 12 19 18V6Z" />
  </Svg>
);

export default SvgContractLeftRightFill;
