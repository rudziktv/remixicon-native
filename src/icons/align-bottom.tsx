import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgAlignBottom = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 19H21V21H3V19ZM8 13H11L7 17L3 13H6V3H8V13ZM18 13H21L17 17L13 13H16V3H18V13Z" />
  </AnimatedSvg>
);

export default SvgAlignBottom;
