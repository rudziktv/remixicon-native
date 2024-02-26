import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgBuilding3Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M10 10.1111V1L21 7V21H3V7L10 10.1111Z" />
  </AnimatedSvg>
);

export default SvgBuilding3Fill;
