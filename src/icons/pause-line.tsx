import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgPauseLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" />
  </Svg>
);

export default SvgPauseLine;
