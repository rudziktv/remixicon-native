import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgPentagonFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12.0004 0.700195L22.7473 8.5083L18.6423 21.1421H5.35838L1.25342 8.5083L12.0004 0.700195Z" />
  </Svg>
);

export default SvgPentagonFill;
