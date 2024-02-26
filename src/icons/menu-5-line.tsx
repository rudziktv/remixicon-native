import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMenu5Line = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z" />
  </AnimatedSvg>
);

export default SvgMenu5Line;
