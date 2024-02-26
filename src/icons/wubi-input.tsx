import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgWubiInput = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 21V19H6.662L7.896 12H5V10H8.249L9.13 5H4V3H20V5H11.161L10.279 10H18V19H21V21H3ZM16 12H9.927L8.692 19H16V12Z" />
  </AnimatedSvg>
);

export default SvgWubiInput;
