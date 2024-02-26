import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgFontSize2 = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z" />
  </AnimatedSvg>
);

export default SvgFontSize2;
