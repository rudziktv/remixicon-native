import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgBarChartLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z" />
  </AnimatedSvg>
);

export default SvgBarChartLine;
