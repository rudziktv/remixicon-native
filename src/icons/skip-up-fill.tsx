import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipUpFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z" />
  </AnimatedSvg>
);

export default SvgSkipUpFill;
