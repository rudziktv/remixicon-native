import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgArrowTurnBackFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M17 16H13L18 22L23 16H19V11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11V20H5V11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11V16Z" />
  </AnimatedSvg>
);

export default SvgArrowTurnBackFill;
