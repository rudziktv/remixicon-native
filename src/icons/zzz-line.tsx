import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgZzzLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M11 11V13L5.67257 19H11V21H3V19L8.32557 13H3V11H11ZM21 3V5L15.6726 11H21V13H13V11L18.3256 5H13V3H21Z" />
  </AnimatedSvg>
);

export default SvgZzzLine;
