import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgContractUpDownFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z" />
  </AnimatedSvg>
);

export default SvgContractUpDownFill;
