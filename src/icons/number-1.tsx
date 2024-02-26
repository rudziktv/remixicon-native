import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgNumber1 = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z" />
  </AnimatedSvg>
);

export default SvgNumber1;
