import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgDownloadFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z" />
  </AnimatedSvg>
);

export default SvgDownloadFill;
