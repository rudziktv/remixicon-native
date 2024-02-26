import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipLeftFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z" />
  </AnimatedSvg>
);

export default SvgSkipLeftFill;
