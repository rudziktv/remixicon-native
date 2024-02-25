import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgExpandLeftRightFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z" />
  </AnimatedSvg>
);

export default SvgExpandLeftRightFill;
