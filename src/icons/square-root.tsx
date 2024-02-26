import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSquareRoot = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M15.382 4H22V6H16.618L9 21.2361L5.38197 14H2V12H6.61803L9 16.7639L15.382 4Z" />
  </AnimatedSvg>
);

export default SvgSquareRoot;
