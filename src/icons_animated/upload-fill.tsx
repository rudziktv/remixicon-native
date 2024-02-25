import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgUploadFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z" />
  </AnimatedSvg>
);

export default SvgUploadFill;
