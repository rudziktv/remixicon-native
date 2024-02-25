import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgContractLeftRightFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M5 18 11 12 5 6V18ZM19 6 13 12 19 18V6Z" />
  </AnimatedSvg>
);

export default SvgContractLeftRightFill;
