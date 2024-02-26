import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgPentagonFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12.0004 0.700195L22.7473 8.5083L18.6423 21.1421H5.35838L1.25342 8.5083L12.0004 0.700195Z" />
  </AnimatedSvg>
);

export default SvgPentagonFill;
