import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCodeSLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M24 12L18.3431 17.6568L16.9289 16.2426L21.1716 12L16.9289 7.75735L18.3431 6.34314L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6568L0 12L5.65685 6.34314L7.07107 7.75735L2.82843 12Z" />
  </Svg>
);

export default SvgCodeSLine;
