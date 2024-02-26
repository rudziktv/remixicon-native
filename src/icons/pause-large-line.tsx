import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgPauseLargeLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
  </AnimatedSvg>
);

export default SvgPauseLargeLine;
