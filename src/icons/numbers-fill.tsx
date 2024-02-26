import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgNumbersFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M9 18H4V10H9V18ZM15 18H10V6H15V18ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" />
  </AnimatedSvg>
);

export default SvgNumbersFill;
