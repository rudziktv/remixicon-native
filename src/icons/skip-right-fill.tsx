import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipRightFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z" />
  </AnimatedSvg>
);

export default SvgSkipRightFill;
