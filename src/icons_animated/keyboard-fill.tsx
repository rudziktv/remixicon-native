import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgKeyboardFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 17H21V19H3V17ZM3 11H6V14H3V11ZM8 11H11V14H8V11ZM3 5H6V8H3V5ZM13 5H16V8H13V5ZM18 5H21V8H18V5ZM13 11H16V14H13V11ZM18 11H21V14H18V11ZM8 5H11V8H8V5Z" />
  </AnimatedSvg>
);

export default SvgKeyboardFill;
