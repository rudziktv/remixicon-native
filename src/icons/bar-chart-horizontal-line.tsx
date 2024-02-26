import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgBarChartHorizontalLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z" />
  </AnimatedSvg>
);

export default SvgBarChartHorizontalLine;
