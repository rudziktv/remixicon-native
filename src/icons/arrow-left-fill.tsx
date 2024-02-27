import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowLeftFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 13V20L4 12L12 4V11H20V13H12Z" />
  </Svg>
);

export default SvgArrowLeftFill;
