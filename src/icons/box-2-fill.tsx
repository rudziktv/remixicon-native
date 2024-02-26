import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgBox2Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65788V16.3469L12 20.689V12L4.5 7.65788Z" />
  </AnimatedSvg>
);

export default SvgBox2Fill;
