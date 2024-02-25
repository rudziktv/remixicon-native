import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgExpandUpDownFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" />
  </AnimatedSvg>
);

export default SvgExpandUpDownFill;
